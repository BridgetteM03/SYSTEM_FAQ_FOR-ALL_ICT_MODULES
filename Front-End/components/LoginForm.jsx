import React, { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaChalkboardTeacher } from "react-icons/fa";

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [module, setModule] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const modules = ["ICT101", "ICT202", "ICT303"];

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password && module) {
      localStorage.setItem("student", JSON.stringify({ email, module }));
      navigate("/student");
    } else {
      setError("All fields are required.");
    }
  };

  // Inline styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f0f4f8",
      fontFamily: "'Segoe UI', sans-serif",
      padding: 20,
    },
    card: {
      width: "100%",
      maxWidth: 420,
      padding: 30,
      borderRadius: 20,
      boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
      animation: "fadeInUp 0.5s ease-out",
    },
    title: {
      textAlign: "center",
      color: "#0d6efd",
      fontWeight: 600,
      marginBottom: 25,
    },
    formGroup: {
      position: "relative",
      marginBottom: "1.25rem",
    },
    input: {
      paddingLeft: "2.5rem",
      borderRadius: 10,
      height: "calc(1.5em + .75rem + 2px)",
      border: "1px solid #ced4da",
      width: "100%",
      transition: "border-color 0.3s",
    },
    icon: {
      position: "absolute",
      top: "50%",
      left: "12px",
      transform: "translateY(-50%)",
      color: "#0d6efd",
      fontSize: "1rem",
      pointerEvents: "none",
    },
    selectIcon: {
      position: "absolute",
      top: "50%",
      right: "12px",
      transform: "translateY(-50%)",
      color: "#0d6efd",
      fontSize: "1rem",
      pointerEvents: "none",
    },
    button: {
      backgroundColor: "#0d6efd",
      border: "none",
      borderRadius: 12,
      fontWeight: 500,
      padding: "10px 0",
      fontSize: 16,
      width: "100%",
      marginTop: 10,
    },
    "@keyframes fadeInUp": {
      from: { transform: "translateY(40px)", opacity: 0 },
      to: { transform: "translateY(0)", opacity: 1 },
    },
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <h3 style={styles.title}>Student Login</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          {/* Email Field */}
          <Form.Group style={styles.formGroup}>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={styles.input}
            />
            <FaEnvelope style={styles.icon} />
          </Form.Group>

          {/* Password Field */}
          <Form.Group style={styles.formGroup}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={styles.input}
            />
            <FaLock style={styles.icon} />
          </Form.Group>

          {/* Module Select */}
          <Form.Group style={styles.formGroup}>
            <Form.Label>Module</Form.Label>
            <Form.Select
              value={module}
              onChange={(e) => setModule(e.target.value)}
              style={styles.input}
            >
              <option value="">-- Select Module --</option>
              {modules.map((mod) => (
                <option key={mod} value={mod}>
                  {mod}
                </option>
              ))}
            </Form.Select>
            <FaChalkboardTeacher style={styles.selectIcon} />
          </Form.Group>

          <Button type="submit" style={styles.button}>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default StudentLogin;
