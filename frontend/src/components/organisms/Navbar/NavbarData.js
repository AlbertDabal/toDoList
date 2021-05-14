import React from 'react';
// import { MdWork, IoMdFitness, MdFolder, MdAccountBalance } from 'react-icons';

const NavbarData = [
  {
    title: 'Tasks today',
    items: [
      {
        title: 'Work',
        // icon: <MdWork />,
      },
      {
        title: 'Personal',
        // icon: <MdAccountBalance />,
      },
      {
        title: 'Fitness',
        // icon: <IoMdFitness />,
      },
      {
        title: 'Other tasks',
        // icon: <MdFolder />,
      },
    ],
  },
  {
    title: 'Edit task',
    items: [
      {
        title: 'Statistic',
      },
      {
        title: 'Edit calendar',
      },
      {
        title: 'All tasks',
      },
      {
        title: 'Settings',
      },
    ],
  },
];

export default NavbarData;
