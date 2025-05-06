// src/pages/BrowseFAQs.jsx
import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";

const sampleFAQs = {
  ICT101: [
    { question: "What is covered in Week 1?", answer: "Introduction to computing and binary numbers." },
    { question: "How are assignments submitted?", answer: "Through the LMS portal before the deadline." },
  ],
  ICT202: [
    { question: "Is group work allowed?", answer: "Only in the final project." },
  ],
  ICT303: [
    { question: "What language is used in this module?", answer: "We use Python for all practicals." },
  ]
};

function BrowseFAQs() {
  const [selectedModule, setSelectedModule] = useState("ICT101");

  return (
    <div className="container mt-5">
      <h3>Browse FAQs</h3>
      <Form.Group className="mb-4 mt-3">
        <Form.Label>Select Module</Form.Label>
        <Form.Select value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
          {Object.keys(sampleFAQs).map((mod) => (
            <option key={mod} value={mod}>{mod}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <div>
        {sampleFAQs[selectedModule].map((faq, idx) => (
          <Card className="mb-3" key={idx}>
            <Card.Body>
              <Card.Title>{faq.question}</Card.Title>
              <Card.Text>{faq.answer}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BrowseFAQs;
