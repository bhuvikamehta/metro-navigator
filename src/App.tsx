import React, { useState } from 'react';
import { Train, Navigation, MapPin } from 'lucide-react';
import { StationInput } from './components/StationInput';
import { SwapButton } from './components/SwapButton';
import { RouteResult } from './components/RouteResult';
import { 
  bfsShortestPath, 
  bfsMinLineChanges, 
  calculateTime, 
  calculateFare 
} from './utils/metroAlgorithms';

function App() {
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [routeResult, setRouteResult] = useState<{
    shortestPath: string[];
    minLineChangesResult: { path: string[]; lineChanges: number };
    estimatedTime: number;
    fare: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSwapStations = () => {
    const temp = startStation;
    setStartStation(endStation);
    setEndStation(temp);
  };

  const handleSearch = async () => {
    if (!startStation.trim() || !endStation.trim()) {
      setError('Please enter both start and destination stations');
      return;
    }

    if (startStation.trim() === endStation.trim()) {
      setError('Start and destination stations cannot be the same');
      return;
    }

    setIsLoading(true);
    setError('');
    setRouteResult(null);

    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const shortestPath = bfsShortestPath(startStation.trim(), endStation.trim());
      const minLineChangesResult = bfsMinLineChanges(startStation.trim(), endStation.trim());

      if (!shortestPath || !minLineChangesResult) {
        setError('No route found between the selected stations. Please check station names.');
        setIsLoading(false);
        return;
      }

      const estimatedTime = calculateTime(minLineChangesResult.path, minLineChangesResult.lineChanges);
      const fare = calculateFare(minLineChangesResult.path);

      setRouteResult({
        shortestPath,
        minLineChangesResult,
        estimatedTime,
        fare
      });
    } catch (err) {
      setError('An error occurred while calculating the route. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Train className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Delhi Metro Navigator</h1>
              <p className="text-sm text-gray-600">Find the best route for your journey</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <Navigation className="text-blue-600" size={24} />
            <h2 className="text-xl font-semibold text-gray-900">Plan Your Journey</h2>
          </div>

          <div className="space-y-4">
            <StationInput
              value={startStation}
              onChange={setStartStation}
              placeholder="Enter starting station"
              icon="start"
            />

            <SwapButton onSwap={handleSwapStations} />

            <StationInput
              value={endStation}
              onChange={setEndStation}
              placeholder="Enter destination station"
              icon="end"
            />

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 shadow-md hover:shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Finding Route...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <MapPin size={20} />
                  <span>Find Route</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {routeResult && (
          <RouteResult
            shortestPath={routeResult.shortestPath}
            minLineChangesResult={routeResult.minLineChangesResult}
            estimatedTime={routeResult.estimatedTime}
            fare={routeResult.fare}
          />
        )}

        {/* Info Section */}
        {!routeResult && !isLoading && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About Delhi Metro</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Operating Hours</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Monday to Sunday: 6:00 AM to 11:00 PM<br />
                  Sunday: 6:00 AM to 10:00 PM
                </p>
                
                <h4 className="font-medium text-gray-900 mb-2">Fare Information</h4>
                <p className="text-gray-600 text-sm">
                  Minimum fare: ₹10<br />
                  Maximum fare: ₹60<br />
                  Rate: ₹9 per station
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Metro Lines</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Red Line', color: '#EF4444' },
                    { name: 'Blue Line', color: '#3B82F6' },
                    { name: 'Yellow Line', color: '#EAB308' },
                    { name: 'Green Line', color: '#22C55E' },
                    { name: 'Violet Line', color: '#8B5CF6' },
                    { name: 'Pink Line', color: '#EC4899' },
                    { name: 'Magenta Line', color: '#D946EF' }
                  ].map(line => (
                    <div key={line.name} className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: line.color }}
                      ></div>
                      <span className="text-sm text-gray-700">{line.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Delhi Metro Navigator - Your companion for seamless metro travel
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Data based on official DMRC network information
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;