import React from 'react';
import CustomNavbar from './components/Navbar';
import CustomFooter from './components/Footer';
import MainScreen from './components/MainScreen';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <CustomNavbar />
      <main className="flex-grow container mx-auto">
        <MainScreen />
      </main>
      <CustomFooter />
    </div>
  );
};

export default App;
