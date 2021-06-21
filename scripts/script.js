$(document).ready(onReady); //instantiates jQuery

const employees= [];
let monthlyTotal= 0;

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
    for(let person of employees)   //right now, function only adds first item in array correctly
   $('.tableOfEmployees').append(`
    <tr>
    <td> ${person.firstName} </td>
    <td> ${person.lastName} </td>
    <td> ${person.employeeID} </td>
    <td> ${person.jobTitle} </td>
    <td> ${person.annualSalary} </td>
    </tr>`)
    }
    


function emptyInput(){ //empties input values
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#iDInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
}

// function deleteEmployee(){ //
//     employees.splice(0,1);
//     if(person )
// }

 
// if (monthlyTotal >=20000){
//     $('#monthlyTotal').css('color', red);
// } else if(monthlyTotal<=20000){
//     $('monthlyTotal').css('color', black);
// }


function monthlyMath(){
    let total=0;
    for(let employee of employees){
        total+= Number(employee.annualSalary)
    }
    if (0>= total){
        return 0;
    }
    return total / 12;
}
    