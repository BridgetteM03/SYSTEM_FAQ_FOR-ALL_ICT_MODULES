import React, { useState, useEffect } from "react";
import { Card, Alert } from "react-bootstrap";

function SubmittedFAQs() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(storedSubmissions);
  }, []);

  return (
    <div className="container mt-5">
      <h3>Submitted FAQs</h3>
      {submissions.length === 0 ? (
        <Alert variant="info">You have no submissions yet.</Alert>
      ) : (
        <div>
          {submissions.map((submission, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title>{submission.question}</Card.Title>
                <Card.Text>
                  Module: <strong>{submission.module}</strong><br />
                  Status: <strong>{submission.status}</strong><br />
                  Submitted on: {new Date(submission.timestamp).toLocaleString()}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default SubmittedFAQs;