$(document).ready(onReady); //instantiates jQuery

const employees= [];

function onReady(){ 
    //add necessary functions to get all the moving parts working together
    $( '#submitAll' ).on('click', addEmployee); 

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
}

function attachToTable(){

}