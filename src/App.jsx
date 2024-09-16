import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import ProjectPlanning from './components/ProjectPlanning';
import ConcreteRequirement from './components/ConcreteRequirement';
import BirthdayPage from './components/BirthdayPage'; // Import the BirthdayPage component
import logo from "../src/assets/arc-logo.png";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md sticky top-0 z-50"> {/* Added sticky classes */}
          <div className="container mx-auto p-4 flex flex-wrap items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-20 w-full"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="md:text-xl text-base font-semibold text-gray-800 flex space-x-4">
              <Link to="/" className="hover:text-blue-700">Admin Dashboard</Link>
              <Link to="/planning" className="hover:text-blue-700">Project Planning</Link>
              <Link to="/concrete" className="hover:text-blue-700">Concrete Requirement</Link>
              <Link to="/birthday" className="hover:text-blue-700">Birthday Wishes</Link> {/* New Link */}
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<BirthdayPage/>} />
            <Route path="/planning" element={<ProjectPlanning />} />
            <Route path="/concrete" element={<ConcreteRequirement />} />
            {/* <Route path="/birthday" element={<BirthdayPage />} /> New Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
