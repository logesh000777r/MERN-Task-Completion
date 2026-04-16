import React from "react";

function StudentCard({ name, course, status }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p><strong>Course:</strong> {course}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span style={styles.status}>{status}</span>
      </p>
    </div>
  );
}

const styles = {
  card: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    padding: "20px",
    margin: "15px auto",
    borderRadius: "15px",
    width: "280px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
  name: {
    marginBottom: "10px",
  },
  status: {
    background: "#00ffcc",
    color: "#000",
    padding: "5px 10px",
    borderRadius: "10px",
  },
};

export default StudentCard;