import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { FaStar } from "react-icons/fa";
import '../root.css';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Empresas favoritas',
    path: '/favorites',
    icon: <FaStar />,
    cName: 'nav-text'
  },
  
];
