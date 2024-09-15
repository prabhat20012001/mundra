import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import ProjectPlanning from './components/ProjectPlanning';
import ConcreteRequirement from './components/ConcreteRequirement'; // Import new component

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-6">
          <Link to="/" className="mr-4 text-blue-600">Admin Dashboard</Link>
          <Link to="/planning" className="mr-4 text-blue-600">Project Planning</Link>
          <Link to="/concrete" className="text-blue-600">Concrete Requirement</Link> {/* New link */}
        </nav>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/planning" element={<ProjectPlanning />} />
          <Route path="/concrete" element={<ConcreteRequirement />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
