import React from "react";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Chart Selector",
    path: "/",
    icon: <BiIcons.BiHome />,
    className: "nav-text",
  },
  {
    title: "Vertical Bar Chart",
    path: "/vertical-bar-chart",
    icon: <BiIcons.BiBarChartAlt2 />,
    className: "nav-text",
  },
  {
    title: "Donut Chart",
    path: "/donut-chart",
    icon: <BiIcons.BiChart />,
    className: "nav-text",
  },
];
