import React, { useState, useEffect } from "react";
import { Card, Button, Alert, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle, FaDownload } from "react-icons/fa";

function generateReport(submissions) {
  const report = {
    total: submissions.length,
    byModule: {},
    statusCounts: { Pending: 0, Approved: 0, Rejected: 0 },
  };

  submissions.forEach((sub) => {
    if (!report.byModule[sub.module]) {
      report.byModule[sub.module] = 0;
    }
    report.byModule[sub.module]++;
    if (report.statusCounts[sub.status] !== undefined) {
      report.statusCounts[sub.status]++;
    }
  });

  return report;
}

function exportCSV(submissions) {
  const csvRows = [
    ["Module", "Question", "Status"],
    ...submissions.map((s) => [s.module, `"${s.question}"`, s.status]),
  ];
  const blob = new Blob([csvRows.map(row => row.join(";")).join("\n")], {
    type: "text/csv",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "faq_report.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function AdminDashboard() {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("admin"));

  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!admin) {
      navigate("/admin-login");
      return;
    }

    const allSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(allSubmissions);
    setLoading(false);
  }, [admin, navigate]);

  const handleApprove = (index) => {
    const updated = [...submissions];
    updated[index].status = "Approved";
    localStorage.setItem("submissions", JSON.stringify(updated));
    setSubmissions(updated);
  };

  const handleReject = (index) => {
    const updated = [...submissions];
    updated[index].status = "Rejected";
    localStorage.setItem("submissions", JSON.stringify(updated));
    setSubmissions(updated);
  };

  const report = generateReport(submissions);

  const styles = {
    pageContainer: {
      padding: "2rem",
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: "#f4f7fb",
      minHeight: "100vh",
    },
    card: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    },
    table: {
      fontSize: "0.95rem",
    },
    btnApprove: {
      backgroundColor: "#28a745",
      border: "none",
      borderRadius: "10px",
      fontWeight: "500",
      padding: "6px 12px",
    },
    btnReject: {
      backgroundColor: "#dc3545",
      border: "none",
      borderRadius: "10px",
      fontWeight: "500",
      padding: "6px 12px",
    },
    btnExport: {
      backgroundColor: "#1e73d1",
      border: "none",
      borderRadius: "10px",
      fontWeight: "500",
      padding: "0.6rem 1.25rem",
    },
    sectionTitle: {
      color: "#1e4d91",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Card style={styles.card}>
        <h3 style={styles.sectionTitle}>📋 Admin Dashboard</h3>

        {loading ? (
          <Alert variant="info" className="mt-3">Loading...</Alert>
        ) : submissions.length === 0 ? (
          <Alert variant="warning" className="mt-3">No FAQ submissions found.</Alert>
        ) : (
          <>
            <Table striped bordered hover responsive className="mt-4" style={styles.table}>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Module</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s, idx) => (
                  <tr key={idx}>
                    <td>{s.question}</td>
                    <td>{s.module}</td>
                    <td>{s.status}</td>
                    <td>
                      {s.status === "Pending" ? (
                        <>
                          <Button
                            style={styles.btnApprove}
                            size="sm"
                            onClick={() => handleApprove(idx)}
                            className="me-2"
                          >
                            <FaCheckCircle /> Approve
                          </Button>
                          <Button
                            style={styles.btnReject}
                            size="sm"
                            onClick={() => handleReject(idx)}
                          >
                            <FaTimesCircle /> Reject
                          </Button>
                        </>
                      ) : (
                        s.status
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h4 className="mt-5" style={styles.sectionTitle}>📊 FAQ Report Summary</h4>
            <div className="mb-3">
              <p><strong>Total FAQs:</strong> {report.total}</p>
              <p><strong>By Module:</strong></p>
              <ul>
                {Object.entries(report.byModule).map(([mod, count]) => (
                  <li key={mod}>{mod}: {count}</li>
                ))}
              </ul>
              <p><strong>Status Breakdown:</strong></p>
              <ul>
                <li>✅ Approved: {report.statusCounts.Approved}</li>
                <li>🕐 Pending: {report.statusCounts.Pending}</li>
                <li>❌ Rejected: {report.statusCounts.Rejected}</li>
              </ul>
            </div>

            <Button onClick={() => exportCSV(submissions)} style={styles.btnExport}>
              <FaDownload /> Export Report as CSV
            </Button>
          </>
        )}
      </Card>
    </div>
  );
}

export default AdminDashboard;
