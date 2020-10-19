import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Chart Selector",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Vertical Bar Chart",
    path: "/vertical-bar-chart",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text",
  },
  {
    title: "Donut Chart",
    path: "/donut-chart",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text",
  },
];
