import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Agent from "./pages/Agent";
import Supervisor from "./pages/Supervisor";
import Helpdesk from "./pages/Helpdesk";
import Tasks from "./pages/Task";
import Complaints from "./pages/Complaints";
import Customers from "./pages/Customer";
import Login from "./pages/login";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import AdminDashboard from "./pages/AdminDashboard";
import WorkStatus from "./pages/WorkStatus";
import AssignAgent from "./pages/AssignAgent";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/helpdesk" element={<Helpdesk />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/work-status" element={<WorkStatus />} />
          <Route path="/assign-agent/:taskId" element={<AssignAgent />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}

export default App;
