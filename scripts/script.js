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
        $('.arrayObjects').append(`<td> ${person.firstName}</td>`);
        $('.arrayObjects').append(`<td> ${person.lastName}</td>`);
        $('.arrayObjects').append(`<td> ${person.employeeID}</td>`);
        $('.arrayObjects').append(`<td> ${person.jobTitle}</td>`);
        $('.arrayObjects').append(`<td> ${person.annualSalary}</td>`);
    }
}

function emptyInput(){
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#iDInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
}

