import  { useState } from "react";
import styles from "./form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [students, setStudents] = useState([]);

  function addStudent() {
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

  function removeStudent(index) {
    const updatedStudents = students.filter(
      (_, studentIndex) => studentIndex !== index
    );

    setStudents(updatedStudents);
  }

  function clearForm() {
    setName("");
    setAge("");
    setGrade("");
  }

  return (
    <div className={styles.formcontainer}>
      <h1>Student Entry Form</h1>

      <p>Add students and review the list below.</p>

      <form>
        <div className={styles.formGroup}>
          <label>Name</label>

          <input
            type="text"
            name="name"
            placeholder="e.g. MS Dhoni"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Age</label>

          <input
            type="number"
            name="age"
            placeholder="e.g. 14"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Grade</label>

          <select
            name="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">Select grade</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </form>

      <button
        type="button"
        className={styles.btn_stu}
        onClick={addStudent}
      >
        Add Student
      </button>

      <button
        type="button"
        className={styles.btn_clr}
        onClick={clearForm}
      >
        Clear
      </button>

      <div className={styles.studentList}>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          <>
            <div className={styles.studentHeader}>
              <span>Name</span>
              <span>Age</span>
              <span>Grade</span>
              <span></span>
            </div>

            {students.map((student, index) => (
              <div className={styles.studentRow} key={index}>
                <span>{student.name}</span>

                <span>{student.age}</span>

                <span>Class {student.grade}</span>

                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={() => removeStudent(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Form;