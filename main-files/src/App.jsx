// App.js (with basic auth check)
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ThemeProvider from "./layout/provider";
import AppliancePage from './pages/Website/Appliance';

import LoginPage from "./pages/Website/Login";

import InsulationPage from "./pages/Website/Insulation";
import ProjectsPage from './pages/Website/ProjectsPage';

import { AuthProvider, useAuth } from './auth/AuthContext';
import AboutPage from "./pages/Website/About";
import CreateAccountPage from "./pages/Website/CreateAccount";


function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     // setIsAuthenticated(true);
//   };

    const isAuthenticated = true;

  return (
    <AuthProvider>
        <Router>
            <Routes>
                <Route element={<ThemeProvider />}>
                    <Route path="/" element={<LoginPage />} />
                    <Route
                        path="/projects"
                        element={isAuthenticated ? <ProjectsPage /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/insulation"
                        element={isAuthenticated ? <InsulationPage /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/appliances"
                        element={isAuthenticated ? <AppliancePage /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/create-account"
                        element={isAuthenticated ? <CreateAccountPage /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/about"
                        element={<AboutPage />}
                    />

                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    </AuthProvider>
  );
};


// ProtectedRoute component
function ProtectedRoute ( {children} ) {
    const { isAuthenticated } = useAuth();
  
    console.log("Protected: ", isAuthenticated);

    if (!isAuthenticated) {
      return <Navigate to="/" />;
  
    return children;
  }
}


export default App;
