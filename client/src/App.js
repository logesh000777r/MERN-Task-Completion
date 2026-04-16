import React, { useState } from "react";
import StudentCard from "./day1/StudentCard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    course: "",
  });

  const handleClick = () => {
    console.log("Input Value:", inputValue);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 MERN Bootcamp Day 1</h1>

      <StudentCard
        name="Logeshwaran"
        course="Full Stack MERN"
        status="Active"
      />

      <div style={styles.section}>
        <h2>Input State</h2>
        <input
          type="text"
          placeholder="Enter something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleClick} style={styles.button}>
          Log Input
        </button>
      </div>

      <div style={styles.section}>
        <h2>Student Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleFormChange}
            style={styles.input}
          />
          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            value={formData.course}
            onChange={handleFormChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center",
    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
    fontFamily: "Arial",
  },
  heading: {
    color: "#fff",
    marginBottom: "20px",
  },
  section: {
    background: "#fff",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "15px",
    width: "300px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#667eea",
    color: "#fff",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default App;