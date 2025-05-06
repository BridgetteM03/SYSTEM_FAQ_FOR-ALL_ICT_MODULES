import React, { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";

function SubmitFAQForm() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState(""); // If you plan to use the category later
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (question && category) {
      // Create a new submission object
      const newSubmission = {
        question,
        category,
        status: "Pending", // Default status for new submissions
        module: "SomeModule", // This should be the student's module, replace with actual logic to get the student's module
        answer: "" // Initially, there is no answer
      };

      // Get all current submissions from localStorage
      const allSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
      
      // Add the new submission
      allSubmissions.push(newSubmission);
      
      // Save the updated submissions back to localStorage
      localStorage.setItem("submissions", JSON.stringify(allSubmissions));

      // Reset form fields
      setQuestion("");
      setCategory("");

      // Show success message
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
    }
  };

  const styles = {
    formContainer: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
      maxWidth: "600px",
      margin: "0 auto",
      marginTop: "2rem",
      fontFamily: "'Segoe UI', sans-serif",
    },
    label: {
      fontWeight: "500",
      marginBottom: "0.5rem",
      color: "#1e4d91", // Blue color for label
    },
    input: {
      borderRadius: "10px",
      border: "1px solid #cbd5e0",
      height: "45px",
      fontSize: "1rem",
      marginBottom: "1.5rem",
      paddingLeft: "15px", // Padding for input text
    },
    submitBtn: {
      borderRadius: "10px",
      backgroundColor: "#1e73d1", // Same blue as the login button
      border: "none",
      fontWeight: "500",
      padding: "0.75rem",
      fontSize: "1rem",
    },
    successMessage: {
      backgroundColor: "#d4edda",
      color: "#155724",
      padding: "10px",
      borderRadius: "5px",
      marginBottom: "1.5rem",
    },
  };

  return (
    <div className="container mt-5">
      <Card className="p-4 mx-auto" style={styles.formContainer}>
        <h3 className="mb-4 text-center" style={{ color: "#1e4d91" }}>
          Submit a New FAQ
        </h3>

        {success && <div style={styles.successMessage}>FAQ submitted successfully!</div>}

        <Form onSubmit={handleSubmit}>
          {/* Question Field */}
          <div>
            <Form.Label style={styles.label}>Your Question</Form.Label>
            <Form.Control
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              placeholder="e.g. How to reset my password?"
              style={styles.input}
            />
          </div>

          {/* Category Field (optional, or use the module as mentioned) */}
          <div>
            <Form.Label style={styles.label}>Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              placeholder="e.g. Account Issues"
              style={styles.input}
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" style={styles.submitBtn} className="w-100">
            Submit FAQ
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default SubmitFAQForm;
