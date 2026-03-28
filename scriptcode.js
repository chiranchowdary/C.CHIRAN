let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

// Display students
function displayStudents(data = students) {
  const table = document.getElementById("studentTable");
  table.innerHTML = "";

  data.forEach((student, index) => {
    table.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
        <td>
          <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// Add / Update student
document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const course = document.getElementById("course").value;

  if (editIndex === -1) {
    students.push({ name, age, course });
  } else {
    students[editIndex] = { name, age, course };
    editIndex = -1;
  }

  localStorage.setItem("students", JSON.stringify(students));

  this.reset();
  displayStudents();
});

// Delete student
function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
}

// Edit student
function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("age").value = student.age;
  document.getElementById("course").value = student.course;

  editIndex = index;
}

// Search
document.getElementById("search").addEventListener("keyup", function() {
  const value = this.value.toLowerCase();

  const filtered = students.filter(student =>
    student.name.toLowerCase().includes(value)
  );

  displayStudents(filtered);
});

// Initial display
displayStudents();