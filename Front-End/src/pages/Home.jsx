import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaChalkboardTeacher, FaUserShield } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #f1faff, #e0f7fa)",
        display: "flex",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3" style={{ color: "#0056b3", fontSize: "2.75rem" }}>
            Welcome to the ICT FAQ System
          </h1>
          <p className="lead text-center mb-5 text-muted">
            Easily access FAQs or get help from tutors and admins.
          </p>
        </div>

        <Row className="g-4 justify-content-center text-center">
          {/* Student Card */}
          <Col md={4} sm={12}>
            <Card className="h-100 border-0 shadow" style={{ backgroundColor: "#e3f2fd" }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div className="text-center mb-3">
                  <FaUserGraduate size={50} className="text-primary" />
                </div>
                <Card.Title className="fw-semibold text-primary fs-4">Student</Card.Title>
                <Card.Text className="text-secondary">
                  Browse FAQs or ask questions related to your modules.
                </Card.Text>
                <Button
                  variant="primary"
                  className="mt-3 fw-semibold p-3 px-8 rounded-md text-white"
                  style={{
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    borderRadius: "8px",
                    transition: "background-color 0.2s ease, border-color 0.2s ease",
                  }}
                  onClick={() => navigate("/login")}
                >
                  <span className="font-bold">Student Login</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Tutor Card */}
          <Col md={4} sm={12}>
            <Card className="h-100 border-0 shadow" style={{ backgroundColor: "#e8f5e9" }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div className="text-center mb-3">
                  <FaChalkboardTeacher size={50} className="text-success" />
                </div>
                <Card.Title className="fw-semibold text-success fs-4">Tutor</Card.Title>
                <Card.Text className="text-secondary">
                  Answer and manage FAQ submissions for your modules.
                </Card.Text>
                <Button
                  variant="success"
                  className="mt-3 fw-semibold p-3 px-8 rounded-md text-white"
                  style={{
                    backgroundColor: "#28a745",
                    borderColor: "#28a745",
                    borderRadius: "8px",
                    transition: "background-color 0.2s ease, border-color 0.2s ease",
                  }}
                  onClick={() => navigate("/tutor-login")}
                >
                  <span className="font-bold">Tutor Login</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Admin Card */}
          <Col md={4} sm={12}>
            <Card className="h-100 border-0 shadow" style={{ backgroundColor: "#fff8e1" }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div className="text-center mb-3">
                  <FaUserShield size={50} className="text-warning" />
                </div>
                <Card.Title className="fw-semibold text-warning fs-4">Admin</Card.Title>
                <Card.Text className="text-secondary">
                  Manage system activity, approve content, and generate reports.
                </Card.Text>
                <Button
                  variant="warning"
                  className="mt-3 fw-semibold p-3 px-8 rounded-md text-white"
                  style={{
                    backgroundColor: "#ffc107",
                    borderColor: "#ffc107",
                    borderRadius: "8px",
                    transition: "background-color 0.2s ease, border-color 0.2s ease",
                  }}
                  onClick={() => navigate("/admin-login")}
                >
                  <span className="font-bold">Admin Login</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
