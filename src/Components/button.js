import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ id, className, text, type, icon, icon2, onClick, databstoggle, databstarget }) => {
    return (
        <button id={id} className={`rounded fw-bold nav-link ${className}`} type={type ? type : "button"} onClick={onClick} data-bs-toggle={databstoggle ? databstoggle : ""} data-bs-target={databstarget ? databstarget : ""} data-bs-dismiss="modal">
            <FontAwesomeIcon className={text ? "me-2" : "fs-4 m-0"} icon={icon} />
            {text}
            <FontAwesomeIcon className="ms-2" icon={icon2} />
        </button>
    );
}
export default Button;