$(document).ready(onReady); //instantiates jQuery

const employees= [];

function onReady(){ 
    //add necessary functions to get all the moving parts working together
    $( '#submitAll' ).on('click', addEmployee);
    $( '#submitAll' ).on('click', attachToTable);
    $( '#submitAll' ).on('click', emptyInput);
    // $( '#deleteButton').on('click', deleteEmployee);


}


//function pushes employeeObjects into employees array
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
        $('.arrayObjects').closest('tr').append(`<td> ${person.firstName}</td>`);
        $('.arrayObjects').closest('tr').append(`<td> ${person.lastName}</td>`);
        $('.arrayObjects').closest('tr').append(`<td> ${person.employeeID}</td>`);
        $('.arrayObjects').closest('tr').append(`<td> ${person.jobTitle}</td>`);
        $('.arrayObjects').closest('tr').append(`<td> $${person.annualSalary}</td>`);
    }
    $('.arrayObjects').closest('tr').append(`<td> <input type="button" id="deleteButton" value="Delete"</td>`)
 }

function emptyInput(){ //empties input values
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#iDInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
}

function deleteEmployee(){
    employees.splice(0,1);
}



