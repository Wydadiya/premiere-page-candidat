import React from 'react';

const DailyTip = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 lg:p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white text-lg">💡</span>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-blue-900 mb-2">Conseil du jour</h4>
          <p className="text-sm text-blue-800 leading-relaxed">
            N'oubliez pas de mettre régulièrement à jour votre profil. Une candidature actualisée montre votre engagement professionnel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyTip; 