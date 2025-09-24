import React, { useState } from 'react';
import './App.css';

import initialUserData from './data/migrantData.js';
import RoleSelection from './portals/rolls/RoleSelection';
import MigrantLogin from './portals/migrant/components/MigrantLogin';
import Dashboard from './portals/migrant/components/Dashboard';
import Profile from './portals/migrant/components/Profile';
import UploadDocuments from './portals/migrant/components/UploadDocuments';
import SelectHospital from './portals/migrant/components/SelectHospital';
import HealthDocuments from './portals/migrant/components/HealthDocuments';
import MigrantRegistrationForm from './portals/migrant/components/MigrantRegistrationForm';
import BackgroundGraphics from './portals/migrant/components/BackgroundGraphics.jsx';
import Header from './portals/migrant/components/Header.jsx'


function App() {
  const [appMode, setAppMode] = useState('roleSelection');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [currentStep, setCurrentStep] = useState('login');
  const [userData, setUserData] = useState(initialUserData);
  const [registrationData, setRegistrationData] = useState({});

  const handleLoginSuccess = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setAppMode('roleSelection');
  };
  const navigateTo = (view) => setCurrentView(view);
  const handleRegistrationStep = (step, data = {}) => {
    setRegistrationData(prev => ({ ...prev, ...data }));
    setCurrentStep(step);
  };
  const handleFinalRegistrationSubmit = (finalData) => {
    const finalRegData = { ...registrationData, ...finalData };
    console.log("NEW USER REGISTERED:", finalRegData);
    alert("Registration successful! You can now log in.");
    setRegistrationData({});
    setCurrentStep('login');
  };
  const handleDocumentUpload = (docData) => {
    setUserData(prev => ({ ...prev, documents: [...prev.documents, docData.document] }));
    navigateTo('dashboard');
  };
  const handleHospitalSelect = (hospitalData) => {
    setUserData(prev => ({ ...prev, hospital: { name: hospitalData.hospital, queueStatus: 'In Progress', appointmentDate: '25 September 2025' } }));
    navigateTo('dashboard');
  };

  const renderLoggedInView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard userData={userData} navigateTo={navigateTo} onLogout={handleLogout} />;
      case 'profile':
        return <Profile userData={userData} navigateTo={navigateTo} onLogout={handleLogout} />;
      case 'upload':
        return <UploadDocuments onNext={handleDocumentUpload} onBack={() => navigateTo('dashboard')} />;
      case 'selectHospital':
        return <SelectHospital onNext={handleHospitalSelect} onBack={() => navigateTo('dashboard')} />;
      case 'viewDocuments':
        return <HealthDocuments userData={userData} navigateTo={navigateTo} />;
      default:
        return <Dashboard userData={userData} navigateTo={navigateTo} onLogout={handleLogout} />;
    }
  };

  const renderLoggedOutView = () => {
    switch (currentStep) {
      case 'login':
        return (
          <MigrantLogin
            onLoginSuccess={handleLoginSuccess}
            onNavigateToRegister={() => setCurrentStep('register')}
            onBack={() => setAppMode('roleSelection')}
          />
        );
      case 'register':
        return (
          <MigrantRegistrationForm
            onNext={(formData) => handleRegistrationStep('upload', formData)}
            onBack={() => setCurrentStep('login')}
          />
        );
      case 'upload':
        return (
          <UploadDocuments
            onNext={(docData) => handleRegistrationStep('hospital', docData)}
            onBack={() => setCurrentStep('register')}
          />
        );
      case 'hospital':
        return (
          <SelectHospital
            onNext={(hospitalData) => handleFinalRegistrationSubmit(hospitalData)}
            onBack={() => setCurrentStep('upload')}
          />
        );
      default:
        return <MigrantLogin onLoginSuccess={handleLoginSuccess} onNavigateToRegister={() => setCurrentStep('register')} />;
    }
  };

  const renderApp = () => {
    switch (appMode) {
      case 'migrantFlow':
        return isLoggedIn ? renderLoggedInView() : renderLoggedOutView();
      case 'ngoFlow':
        return <NgoRegistration onFinish={() => setAppMode('roleSelection')} />;
      case 'roleSelection':
      default:
        return <RoleSelection onSelectMode={setAppMode} />;
    }
  };

  return (
    <div className="app-container">
      <BackgroundGraphics></BackgroundGraphics>
      <Header></Header>
      <main className="form-container">
        {renderApp()}
      </main>
    </div>
  );
}

export default App;