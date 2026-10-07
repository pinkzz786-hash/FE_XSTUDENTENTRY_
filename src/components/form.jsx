import { useState } from "react";
import styles from "./form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [students, setStudents] = useState([]);

  function addStudent(e) {
    e.preventDefault();

    if (!name || !age || !grade) {
      return;
    }

    const newStudent = {
      name: name,
      age: age,
      grade: grade,
    };

    setStudents([...students, newStudent]);

    setName("");
    setAge("");
    setGrade("");
  }

  function clearForm() {
    setName("");
    setAge("");
    setGrade("");
  }

  function removeStudent(indexToRemove) {
    const updatedStudents = students.filter(
      (_, index) => index !== indexToRemove
    );

    setStudents(updatedStudents);
  }

  return (
    <div className={styles.formContainer}>
      <h1>Student Entry Form</h1>

      <p>Add students and review the list below.</p>

      <form onSubmit={addStudent}>
        <div className={styles.fields}>
          <div className={styles.field}>
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="e.g. MS Dhoni"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Age</label>

            <input
              type="number"
              name="age"
              placeholder="e.g. 14"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Grade</label>

            <select
              name="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value="">Select grade</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
              <option value="Class 4">Class 4</option>
              <option value="Class 5">Class 5</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
            </select>
          </div>
        </div>

        <div className={styles.buttons}>
          <button type="submit" className={styles.addButton}>
            Add Student
          </button>

          <button
            type="button"
            className={styles.clearButton}
            onClick={clearForm}
          >
            Clear
          </button>
        </div>
      </form>

      {students.length === 0 ? (
        <div className={styles.emptyMessage}>
          No students added yet.
        </div>
      ) : (
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Grade</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.grade}</td>
                  <td>
                    <button
                      type="button"
                      className={styles.removeButton}
                      onClick={() => removeStudent(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Form;