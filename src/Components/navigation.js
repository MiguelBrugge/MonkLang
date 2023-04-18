import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfoCircle,
    faEnvelope,
    faGear,
    faHome
} from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ page, setPage }) => {
    return (
        <nav id="navBar" className="navbar navbar-expand-sm bg-white navbar-light px-3">
            <div className="container-fluid">
                <p className="navbar-brand fw-bold mb-0" href="#">MonkLang</p>
                <ul className="navbar-nav gap-3">
                    <li className="nav-item d-flex align-items-center">
                        <a className={`nav-link ${page === "Home" || page === "Help" ? "activeLink" : ""}`} onClick={() => setPage("Home")}>
                            <FontAwesomeIcon className="me-2" icon={faHome} />
                            Home
                        </a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <a className={`nav-link ${page === "About" ? "activeLink" : ""}`} onClick={() => setPage("About")}>
                            <FontAwesomeIcon className="me-2" icon={faInfoCircle} />
                            About
                        </a>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <a className={`nav-link ${page === "Contact" ? "activeLink" : ""}`} target="_blank" href="https://github.com/MiguelBrugge">
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