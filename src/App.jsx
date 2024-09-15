import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import ProjectPlanning from './components/ProjectPlanning';
import ConcreteRequirement from './components/ConcreteRequirement';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md mb-6">
          <div className="container mx-auto p-4 flex flex-wrap items-center justify-between">
            <div className="md:text-xl text-base font-semibold text-gray-800">
              <Link to="/" className="mr-4 hover:text-blue-700">Admin Dashboard</Link>
              <Link to="/planning" className="mr-4 hover:text-blue-700">Project Planning</Link>
              <Link to="/concrete" className="hover:text-blue-700">Concrete Requirement</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/planning" element={<ProjectPlanning />} />
            <Route path="/concrete" element={<ConcreteRequirement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
