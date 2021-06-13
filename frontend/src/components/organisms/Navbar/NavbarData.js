import React from 'react';
import { MdWork, MdAccountBalance, MdFolder, MdInsertChart, MdSettings } from 'react-icons/md';
import { IoMdFitness } from 'react-icons/io';
import { IoCalendarSharp } from 'react-icons/io5';
import { BiTask } from 'react-icons/bi';
import { routes } from 'routes';

const NavbarData = [
  {
    title: 'Tasks today',
    items: [
      {
        title: 'Work',
        icon: <MdWork />,
        path: routes.work,
        type: 'work',
      },
      {
        title: 'Personal',
        icon: <MdAccountBalance />,
        path: routes.personal,
        type: 'personal',
      },
      {
        title: 'Fitness',
        icon: <IoMdFitness />,
        path: routes.fitness,
        type: 'fitness',
      },
      {
        title: 'Other tasks',
        icon: <MdFolder />,
        path: routes.otherTask,
        type: 'otherTask',
      },
    ],
  },
  {
    title: 'Edit task',
    items: [
      {
        title: 'Statistic',
        icon: <MdInsertChart />,
        path: routes.statistic,
      },
      {
        title: 'Edit calendar',
        icon: <IoCalendarSharp />,
        path: routes.editCalendar,
      },
      {
        title: 'All tasks',
        icon: <BiTask />,
        path: routes.allTasks,
      },
      {
        title: 'Settings',
        icon: <MdSettings />,
        path: routes.settings,
      },
    ],
  },
];

export default NavbarData;
