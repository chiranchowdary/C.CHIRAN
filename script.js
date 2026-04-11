// 👤 Your Data
const patient = {
  name: "C Chiran",
  id: "PT-1001",
  age: 23,
  gender: "Male",
  phone_number: "7993004028",
  dob: "17-Nov-2002",
  address: "Tirupati, Andhra Pradesh",

  diagnosis_history: [
    { month: "Jan", year: 2026, systolic: 120, diastolic: 80 },
    { month: "Feb", year: 2026, systolic: 125, diastolic: 82 },
    { month: "Mar", year: 2026, systolic: 118, diastolic: 78 },
    { month: "Apr", year: 2026, systolic: 122, diastolic: 80 }
  ],

  lab_results: [
    "Hemoglobin: 13.5 g/dL",
    "Cholesterol: 180 mg/dL",
    "Blood Sugar: 95 mg/dL"
  ]
};

// 🧾 Load Data
function loadData() {
  document.getElementById("name").textContent = patient.name;
  document.getElementById("id").textContent = patient.id;
  document.getElementById("age").textContent = patient.age;
  document.getElementById("gender").textContent = patient.gender;
  document.getElementById("phone").textContent = patient.phone_number;
  document.getElementById("dob").textContent = patient.dob;
  document.getElementById("address").textContent = patient.address;

  // Lab Results
  const list = document.getElementById("labResults");
  patient.lab_results.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  drawChart();
}

// 📊 Chart
function drawChart() {
  const labels = patient.diagnosis_history.map(d => d.month);

  const sys = patient.diagnosis_history.map(d => d.systolic);
  const dia = patient.diagnosis_history.map(d => d.diastolic);

  new Chart(document.getElementById("chart"), {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        { label: "Systolic", data: sys },
        { label: "Diastolic", data: dia }
      ]
    }
  });
}

loadData();