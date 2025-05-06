import React, { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const validEmail = "admin@example.com";
    const validPassword = "admin123";

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("admin", JSON.stringify({ email }));
      navigate("/admin");
    } else {
      setError("Invalid credentials.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#fff8e6",
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
      backgroundColor: "#fff",
    },
    title: {
      textAlign: "center",
      color: "#d9822b", // deep amber/orange
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
      color: "#d9822b",
      fontSize: "1rem",
      pointerEvents: "none",
    },
    button: {
      backgroundColor: "#f0ad4e",
      border: "none",
      borderRadius: 12,
      fontWeight: 500,
      padding: "10px 0",
      fontSize: 16,
      width: "100%",
      marginTop: 10,
    },
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <h3 style={styles.title}>
          <FaUserShield className="me-2" />
          Admin Login
        </h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group style={styles.formGroup}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              style={styles.input}
            />
            <FaEnvelope style={styles.icon} />
          </Form.Group>

          <Form.Group style={styles.formGroup}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={styles.input}
            />
            <FaLock style={styles.icon} />
          </Form.Group>

          <Button type="submit" style={styles.button}>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default AdminLogin;
