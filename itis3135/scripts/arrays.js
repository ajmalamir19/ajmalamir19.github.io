var person = [];
var salary = [];

function addSalary() {
  var nameInput = document.getElementById('name');
  var salaryInput = document.getElementById('salary');
  var nameDropdown = document.getElementById('nameDropdown');
  var salaryDropdown = document.getElementById('salaryDropdown');

  var name = nameInput.value || nameDropdown.value;
  var salaryValue = parseFloat(salaryInput.value || salaryDropdown.value);

  if (!name || isNaN(salaryValue)) {
    alert("Name and salary must not be empty, and salary must be numeric.");
    return;
  }

  person.push(name);
  salary.push(salaryValue);

  // Clear inputs and dropdown selections
  nameInput.value = '';
  salaryInput.value = '';
  nameDropdown.selectedIndex = 0;
  salaryDropdown.selectedIndex = 0;

  nameInput.focus(); // Move cursor back to the name field
}

function displayResults() {
    if (salary.length === 0) {
      alert("No data to display.");
      return;
    }
  
    var totalSalary = 0;
    var highestSalary = Math.max(...salary);
  
    // Find the index of the person with the highest salary
    var highestSalaryIndex = salary.indexOf(highestSalary);
    var highestSalaryPerson = person[highestSalaryIndex];
  
    for (var i = 0; i < salary.length; i++) {
      totalSalary += salary[i];
    }
  
    var averageSalary = totalSalary / salary.length;
  
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<p>Average Salary: " + averageSalary.toFixed(2) + "</p><p>Highest Salary: " + highestSalary.toFixed(2) + "</p><p>Person with Highest Salary: " + highestSalaryPerson + "</p>";
  }
  

function displaySalary() {
  var table = document.getElementById('results_table');
  table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";

  for (var i = 0; i < person.length; i++) {
    var row = table.insertRow(table.rows.length);
    var nameCell = row.insertCell(0);
    var salaryCell = row.insertCell(1);

    nameCell.innerHTML = person[i];
    salaryCell.innerHTML = salary[i].toFixed(2);
  }
}
