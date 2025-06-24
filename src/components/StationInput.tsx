import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';
import { getAllStations } from '../utils/metroAlgorithms';

interface StationInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: 'start' | 'end';
}

export function StationInput({ value, onChange, placeholder, icon }: StationInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredStations, setFilteredStations] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const allStations = getAllStations();

  useEffect(() => {
    if (value) {
      const filtered = allStations.filter(station =>
        station.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredStations(filtered.slice(0, 8)); // Show max 8 suggestions
    } else {
      setFilteredStations([]);
    }
  }, [value, allStations]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setIsOpen(true);
  };

  const handleStationSelect = (station: string) => {
    onChange(station);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const iconColor = icon === 'start' ? 'text-green-600' : 'text-red-600';
  const borderColor = icon === 'start' ? 'focus:border-green-500' : 'focus:border-red-500';
  const ringColor = icon === 'start' ? 'focus:ring-green-200' : 'focus:ring-red-200';

  return (
    <div className="relative">
      <div className="relative">
        <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${iconColor}`}>
          {icon === 'start' ? <MapPin size={20} /> : <Search size={20} />}
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className={`w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg ${borderColor} ${ringColor} focus:ring-2 focus:outline-none transition-all duration-200 text-gray-900 placeholder-gray-500`}
          autoComplete="off"
        />
      </div>
      
      {isOpen && filteredStations.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto"
        >
          {filteredStations.map((station, index) => (
            <button
              key={station}
              onClick={() => handleStationSelect(station)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-900">{station}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}