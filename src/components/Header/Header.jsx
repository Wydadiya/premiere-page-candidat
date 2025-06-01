import React, { useState } from 'react';
import { Bell, ChevronDown, Menu } from 'lucide-react';
import NotificationDropdown from './NotificationDropdown';
import UserMenu from './UserMenu';

const Header = ({ 
  setSidebarOpen, 
  currentTime, 
  formatTime, 
  notifications,
  unreadNotificationsCount
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white border-b px-4 lg:px-6 py-4 sticky top-0 z-30 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div className="hidden sm:flex items-center gap-2 text-sm">
            <span className="text-gray-600">Tableau de bord</span>
            <span className="text-gray-400">/</span>
            <span className="font-medium text-gray-900">Accueil</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden sm:block text-sm text-gray-500">{formatTime(currentTime)}</span>
          
          {/* Notifications */}
          <div className="relative">
            <button 
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="w-5 h-5 text-gray-600" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                  {unreadNotificationsCount}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <NotificationDropdown notifications={notifications} />
            )}
          </div>
          
          {/* User Menu */}
          <div className="relative">
            <button 
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="hidden sm:block text-right">
                <div className="text-sm font-medium">Thomas Anree</div>
                <div className="text-xs text-gray-500">UX Designer</div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">TA</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            
            {showUserMenu && (
              <UserMenu />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 