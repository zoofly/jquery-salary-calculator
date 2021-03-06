$(document).ready(onReady); //instantiates jQuery

const employees= [];


function onReady(){ 
    console.log("Let's get started");
    //add necessary functions to get all the moving parts working together
    $( '#submitAll' ).on('click', addEmployee);
    $( 'table').on('click', '.deleteButton', deleteEmployee);
    
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
    attachToTable();
    monthlyMath();
    updateTotal();
}

function attachToTable(){  
    $('.employeeList').empty();
    for(let person of employees){   //function reiterates whole array again and adds new input on click
   $('.employeeList').append(`
    <tr>
    <td> ${person.firstName} </td>
    <td> ${person.lastName} </td>
    <td> ${person.employeeID} </td>
    <td> ${person.jobTitle} </td>
    <td> ${person.annualSalary} </td>
    <td> <input type="button" class="deleteButton" value="Delete"</td>
    </tr>`)
    }
   
}


function emptyInput(){ //empties input values
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#iDInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
}

function deleteEmployee(){
    console.log('delete is working');
    $(this).closest('tr').remove();
    var val = $(this).closest('tr').find(".name").text();
    var index = employees.findIndex(function(item) {return item.name == val})
    employees.splice(index, 1)
    console.log(employees);
    
}

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

function updateTotal(){
    console.log('in updateTotal')
    let monthlyTotal = monthlyMath();
  // clear the footer and inject the new total
  $('.monthlyTotal').empty().append(`
      Monthly Total:
        ${monthlyTotal.toLocaleString(
          "en-US", { style: "currency", currency: "USD" })
        }
  `);
  if (monthlyTotal > 20000) {
    $('.monthlyTotal').css('color', 'red');
  }

}