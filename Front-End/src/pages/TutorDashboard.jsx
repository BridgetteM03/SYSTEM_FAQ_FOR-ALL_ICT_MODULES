import React, { useState, useEffect } from "react";
import { Card, Button, Alert, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaEdit, FaQuestionCircle, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

function TutorDashboard() {
  const navigate = useNavigate();
  const tutor = JSON.parse(localStorage.getItem("tutor"));

  const [submissions, setSubmissions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!tutor) {
      navigate("/tutor-login");
      return;
    }

    const storedSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(storedSubmissions);
    setLoading(false);
  }, [tutor, navigate]);

  const updateSubmission = (index, changes) => {
    const updated = [...submissions];
    updated[index] = { ...updated[index], ...changes };
    setSubmissions(updated);
    localStorage.setItem("submissions", JSON.stringify(updated));
  };

  const handleAnswer = (index) => {
    updateSubmission(index, {
      status: "Answered",
      answer: "This is a sample answer. Please update accordingly.",
    });
  };

  const handleEdit = (index) => {
    updateSubmission(index, {
      answer: "Updated Answer Content",
    });
  };

  const filteredSubmissions = submissions
    .filter(sub => sub.module === tutor.module)
    .filter(sub =>
      sub.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.module.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(sub => statusFilter === "All" || sub.status === statusFilter);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4 text-primary fw-bold">
        📘 Tutor Dashboard
      </h3>

      {/* Filter Bar */}
      <div className="d-flex flex-column flex-md-row gap-3 mb-4">
        <Form.Control
          type="text"
          placeholder="Search by question or module"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Form.Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Answered">Answered</option>
        </Form.Select>
      </div>

      {loading && (
        <Alert variant="info" className="text-center">
          Loading FAQ submissions...
        </Alert>
      )}

      <div className="row">
        {filteredSubmissions.length === 0 ? (
          <Alert variant="info" className="text-center">
            No matching submissions found.
          </Alert>
        ) : (
          filteredSubmissions.map((submission, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="shadow rounded-4 border-0" style={{ backgroundColor: "#fdfdfd" }}>
                <Card.Body>
                  <Card.Title className="text-primary d-flex align-items-center gap-2">
                    <FaQuestionCircle className="text-info" />
                    {submission.question}
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    <strong>Status:</strong> {submission.status}<br />
                    <strong>Module:</strong> {submission.module}
                  </Card.Text>

                  {submission.status === "Pending" ? (
                    <div className="d-flex flex-column">
                      <Button
                        variant="success"
                        onClick={() => handleAnswer(index)}
                        className="mt-2 w-100 d-flex align-items-center justify-content-center gap-2"
                        style={{ borderRadius: "12px" }}
                      >
                        <FaCheckCircle />
                        Answer
                      </Button>
                      <Button
                        variant="warning"
                        onClick={() => handleEdit(index)}
                        className="mt-2 w-100 d-flex align-items-center justify-content-center gap-2"
                        style={{ borderRadius: "12px" }}
                      >
                        <FaEdit />
                        Edit
                      </Button>
                    </div>
                  ) : (
                    <Card.Text className="mt-3" style={{ color: "#343a40" }}>
                      <strong>Answer:</strong><br />{submission.answer}
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

export default TutorDashboard;
