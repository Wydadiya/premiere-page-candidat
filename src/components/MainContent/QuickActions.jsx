import React from 'react';
import { Plus, Download, Edit } from 'lucide-react';

const QuickActions = () => {
  const quickActions = [
    { label: 'Nouvelle candidature', icon: Plus, color: 'bg-blue-600 hover:bg-blue-700' },
    { label: 'Télécharger CV', icon: Download, color: 'bg-green-600 hover:bg-green-700' },
    { label: 'Modifier profil', icon: Edit, color: 'bg-purple-600 hover:bg-purple-700' }
  ];

  return (
    <div className="lg:hidden mb-6">
      <h3 className="font-medium mb-3">Actions rapides</h3>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${action.color}`}
          >
            <action.icon className="w-4 h-4" />
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions; 