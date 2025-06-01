import React from 'react';
import { Bell } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <>
      <div className="mb-6 lg:mb-8">
        <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
          Bonjour Thomas 👋
        </h1>
        <p className="text-gray-600 text-sm lg:text-base">
          Bienvenue dans votre espace candidat. Ici, vous pouvez gérer votre candidature spontanée et suivre son état.
        </p>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 lg:p-6 mb-6 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-medium text-blue-900">Bienvenu !</h3>
        </div>
        <p className="text-sm text-blue-800">
          Notifications may include alerts, sounds and icon badges.
        </p>
      </div>
    </>
  );
};

export default WelcomeSection; 