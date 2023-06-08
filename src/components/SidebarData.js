import React from "react";
import * as Io from "react-icons/io";
import * as Ci from "react-icons/ci";
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <Io.IoIosPaper />,
  },
  {
    title: "Supervisor",
    path: "/supervisor",
    icon: <Io.IoMdPeople />,
  },
  {
    title: "Agent",
    path: "/agent",
    icon: <Io.IoMdPeople />,
  },
  {
    title: "Helpdesk",
    path: "/helpdesk",
    icon: <Io.IoMdPeople />,
  },

  {
    title: "Customers",
    path: "/customers",
    icon: <Io.IoMdPeople />,
  },
  {
    title: "Task",
    path: "/tasks",
    icon: <Io.IoIosPaper />,
  },
  {
    title: "Complaint",
    path: "/complaints",
    icon: <Io.IoIosPaper />,
  },
  {
    title: "Resources",
    path: "/resources",
    icon: <Bs.BsTools />,
  },

  {
    title: "profile",
    path: "/profile",
    icon: <Fa.FaUserCircle />,
  },
  {
    title: "work-status",
    path: "/work-status",
    icon: <Fa.FaTasks />,
  },
  {
    title: "logout",
    path: "",
    icon: <Ci.CiLogout />,
  },
];
