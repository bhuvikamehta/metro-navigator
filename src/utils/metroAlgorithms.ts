import { metroGraph } from '../data/metroGraph';

export interface RouteResult {
  path: string[];
  lineChanges: number;
  estimatedTime: number;
  fare: number;
}

export interface PathWithLine {
  station: string;
  line: string;
}

// BFS for shortest path by station count
export function bfsShortestPath(start: string, end: string): string[] | null {
  if (!metroGraph[start] || !metroGraph[end]) return null;
  
  const visited = new Set<string>();
  const queue: [string, string[]][] = [[start, [start]]];
  visited.add(start);

  while (queue.length > 0) {
    const [current, path] = queue.shift()!;
    
    if (current === end) return path;

    for (const neighbor of metroGraph[current] || []) {
      if (!visited.has(neighbor.station)) {
        visited.add(neighbor.station);
        queue.push([neighbor.station, [...path, neighbor.station]]);
      }
    }
  }

  return null;
}

// BFS for minimum line changes (modified Dijkstra's approach)
// BFS for minimum line changes (modified Dijkstra's approach)
export function bfsMinLineChanges(start: string, end: string): { path: string[]; lineChanges: number } | null {
  if (!metroGraph[start] || !metroGraph[end]) return null;

  // Priority queue based on line changes
  const queue: { station: string; path: string[]; currentLine: string | null; changes: number }[] = [];
  
  // Initialize with all possible lines at the start station
  const startLines = getAllLinesAtStation(start);
  for (const line of startLines) {
    queue.push({
      station: start,
      path: [start],
      currentLine: line,
      changes: 0
    });
  }

  // Track best known changes for each (station, line) combination
  const bestChanges = new Map<string, Map<string, number>>();
  initializeBestChanges(bestChanges, start, startLines);

  while (queue.length > 0) {
    // Sort queue to always pick the path with least changes
    queue.sort((a, b) => a.changes - b.changes);
    const { station, path, currentLine, changes } = queue.shift()!;

    if (station === end) {
      return { path, lineChanges: changes };
    }

    for (const neighbor of metroGraph[station] || []) {
      const neighborLines = getAllLinesAtStation(neighbor.station);
      const isInterchange = neighborLines.length > 1;

      for (const neighborLine of neighborLines) {
        // Only consider neighborLine if it's either:
        // 1. The same line we're currently on (no change)
        // 2. A different line at an interchange station (potential change)
        if (neighborLine === currentLine || isInterchange) {
          const lineChanged = neighborLine !== currentLine;
          const newChanges = lineChanged ? changes + 1 : changes;

          // Check if this path is better than previous paths to this station with this line
          if (!bestChanges.has(neighbor.station)) {
            bestChanges.set(neighbor.station, new Map());
          }

          const stationEntries = bestChanges.get(neighbor.station)!;
          const bestChangeForLine = stationEntries.get(neighborLine) ?? Infinity;

          if (newChanges < bestChangeForLine) {
            stationEntries.set(neighborLine, newChanges);
            queue.push({
              station: neighbor.station,
              path: [...path, neighbor.station],
              currentLine: neighborLine,
              changes: newChanges
            });
          }
        }
      }
    }
  }

  return null;
}

// Helper function to get all lines available at a station
function getAllLinesAtStation(station: string): string[] {
  const lines = new Set<string>();
  for (const neighbor of metroGraph[station] || []) {
    lines.add(neighbor.line);
  }
  return Array.from(lines);
}

// Helper function to initialize best changes map
function initializeBestChanges(map: Map<string, Map<string, number>>, station: string, lines: string[]) {
  const stationMap = new Map<string, number>();
  for (const line of lines) {
    stationMap.set(line, 0);
  }
  map.set(station, stationMap);
}
// Calculate estimated travel time
export function calculateTime(path: string[], lineChanges: number): number {
  const travelTime = (path.length - 1) * 2; // 2 minutes per station
  const changeTime = lineChanges * 5; // 5 minutes per line change
  return travelTime + changeTime;
}

// Calculate fare
export function calculateFare(path: string[]): number {
  const baseFare = (path.length - 1) * 9; // ₹9 per station
  return Math.min(Math.max(baseFare, 10), 60); // Minimum fare ₹10, maximum ₹60
}

// Get all station names for autocomplete
export function getAllStations(): string[] {
  return Object.keys(metroGraph).sort();
}

// Get line color for display
export function getLineColor(line: string): string {
  const colors: Record<string, string> = {
    'Red': '#EF4444',
    'Blue': '#3B82F6',
    'Yellow': '#EAB308',
    'Green': '#22C55E',
    'Violet': '#8B5CF6',
    'Pink': '#EC4899',
    'Magenta': '#D946EF',
    'Orange': '#F97316',
    'Grey': '#6B7280'
  };
  return colors[line] || '#6B7280';
}

// Get detailed path with line information
export function getDetailedPath(path: string[]): PathWithLine[] {
  if (path.length === 0) return [];
  
  const detailedPath: PathWithLine[] = [];
  let currentLine: string | null = null;

  for (let i = 0; i < path.length; i++) {
    const station = path[i];
    
    // For first station, find line to next station
    if (i === 0 && path.length > 1) {
      const nextStation = path[i + 1];
      const connection = metroGraph[station]?.find(n => n.station === nextStation);
      currentLine = connection?.line || null;
    }
    // For other stations, find line from previous station
    else if (i > 0) {
      const prevStation = path[i - 1];
      const connection = metroGraph[prevStation]?.find(n => n.station === station);
      currentLine = connection?.line || currentLine;
    }

    detailedPath.push({
      station,
      line: currentLine || 'Unknown'
    });
  }

  return detailedPath;
}