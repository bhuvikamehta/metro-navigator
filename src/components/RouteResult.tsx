import React from 'react';
import { Clock, IndianRupee, Route, Shuffle } from 'lucide-react';
import { RouteResult as RouteResultType } from '../utils/metroAlgorithms';
import { getDetailedPath, getLineColor } from '../utils/metroAlgorithms';

interface RouteResultProps {
  shortestPath: string[];
  minLineChangesResult: { path: string[]; lineChanges: number };
  estimatedTime: number;
  fare: number;
}

export function RouteResult({ 
  shortestPath, 
  minLineChangesResult, 
  estimatedTime, 
  fare 
}: RouteResultProps) {
  const detailedShortestPath = getDetailedPath(shortestPath);
  const detailedMinChangesPath = getDetailedPath(minLineChangesResult.path);

  const formatPath = (path: typeof detailedShortestPath) => {
    return path.map((item, index) => (
      <span key={index} className="inline-flex items-center">
        <span
          className="inline-block w-3 h-3 rounded-full mr-2"
          style={{ backgroundColor: getLineColor(item.line) }}
        ></span>
        <span className="text-gray-900">{item.station}</span>
        {index < path.length - 1 && (
          <span className="mx-3 text-gray-400">→</span>
        )}
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Route Information</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Route className="text-blue-600" size={20} />
            <span className="text-sm font-medium text-blue-800">Stations</span>
          </div>
          <p className="text-2xl font-bold text-blue-900">{(shortestPath.length-1)}</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Shuffle className="text-purple-600" size={20} />
            <span className="text-sm font-medium text-purple-800">Line Changes</span>
          </div>
          <p className="text-2xl font-bold text-purple-900">{minLineChangesResult.lineChanges}</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="text-green-600" size={20} />
            <span className="text-sm font-medium text-green-800">Time</span>
          </div>
          <p className="text-2xl font-bold text-green-900">{estimatedTime} min</p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <IndianRupee className="text-orange-600" size={20} />
            <span className="text-sm font-medium text-orange-800">Fare</span>
          </div>
          <p className="text-2xl font-bold text-orange-900">₹{fare}</p>
        </div>
      </div>

      {/* Route Details */}
      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Route className="mr-2 text-blue-600" size={20} />
            Shortest Path ({shortestPath.length - 1} stops)
          </h3>
          <div className="text-sm leading-relaxed">
            {formatPath(detailedShortestPath)}
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Shuffle className="mr-2 text-purple-600" size={20} />
            Minimum Line Changes Path ({minLineChangesResult.lineChanges} changes)
          </h3>
          <div className="text-sm leading-relaxed">
            {formatPath(detailedMinChangesPath)}
          </div>
        </div>
      </div>

      {/* Travel Tips */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">Travel Tips</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Peak hours: 8-10 AM and 6-8 PM (expect crowds)</li>
          <li>• Keep your metro card/token ready before boarding</li>
          <li>• Stand on the right side of escalators</li>
          <li>• Allow passengers to exit before boarding</li>
        </ul>
      </div>
    </div>
  );
}