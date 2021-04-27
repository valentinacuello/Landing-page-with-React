import React from "react";

export function NavBarNico() {
    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-lg navbar-light ">
                <a className="navbar-brand text-white" href="#">
                    Start Bootsrap
			</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
						</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Services
						</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
						</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
