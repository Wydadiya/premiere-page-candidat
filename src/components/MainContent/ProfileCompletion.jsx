import React from 'react';
import { User, FileText, GraduationCap, Award, Camera, Check } from 'lucide-react';

const ProfileCompletion = ({ 
  profileCompletion, 
  completedItems, 
  toggleProfileItem 
}) => {
  const profileItems = [
    { key: 'personalInfo', label: 'Informations personnelles', icon: User },
    { key: 'cv', label: 'CV Téléchargé', icon: FileText },
    { key: 'education', label: 'Formation académique', icon: GraduationCap },
    { key: 'skills', label: 'Compétences', icon: Award },
    { key: 'photo', label: 'Photo de profil', icon: Camera }
  ];

  return (
    <div className="bg-white rounded-xl border p-4 lg:p-6 hover:shadow-lg transition-shadow">
      <h3 className="font-medium mb-4">Complétez votre profil</h3>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">Progression du profil</span>
          <span className="text-sm font-bold text-blue-600">{Math.round(profileCompletion)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
            style={{ width: `${profileCompletion}%` }}
          ></div>
        </div>
      </div>
      
      <div className="space-y-3">
        {profileItems.map((item) => {
          const Icon = item.icon;
          const isCompleted = completedItems[item.key];
          
          return (
            <div 
              key={item.key}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-all group"
              onClick={() => toggleProfileItem(item.key)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                isCompleted 
                  ? 'bg-gradient-to-br from-green-400 to-green-500 shadow-md' 
                  : 'bg-gray-200 group-hover:bg-gray-300'
              }`}>
                {isCompleted ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <Icon className="w-4 h-4 text-gray-500" />
                )}
              </div>
              <span className={`text-sm transition-colors ${
                isCompleted ? 'text-gray-900 font-medium' : 'text-gray-600 group-hover:text-gray-900'
              }`}>
                {item.label}
              </span>
              {isCompleted && (
                <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              )}
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-md">
        Compléter le profil
      </button>
    </div>
  );
};

export default ProfileCompletion; 