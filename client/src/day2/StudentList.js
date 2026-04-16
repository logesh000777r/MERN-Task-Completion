import React, { useState, useEffect } from "react";

function StudentList() {
  // Exercise 1 - List Rendering
  const [students, setStudents] = useState([
    { id: 1, name: "John", course: "MERN" },
    { id: 2, name: "Alice", course: "React" },
    { id: 3, name: "Bob", course: "Node" },
    { id: 4, name: "Emma", course: "MongoDB" },
    { id: 5, name: "David", course: "Express" },
  ]);

  // Exercise 3 - Form state
  const [newStudent, setNewStudent] = useState({
    name: "",
    course: "",
  });

  // Exercise 4 - Fetch API
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setApiData(data.slice(0, 5))); // first 5
  }, []);

  // Add new student
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: students.length + 1,
      name: newStudent.name,
      course: newStudent.course,
    };

    setStudents([...students, newEntry]);

    setNewStudent({ name: "", course: "" });
  };

  return (
    <div style={styles.container}>
      <h2>🎓 Student List</h2>

      {/* Exercise 1 & 2 */}
      {students.map((student) => (
        <div key={student.id} style={styles.card}>
          <p><strong>{student.name}</strong></p>
          <p>{student.course}</p>
        </div>
      ))}

      {/* Exercise 3 */}
      <h3>Add New Student</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Course"
          value={newStudent.course}
          onChange={(e) =>
            setNewStudent({ ...newStudent, course: e.target.value })
          }
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Add
        </button>
      </form>

      {/* Exercise 4 */}
      <h3>🌐 API Data</h3>
      {apiData.map((user) => (
        <div key={user.id} style={styles.apiCard}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  card: {
    background: "#667eea",
    color: "#fff",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
    borderRadius: "10px",
  },
  apiCard: {
    background: "#00c9a7",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
    borderRadius: "10px",
    color: "#fff",
  },
  input: {
    margin: "5px",
    padding: "8px",
  },
  button: {
    padding: "8px 15px",
    background: "#ff7e5f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default StudentList;