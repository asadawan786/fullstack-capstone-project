import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">GiftLink</a>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                   <li className="nav-item">
                        <Link className="nav-link" to="/app/search">Search</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
