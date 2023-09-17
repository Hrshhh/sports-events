import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Admin from './components/Admin';
import SideBar from './components/SideBar';
import AdminEvents from './components/AdminEvents';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmployeeEvents from './components/EmployeeEvents';
import Profile from './components/Profile';


function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={1000}/>
        {/* <div style={{ display: "flex" }}>
          <SideBar />
          <div style={{ width: "100vw" }}>
            <Routes>
              <Route path="/approval-pending" element={<Admin />} />
              <Route path="/admin-events" element={<AdminEvents />} />
            </Routes>
          </div>
        </div>
      </div> */}

      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin-events" element={<AdminEvents />} />

          <Route path="/user-profile" element={<Profile />} />
          <Route path="/employee-events" element={<EmployeeEvents />} />
          <Route
            path="/admin"
            element={
              <>
                <div style={{ display: "flex" }}>
                  <SideBar />
                  <div style={{ width: "100vw" }}>
                    <AdminEvents />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/employee"
            element={
              <>
                <div style={{ display: "flex" }}>
                  <SideBar />
                  <div style={{ width: "100vw" }}>
                    <EmployeeEvents />
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
