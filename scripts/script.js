$(document).ready(onReady); //instantiates jQuery

const employees= [];

function onReady(){ 
    //add necessary functions to get all the moving parts working together
    $( '#submitAll' ).on('click', addEmployee);
    $( '#submitAll' ).on('click', attachToTable);
    $( '#submitAll' ).on('click', emptyInput);
    


}



function addEmployee(){
    //function to take input values and add to empty array
    const employeeObject = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        employeeID: $('#iDInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    }
    employees.push(employeeObject);
    console.log(employees);
    emptyInput();
}

function attachToTable(){
    for (let person of employees){
        $('.tdFirst').append(`<tr><td> ${person.firstName}</td></tr>`);
        $('.tdLast').append(`<tr><td> ${person.lastName}</td></tr>`);
        $('.tdEmployeeID').append(`<tr><td> ${person.employeeID}</td></tr>`);
        $('.tdJobTitle').append(`<tr><td> ${person.jobTitle}</td></tr>`);
        $('.tdSalary').append(`<tr><td> ${person.annualSalary}</td></tr>`);
    }
}

function emptyInput(){
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#iDInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');

}