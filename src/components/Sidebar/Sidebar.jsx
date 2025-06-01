import React from 'react';
import { Eye, Users, User, X } from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`
      fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg border-r transform transition-transform duration-200 ease-in-out
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white text-sm font-bold">L</span>
          </div>
          <span className="font-medium text-gray-700">Logo du site</span>
        </div>
        <button 
          className="lg:hidden p-1 hover:bg-gray-100 rounded"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      
      <nav className="p-4 flex-1">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Dashboards</h3>
          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg text-blue-700 shadow-sm border border-blue-200">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Overview</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Pages</h3>
          <div className="space-y-1">
            <div className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              <Users className="w-4 h-4" />
              <span className="text-sm">Candidatures</span>
            </div>
            <div className="ml-6 space-y-1">
              <div className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 cursor-pointer py-2 px-3 rounded transition-colors">Postuler</div>
              <div className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 cursor-pointer py-2 px-3 rounded transition-colors">Ma candidature</div>
              <div className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 cursor-pointer py-2 px-3 rounded transition-colors">Historique</div>
              <div className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 cursor-pointer py-2 px-3 rounded transition-colors">Documents</div>
            </div>
            <div className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              <User className="w-4 h-4" />
              <span className="text-sm">Profil</span>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="p-4 border-t">
        <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
          <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-medium">BW</span>
          </div>
          <span className="text-sm text-gray-600">ByeWind</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 