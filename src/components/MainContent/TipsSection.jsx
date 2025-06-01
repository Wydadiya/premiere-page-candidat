import React from 'react';
import { FileText, Upload, Eye } from 'lucide-react';

const TipsSection = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 lg:p-6 mb-6">
      <div className="flex items-center gap-3 mb-4 lg:mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-bold">💡</span>
        </div>
        <h3 className="font-medium text-amber-900">Conseils pour augmenter vos chances</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        <div className="text-center group cursor-pointer">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h4 className="font-medium mb-2 group-hover:text-blue-600 transition-colors">Optimisez votre CV</h4>
          <p className="text-sm text-gray-600">
            Mettez en avant vos compétences techniques et votre expérience.
          </p>
        </div>
        
        <div className="text-center group cursor-pointer">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
            <Upload className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="font-medium mb-2 group-hover:text-green-600 transition-colors">Personnalisez votre lettre</h4>
          <p className="text-sm text-gray-600">
            Adaptez votre motivation selon l'entreprise et le poste.
          </p>
        </div>
        
        <div className="text-center group cursor-pointer">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
            <Eye className="w-8 h-8 text-purple-600" />
          </div>
          <h4 className="font-medium mb-2 group-hover:text-purple-600 transition-colors">Restez proactif</h4>
          <p className="text-sm text-gray-600">
            Suivez régulièrement l'état de votre candidature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipsSection; 