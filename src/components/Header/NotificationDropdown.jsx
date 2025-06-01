import React from 'react';

const NotificationDropdown = ({ notifications }) => {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg z-50">
      <div className="p-4 border-b">
        <h3 className="font-medium">Notifications</h3>
      </div>
      <div className="max-h-64 overflow-y-auto">
        {notifications.map(notification => (
          <div 
            key={notification.id}
            className={`p-4 border-b hover:bg-gray-50 cursor-pointer transition-colors ${
              notification.unread ? 'bg-blue-50' : ''
            }`}
          >
            <p className="text-sm font-medium">{notification.message}</p>
            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationDropdown; 