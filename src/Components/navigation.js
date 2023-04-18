import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faEnvelope,
    faGear,
    faHome
} from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ activePage }) => {
    return (
        <nav id="navBar" className="navbar navbar-expand-sm bg-white navbar-light px-3">
            <div className="container-fluid">
                <p className="navbar-brand fw-bold mb-0" href="#">MonkLang</p>
                <ul className="navbar-nav gap-3">
                    <li className="nav-item d-flex align-items-center">
                        <a className={`nav-link ${activePage === "Home" ? "activeLink" : ""}`} href="/">
                            <FontAwesomeIcon className="me-2" icon={faHome} />
                            Home
                        </a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <a className={`nav-link ${activePage === "About" ? "activeLink" : ""}`} href="/about">
                            <FontAwesomeIcon className="me-2" icon={faInfoCircle} />
                            About
                        </a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <a className={`nav-link ${activePage === "Contact" ? "activeLink" : ""}`} target="_blank" href="https://github.com/MiguelBrugge">
                            <FontAwesomeIcon className="me-2" icon={faEnvelope} />
                            Creator
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;