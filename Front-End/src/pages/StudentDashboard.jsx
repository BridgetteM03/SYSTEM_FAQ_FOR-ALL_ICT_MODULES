import React from "react";
import SubmitFAQForm from "../components/SubmitFAQForm";
import { Button, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaQuestionCircle } from "react-icons/fa";

function StudentDashboard() {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));

  const handleLogout = () => {
    localStorage.removeItem("student");
    navigate("/");
  };

  const styles = {
    page: {
      backgroundColor: "#e7f0fd",
      minHeight: "100vh",
      paddingTop: "60px",
      paddingBottom: "40px",
      fontFamily: "'Segoe UI', sans-serif",
    },
    container: {
      maxWidth: "720px",
      margin: "0 auto",
      padding: "20px",
    },
    card: {
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
      backgroundColor: "#ffffff",
      padding: "2rem",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1.5rem",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#1e4d91",
    },
    infoText: {
      fontSize: "1rem",
      color: "#333",
    },
    viewFaqBtn: {
      backgroundColor: "#2a74d6",
      borderColor: "#2a74d6",
      fontWeight: "500",
      borderRadius: "10px",
      marginBottom: "1.5rem",
      color: "#fff",
    },
    logoutBtn: {
      borderRadius: "10px",
      fontWeight: "500",
    },
  };

  if (!student) {
    return (
      <div className="container mt-5">
        <Alert variant="warning" className="text-center p-4 shadow-lg">
          <h4 className="alert-heading">Access Denied</h4>
          <p className="mb-3">
            You must be logged in to view this page. Please log in to continue.
          </p>
          <Button
            variant="primary"
            onClick={() => navigate("/login")}
            className="mt-3 px-4 py-2"
            style={{
              fontSize: "16px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              border: "none",
            }}
          >
            Go to Login
          </Button>
        </Alert>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Card style={styles.card}>
          <div style={styles.header}>
            <h2 style={styles.title}>Welcome, {student.email}</h2>
            <Button
              variant="outline-danger"
              style={styles.logoutBtn}
              onClick={handleLogout}
            >
              <FaSignOutAlt className="me-2" />
              Logout
            </Button>
          </div>

          <p style={styles.infoText}>
            Module: <strong>{student.module}</strong>
          </p>

          <Button
            style={styles.viewFaqBtn}
            onClick={() => navigate("/submitted-faqs")}
          >
            <FaQuestionCircle className="me-2" />
            View Submitted FAQs
          </Button>

          <hr className="my-4" />

          <SubmitFAQForm />
        </Card>
      </div>
    </div>
  );
}

export default StudentDashboard;
