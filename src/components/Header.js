import React from 'react';
import headerIcon from '../assets/header-icon.png';

export default function Header() {
  return (
    <div id="header">
      <img src={headerIcon} alt=''></img>
      <div>my travel journal</div>
    </div>
  )
}