import React, { useState } from 'react';
import './App.css';

// 1. IMPORT the data from your new file
import initialUserData from './data/migrantData.js';

// Import all your components
import MigrantLogin from './portals/migrant/components/MigrantLogin';
import Dashboard from './portals/migrant/components/Dashboard';
import Profile from './portals/migrant/components/Profile';
import SelectHospital from './portals/migrant/components/SelectHospital';
import UploadDocuments from './portals/migrant/components/UploadDocuments';
import MigrantRegistrationForm from './portals/migrant/components/MigrantRegistrationForm';
import BackgroundGraphics from './portals/migrant/components/BackgroundGraphics.jsx';
import Header from './portals/migrant/components/Header.jsx'


function App() {
  // --- STATE MANAGEMENT ---
  
  // Tracks if the user is logged in to show the dashboard
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Tracks the current view for the LOGGED-IN user (dashboard, profile, etc.)
  const [currentView, setCurrentView] = useState('dashboard');
  
  // Tracks the current step for the LOGGED-OUT user (login, register, upload, etc.)
  const [currentStep, setCurrentStep] = useState('login');

  // Holds the data for the logged-in user's dashboard
  const [userData, setUserData] = useState(initialUserData);
  
  // Holds the data for a NEW user during the registration process
  const [registrationData, setRegistrationData] = useState({});

  // --- HANDLER FUNCTIONS ---

  // For the Login & Logout Flow
  const handleLoginSuccess = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentStep('login'); // Reset to login screen on logout
  };

  // For the Multi-Step Registration Flow
  const handleRegistrationStep = (step, data = {}) => {
    setRegistrationData(prev => ({ ...prev, ...data }));
    setCurrentStep(step);
  };

  const handleFinalRegistrationSubmit = (finalData) => {
    const finalRegData = { ...registrationData, ...finalData };
    console.log("NEW USER REGISTERED:", finalRegData);
    alert("Registration successful! You can now log in.");
    setRegistrationData({});
    setCurrentStep('login'); // After registration, return to the login page
  };
  
  // For navigation within the Logged-In Dashboard view
  const navigateTo = (view) => setCurrentView(view);
  const handleDocumentUpload = (docData) => {
    setUserData(prev => ({ ...prev, documents: [...prev.documents, docData.document] }));
    navigateTo('dashboard');
  };
  const handleHospitalSelect = (hospitalData) => {
    setUserData(prev => ({ ...prev, hospital: { name: hospitalData.hospital, queueStatus: 'In Progress', appointmentDate: '25 September 2025' } }));
    navigateTo('dashboard');
  };

  // --- RENDER LOGIC ---

  // Renders the correct screen for a LOGGED-IN user
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

  // Renders the correct screen for a LOGGED-OUT user (Login or Registration steps)
  const renderLoggedOutView = () => {
    switch (currentStep) {
      case 'login':
        return (
          <MigrantLogin
            onLoginSuccess={handleLoginSuccess}
            onNavigateToRegister={() => setCurrentStep('register')}
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

  return (
    <div className="app-container">
      <BackgroundGraphics></BackgroundGraphics>
      <Header></Header>
      <main className="form-container">
        {isLoggedIn ? renderLoggedInView() : renderLoggedOutView()}
      </main>
    </div>
  );
}

export default App;