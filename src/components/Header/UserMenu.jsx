import React from 'react';
import { Settings, User, LogOut } from 'lucide-react';

const UserMenu = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
      <div className="p-2">
        <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
          <Settings className="w-4 h-4" />
          <span className="text-sm">Paramètres</span>
        </div>
        <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
          <User className="w-4 h-4" />
          <span className="text-sm">Mon profil</span>
        </div>
        <hr className="my-2" />
        <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer text-red-600">
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Déconnexion</span>
        </div>
      </div>
    </div>
  );
};

export default UserMenu; 