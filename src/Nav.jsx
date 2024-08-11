import React from 'react'
import EmployeeDeets from './EmployeeDeets';
import EmployeeData from './EmployeeData';
import Address from './Address';
import Captcha from './Captcha';
import { HashRouter, Route, Routes , Link } from 'react-router-dom';
//import Homepage from './Homepage';
function Nav(){
    return(<>
    <HashRouter>
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to = "/Address">WebSiteName</Link>
    </div>
    <ul className="nav navbar-nav">
      
      <li><Link to ='/EmployeeData'>Page 1</Link></li>
      <li><Link to ='/EmployeeDeets'>Page 2</Link></li>
      <li><Link to='/Captcha'>Page 3</Link></li>
    </ul>
  </div>
</nav>
<Routes>
    <Route path='/Address' element={<Address></Address>}></Route>
    <Route path = '/EmployeeData' element={<EmployeeData></EmployeeData>}></Route>
    <Route path = '/EmployeeDeets' element={<EmployeeDeets></EmployeeDeets>}></Route>
    <Route path = '/Captcha' element={<Captcha></Captcha>}></Route>
   
</Routes>

</HashRouter>
    </>);
}
export default Nav