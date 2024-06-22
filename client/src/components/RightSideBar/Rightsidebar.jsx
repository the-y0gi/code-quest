import React from 'react';
import './Rightsidebar.css';
import Widget from './Widget';
import Widgettag from './Widgettag';

const Rightsidebar = () => {
  return (
    <aside className="right-sidebar">
      {/* Widget component */}
      <Widget />
      {/* Widgettag component */}
      <Widgettag />
    </aside>
  );
}

export default Rightsidebar;