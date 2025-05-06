import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import StudentDashboard from "./pages/StudentDashboard";
import LoginForm from "./components/LoginForm";
import BrowseFAQs from "./components/BrowseFAQs";
import TutorDashboard from "./pages/TutorDashboard";
import TutorLogin from "./components/TutorLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import Home from "./pages/Home";
import FAQNavbar from "./components/FAQNavbar";  // Import the FAQNavbar

function AppLayout() {
  return (
    <>
      <FAQNavbar /> {/* Use the FAQNavbar in the layout */}
      
      <Container>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/tutor-login" element={<TutorLogin />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/tutor-dashboard" element={<TutorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/browse-faqs" element={<BrowseFAQs />} />

          {/* 404 Page */}
          <Route path="*" element={<div>404 - Page not found</div>} />
        </Routes>
      </Container>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}

export default App;
