import React from 'react';
import EmployeeDeets from './EmployeeDeets';

function EmployeeData(){
    var employeeDetails = [{ Name: "Mansi", Age: 24, Height: "5'7" , Weight:66  }, { Name: "Surya", Age: 24, Height: "5'10" , Weight: 78}, { Name: "Pragna", Age: 23, Height: "5'1" , Weight : 70}]
    return (<>
        <EmployeeDeets emp={employeeDetails}/>

    </>)
}
export default EmployeeData;