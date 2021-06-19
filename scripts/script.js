$(document).ready(onReady); //instantiates jQuery

const employees= [];

function onReady(){ 
    //add necessary functions to get all the moving parts working together
addEmployee;




}



function addEmployee(firstNameInput, lastNameInput, employeeIDInput, jobTitleInput, annualSalaryInput){
    //function to take input values and append them to table
    console.log('In addEmployee', addEmployee);
    const addEmployeeObject = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        employeeID: employeeIDInput,
        jobTitle: jobTitleInput,
        annualSalary: annualSalaryInput
    }
    employees.push(addEmployeeObject);
    $( '#submitAll' ).on('click', function(){ 
        //button needs to push inputs into array and then array needs to be displayed on table
        employees($('#firstNameInput').val(), $('#lastNameInput').val(), $('#iDInput').val(), $('#jobTitleInput').val(), $('#annualSalaryInput').val());

    });

}

function attachToTable(){

}