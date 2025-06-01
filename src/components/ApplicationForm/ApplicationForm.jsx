import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  User, 
  GraduationCap, 
  Briefcase, 
  FileText,
  Upload,
  Check,
  AlertCircle,
  Phone,
  Mail,
  Calendar,
  Building,
  BookOpen,
  Award,
  Link,
  Github,
  Linkedin,
  Clock,
  MapPin,
  X,
  Plus
} from 'lucide-react';

// Composant pour l'indicateur de progression
const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <React.Fragment key={index}>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
            index + 1 <= currentStep 
              ? 'bg-blue-600 border-blue-600 text-white' 
              : 'border-gray-300 text-gray-400'
          }`}>
            {index + 1 < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              <span className="font-medium">{index + 1}</span>
            )}
          </div>
          {index < totalSteps - 1 && (
            <div className={`h-1 w-16 mx-2 transition-all ${
              index + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-300'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// Composant pour les champs de saisie
const InputField = ({ label, type = "text", value, onChange, required = false, placeholder, error, icon: Icon }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`block w-full rounded-lg border border-gray-300 px-3 py-2 ${
            Icon ? 'pl-10' : ''
          } text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-colors ${
            error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
          }`}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};

// Composant pour les champs select
const SelectField = ({ label, value, onChange, options, required = false, error }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 transition-colors ${
          error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
        }`}
      >
        <option value="">Sélectionner...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};

// Composant pour l'upload de fichiers
const FileUpload = ({ label, accept, onChange, required = false, error, files = [] }) => {
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    onChange(selectedFiles);
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    onChange(newFiles);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className={`border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-400 transition-colors ${
        error ? 'border-red-300' : 'border-gray-300'
      }`}>
        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          multiple
          className="hidden"
          id={`file-${label}`}
        />
        <label htmlFor={`file-${label}`} className="cursor-pointer">
          <span className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            Cliquer pour télécharger
          </span>
          <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (max. 10MB)</p>
        </label>
      </div>
      
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">{file.name}</span>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
      
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};

// Étape 1: Informations personnelles
const PersonalInfoStep = ({ data, onChange, errors }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Informations personnelles</h2>
        <p className="text-gray-600">Vérifiez et complétez vos informations personnelles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Prénom"
          value={data.firstName}
          onChange={(value) => onChange('firstName', value)}
          required
          error={errors.firstName}
          placeholder="Votre prénom"
        />
        
        <InputField
          label="Nom"
          value={data.lastName}
          onChange={(value) => onChange('lastName', value)}
          required
          error={errors.lastName}
          placeholder="Votre nom"
        />
        
        <InputField
          label="Email"
          type="email"
          value={data.email}
          onChange={(value) => onChange('email', value)}
          required
          error={errors.email}
          placeholder="votre.email@exemple.com"
          icon={Mail}
        />
        
        <InputField
          label="Téléphone"
          type="tel"
          value={data.phone}
          onChange={(value) => onChange('phone', value)}
          required
          error={errors.phone}
          placeholder="+212 6XX XXX XXX"
          icon={Phone}
        />
        
        <InputField
          label="Date de naissance"
          type="date"
          value={data.birthDate}
          onChange={(value) => onChange('birthDate', value)}
          required
          error={errors.birthDate}
          icon={Calendar}
        />
        
        <InputField
          label="Ville"
          value={data.city}
          onChange={(value) => onChange('city', value)}
          required
          error={errors.city}
          placeholder="Votre ville"
          icon={MapPin}
        />
      </div>
    </div>
  );
};

// Étape 2: Parcours académique
const AcademicInfoStep = ({ data, onChange, errors }) => {
  const educationLevels = [
    { value: 'bac', label: 'Baccalauréat' },
    { value: 'bac+2', label: 'DUT, BTS' },
    { value: 'licence', label: 'Licence' },
    { value: 'master', label: 'Master' },
    { value: 'doctorat', label: 'Doctorat' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <GraduationCap className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Parcours académique</h2>
        <p className="text-gray-600">Renseignez vos informations académiques</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label="Niveau d'études"
          value={data.educationLevel}
          onChange={(value) => onChange('educationLevel', value)}
          options={educationLevels}
          required
          error={errors.educationLevel}
        />
        
        <InputField
          label="Établissement"
          value={data.institution}
          onChange={(value) => onChange('institution', value)}
          required
          error={errors.institution}
          placeholder="Nom de votre établissement"
          icon={Building}
        />
        
        <InputField
          label="Année d'obtention"
          type="number"
          value={data.graduationYear}
          onChange={(value) => onChange('graduationYear', value)}
          required
          error={errors.graduationYear}
          placeholder="2024"
          icon={Calendar}
        />
        
        <InputField
          label="Filière"
          value={data.major}
          onChange={(value) => onChange('major', value)}
          required
          error={errors.major}
          placeholder="Votre spécialité"
          icon={BookOpen}
        />
      </div>

      <div className="space-y-6">
        <FileUpload
          label="Relevés de notes"
          accept=".pdf,.doc,.docx"
          onChange={(files) => onChange('transcripts', files)}
          required
          error={errors.transcripts}
          files={data.transcripts}
        />
        
        <FileUpload
          label="Certificats obtenus (optionnel)"
          accept=".pdf,.doc,.docx,.jpg,.png"
          onChange={(files) => onChange('certificates', files)}
          files={data.certificates}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Profil LinkedIn (optionnel)"
            value={data.linkedin}
            onChange={(value) => onChange('linkedin', value)}
            placeholder="https://linkedin.com/in/votre-profil"
            icon={Linkedin}
          />
          
          <InputField
            label="Profil GitHub (optionnel)"
            value={data.github}
            onChange={(value) => onChange('github', value)}
            placeholder="https://github.com/votre-profil"
            icon={Github}
          />
        </div>
      </div>
    </div>
  );
};

// Étape 3: Informations du stage
const InternshipInfoStep = ({ data, onChange, errors }) => {
  const internshipTypes = [
    { value: 'observation', label: 'Stage d\'observation' },
    { value: 'application', label: 'Stage d\'application' },
    { value: 'perfectionnement', label: 'Stage de perfectionnement' },
    { value: 'fin_etudes', label: 'Stage de fin d\'études' }
  ];

  const durations = [
    { value: '1', label: '1 mois' },
    { value: '2', label: '2 mois' },
    { value: '3', label: '3 mois' },
    { value: '4', label: '4 mois' },
    { value: '5', label: '5 mois' },
    { value: '6', label: '6 mois' }
  ];

  const departments = [
    { value: 'informatique', label: 'Informatique' },
    { value: 'rh', label: 'Ressources Humaines' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'finance', label: 'Finance' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'production', label: 'Production' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Briefcase className="w-8 h-8 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Informations du stage</h2>
        <p className="text-gray-600">Précisez le type de stage souhaité</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label="Type de stage"
          value={data.internshipType}
          onChange={(value) => onChange('internshipType', value)}
          options={internshipTypes}
          required
          error={errors.internshipType}
        />
        
        <SelectField
          label="Durée souhaitée"
          value={data.duration}
          onChange={(value) => onChange('duration', value)}
          options={durations}
          required
          error={errors.duration}
        />
        
        <InputField
          label="Période souhaitée (début)"
          type="date"
          value={data.startDate}
          onChange={(value) => onChange('startDate', value)}
          required
          error={errors.startDate}
          icon={Calendar}
        />
        
        <InputField
          label="Période souhaitée (fin)"
          type="date"
          value={data.endDate}
          onChange={(value) => onChange('endDate', value)}
          required
          error={errors.endDate}
          icon={Calendar}
        />
        
        <SelectField
          label="Département souhaité"
          value={data.department}
          onChange={(value) => onChange('department', value)}
          options={departments}
          required
          error={errors.department}
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Stage déjà effectué dans cette entité
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="oui"
                checked={data.previousInternship === 'oui'}
                onChange={(e) => onChange('previousInternship', e.target.value)}
                className="mr-2"
              />
              Oui
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="non"
                checked={data.previousInternship === 'non'}
                onChange={(e) => onChange('previousInternship', e.target.value)}
                className="mr-2"
              />
              Non
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Thème du stage (domaines souhaités) <span className="text-red-500">*</span>
          </label>
          <textarea
            value={data.internshipTheme}
            onChange={(e) => onChange('internshipTheme', e.target.value)}
            rows={4}
            className={`block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 transition-colors ${
              errors.internshipTheme ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''
            }`}
            placeholder="Décrivez les domaines ou thèmes qui vous intéressent pour ce stage..."
          />
          {errors.internshipTheme && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.internshipTheme}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Étape 4: Documents
const DocumentsStep = ({ data, onChange, errors }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-orange-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Documents requis</h2>
        <p className="text-gray-600">Téléchargez les documents nécessaires pour votre candidature</p>
      </div>

      <div className="space-y-6">
        <FileUpload
          label="CV"
          accept=".pdf,.doc,.docx"
          onChange={(files) => onChange('cv', files)}
          required
          error={errors.cv}
          files={data.cv}
        />
        
        <FileUpload
          label="Lettre de motivation (optionnel)"
          accept=".pdf,.doc,.docx"
          onChange={(files) => onChange('coverLetter', files)}
          files={data.coverLetter}
        />
        
        <FileUpload
          label="Attestation scolaire"
          accept=".pdf,.doc,.docx"
          onChange={(files) => onChange('schoolCertificate', files)}
          required
          error={errors.schoolCertificate}
          files={data.schoolCertificate}
        />
        
        <FileUpload
          label="Assurance"
          accept=".pdf,.doc,.docx"
          onChange={(files) => onChange('insurance', files)}
          required
          error={errors.insurance}
          files={data.insurance}
        />
        
        <FileUpload
          label="Convention de stage"
          accept=".pdf,.doc,.docx"
          onChange={(files) => onChange('internshipAgreement', files)}
          required
          error={errors.internshipAgreement}
          files={data.internshipAgreement}
        />
      </div>
    </div>
  );
};

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Étape 1: Informations personnelles
    firstName: 'Thomas',
    lastName: 'Anree',
    email: 'thomas.anree@email.com',
    phone: '',
    birthDate: '',
    city: '',
    
    // Étape 2: Parcours académique
    educationLevel: '',
    institution: '',
    graduationYear: '',
    major: '',
    transcripts: [],
    certificates: [],
    linkedin: '',
    github: '',
    
    // Étape 3: Informations du stage
    internshipType: '',
    duration: '',
    startDate: '',
    endDate: '',
    department: '',
    previousInternship: '',
    internshipTheme: '',
    
    // Étape 4: Documents
    cv: [],
    coverLetter: [],
    schoolCertificate: [],
    insurance: [],
    internshipAgreement: []
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
        if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
        if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
        if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
        if (!formData.birthDate) newErrors.birthDate = 'La date de naissance est requise';
        if (!formData.city.trim()) newErrors.city = 'La ville est requise';
        break;
      
      case 2:
        if (!formData.educationLevel) newErrors.educationLevel = 'Le niveau d\'études est requis';
        if (!formData.institution.trim()) newErrors.institution = 'L\'établissement est requis';
        if (!formData.graduationYear) newErrors.graduationYear = 'L\'année d\'obtention est requise';
        if (!formData.major.trim()) newErrors.major = 'La filière est requise';
        if (formData.transcripts.length === 0) newErrors.transcripts = 'Les relevés de notes sont requis';
        break;
      
      case 3:
        if (!formData.internshipType) newErrors.internshipType = 'Le type de stage est requis';
        if (!formData.duration) newErrors.duration = 'La durée est requise';
        if (!formData.startDate) newErrors.startDate = 'La date de début est requise';
        if (!formData.endDate) newErrors.endDate = 'La date de fin est requise';
        if (!formData.department) newErrors.department = 'Le département est requis';
        if (!formData.internshipTheme.trim()) newErrors.internshipTheme = 'Le thème du stage est requis';
        break;
      
      case 4:
        if (formData.cv.length === 0) newErrors.cv = 'Le CV est requis';
        if (formData.schoolCertificate.length === 0) newErrors.schoolCertificate = 'L\'attestation scolaire est requise';
        if (formData.insurance.length === 0) newErrors.insurance = 'L\'assurance est requise';
        if (formData.internshipAgreement.length === 0) newErrors.internshipAgreement = 'La convention de stage est requise';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;
    
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      alert('Candidature soumise avec succès !');
      setIsSubmitting(false);
    }, 2000);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep data={formData} onChange={handleChange} errors={errors} />;
      case 2:
        return <AcademicInfoStep data={formData} onChange={handleChange} errors={errors} />;
      case 3:
        return <InternshipInfoStep data={formData} onChange={handleChange} errors={errors} />;
      case 4:
        return <DocumentsStep data={formData} onChange={handleChange} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nouvelle candidature</h1>
          <p className="text-gray-600">Complétez votre candidature en 4 étapes simples</p>
        </div>

        {/* Progress Indicator */}
        <StepIndicator currentStep={currentStep} totalSteps={4} />

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg border p-6 lg:p-8 mb-8">
          {renderCurrentStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Précédent
          </button>

          <div className="text-sm text-gray-500">
            Étape {currentStep} sur 4
          </div>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Suivant
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  Soumettre la candidature
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;