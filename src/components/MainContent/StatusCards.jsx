import React from 'react';
import { FileText, Award } from 'lucide-react';

const StatusCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
      <div className="bg-white rounded-xl border p-4 lg:p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-medium">Statut de Candidature</h3>
            <p className="text-sm text-gray-500">État actuel</p>
          </div>
        </div>
        <div className="text-center py-6 lg:py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500 font-medium mb-2">Aucune candidature soumise</p>
          <button className="text-blue-600 text-sm hover:text-blue-700 font-medium">
            Créer une candidature
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-xl border p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">Historique</h4>
                <p className="text-sm text-gray-500">Candidatures passées</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-gray-900">2</span>
              <div className="text-xs text-green-600 font-medium">+1 ce mois</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Candidature acceptée</h4>
                <p className="text-sm text-gray-500">Succès</p>
              </div>
            </div>
            <span className="text-2xl font-bold text-gray-900">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCards; 