import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SwapButtonProps {
  onSwap: () => void;
}

export function SwapButton({ onSwap }: SwapButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onSwap}
        className="bg-white border-2 border-gray-200 rounded-full p-3 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
        aria-label="Swap stations"
      >
        <ArrowUpDown className="text-gray-600 hover:text-blue-600 transition-colors duration-200" size={20} />
      </button>
    </div>
  );
}