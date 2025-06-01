import React from 'react';

const QuickStats = () => {
  return (
    <div className="hidden xl:block bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
      <h3 className="font-medium text-purple-900 mb-4">Statistiques rapides</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-purple-700">Profil consulté</span>
          <span className="font-bold text-purple-900">12 fois</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-purple-700">Candidatures</span>
          <span className="font-bold text-purple-900">2 actives</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-purple-700">Réponses</span>
          <span className="font-bold text-purple-900">1 en attente</span>
        </div>
      </div>
    </div>
  );
};

export default QuickStats; 