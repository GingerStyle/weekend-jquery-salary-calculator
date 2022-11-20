$(onReady);

let employeeArray = [];

function onReady(){
    console.log('jquery is working');
    $('#submit-button').on('click', getInputText);

}

function getInputText(){
    //create employee object
    let employee = {
        firstName: $('#first-name-input').val(),
        lastName: $('#last-name-input').val(),
        id: $('#id-input').val(),
        title: $('#title-input').val(),
        annualSalary: $('#annual-salary-input').val()
    }
    //clear inputs
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-salary-input').val('');
    //add employee to array
    employeeArray.push(employee);
    console.log(employeeArray);
    //refresh the DOM
    render();
}

function calculateTotalSalary(){
    let salary = 0;
    for (let person of employeeArray){
        salary += Number(person.annualSalary);
    }
    return salary;
}

function render(){
    //add employees to table

    //update the salary total
    let salaryTotal = calculateTotalSalary();
    console.log('salary total:', salaryTotal);
    //apppend SalaryTotal to the Dom
    $('#total-monthly').text(`Total Monthly: $${salaryTotal.toLocaleString("en-US")}`);
}