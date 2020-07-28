import React from 'react';

function Header(props) {
  return (
    <header className="Header mb-3">
      <nav className="navbar navbar-dark bg-dark">
        <h1 className="navbar-brand">Gestor of projects</h1>
        <div className="form-inline">
          <input className="form-control" type="search" placeholder="Search tasks" aria-label="Search" />;
        </div>
        <button type="button" className="js-menu-btn btn btn-info btn-sm text-dark" title="Abrir el menú">
          <span className="fas fa-columns"></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
