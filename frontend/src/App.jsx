import React, { useState } from 'react';
import './App.css';

import Header from './portals/migrant/components/Header';
import BackgroundGraphics from './portals/migrant/components/BackgroundGraphics';
import MigrantLogin from './portals/migrant/components/MigrantLogin';
import SelectHospital from './portals/migrant/components/SelectHospital';
import UploadDocuments from './portals/migrant/components/UploadDocuments';
import MigrantRegistrationForm from './portals/migrant/components/MigrantRegistrationForm';

function App() {
  const [currentStep, setCurrentStep] = useState('login');
  const [userData, setUserData] = useState({});

  // This function is called at the very end of the process
  const handleFinalSubmit = (finalData) => {
    const finalUserData = { ...userData, ...finalData };
    console.log("PROCESS COMPLETE. FINAL DATA:", finalUserData);
    
    // In a real app, you would save the data. Here we just show a success message.
    alert("Process complete! Check the browser console for the final data object.");
    
    // Reset the application to the login screen
    setUserData({});
    setCurrentStep('login');
  };

  // Generic function to move to the next step
  const handleNextStep = (step, data = {}) => {
    setUserData(prevData => ({ ...prevData, ...data }));
    setCurrentStep(step);
  };

  // Generic function to move to the previous step
  const handlePrevStep = (step) => {
    setCurrentStep(step);
  };

  // Determines which component to show
  const renderStep = () => {
    switch (currentStep) {
      case 'login':
        return (
          <MigrantLogin
            onNext={(data) => handleNextStep('register', data)}
            onNavigateToRegister={() => handleNextStep('register', {})}
          />
        );
      case 'register':
        return (
          <MigrantRegistrationForm
            onNext={(formData) => handleNextStep('upload', formData)}
            onBack={() => handlePrevStep('login')}
          />
        );
      case 'upload':
        return (
          <UploadDocuments
            onNext={(data) => handleNextStep('hospital', data)}
            onBack={() => handlePrevStep('register')}
          />
        );
      case 'hospital':
        return (
          <SelectHospital
            // This is the key part: onNext calls the final submit function
            onNext={(data) => handleFinalSubmit(data)}
            onBack={() => handlePrevStep('upload')}
          />
        );
      default:
        return <MigrantLogin onNext={(data) => handleNextStep('register', data)} />;
    }
  };

  return (
    
  <div className="app-container">
    <main className="form-container">
      {renderStep()} {/* MigrantLogin, RegistrationForm, etc. */}
    </main>
  </div>

  );
}

export default App;