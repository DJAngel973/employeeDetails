const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bod Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    { id: 4, name: 'Juan Salazar', age: 30, department: 'IT', salary: 15000, specialization: 'JavaScript' },
    { id: 5, name: 'Aura Prieto', age: 31, department: 'HR', salary: 25000, specialization: 'Python' },
    { id: 6, name: 'Alberto Diaz', age: 33, department: 'Finance', salary: 18000, specialization: 'Java' },
    { id: 7, name: 'Luis Solorzano', age: 27, department: 'IT', salary: 57000, specialization: 'JavaScript' },
    { id: 8, name: 'Maria Perez', age: 33, department: 'HR', salary: 52000, specialization: 'Python' },
];
// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
// Function to calculate employees total salaries
function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}
// Function to display employees details based on department such as the HR department
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById(`employeesDetails`).innerHTML = hrEmployeesDisplay;
}
// Function to display employees details based on ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById(`employeesDetails`).innerHTML = 'No employee has been found with this ID';
    }
}
// Function to display the first JavaScript element it finds
function findSpecialization() {
    const specializationEmployee = employees.find(employee => employee.specialization === 'JavaScript');
    if (specializationEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${specializationEmployee.id}: ${specializationEmployee.name}: ${specializationEmployee.name} - ${specializationEmployee.department} - ${specializationEmployee.specialization}</p>`;
    }
    else{
        document.getElementById(`employeesDetails`).innerHTML = 'No employee has been found with this specialization';
    }
}
// Function to display employees details based on specialization
function displaySpecialization(){
    const specializationEmployees = employees.filter(employee => employee.specialization === 'JavaScript');
    const specializationEmployeesDisplay = specializationEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.department} - ${employee.specialization}</p>`).join('');
    document.getElementById(`employeesDetails`).innerHTML = specializationEmployeesDisplay;
}