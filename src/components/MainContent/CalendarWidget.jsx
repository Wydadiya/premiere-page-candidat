import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarWidget = ({ 
  initialSelectedDate = 15,
  initialMonth = { month: 'Septembre', year: 2022 }
}) => {
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  
  const daysOfWeek = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];
  const calendarDays = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, null]
  ];

  return (
    <div className="bg-white rounded-xl border p-4 lg:p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Calendrier</h3>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">{currentMonth.month} {currentMonth.year}</h4>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-xs font-medium text-gray-500 text-center py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.flat().map((day, index) => (
          <button
            key={index}
            className={`h-10 flex items-center justify-center text-sm rounded-lg transition-all ${
              day === selectedDate
                ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md transform scale-105'
                : day
                ? 'hover:bg-gray-100 text-gray-700 hover:scale-105'
                : 'text-transparent cursor-default'
            }`}
            onClick={() => day && setSelectedDate(day)}
            disabled={!day}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget; 