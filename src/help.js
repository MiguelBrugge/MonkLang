import Navigation from "./Components/navigation";
import Button from "./Components/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileImport,
    faFloppyDisk,
    faArrowLeft,
    faGlobe,
    faCaretDown,
    faTheaterMasks,
    faRepeat,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

const Help = () => {
    return (
        <>
            <Navigation activePage="Home" />
            <h3 className="mt-5 fw-bold">Help</h3>
            <div className="mx-auto w-50 mt-4 d-flex justify-content-center text-start flex-column fs-5">
                <p className="mb-1 fw-bold">Translate words</p>
                <p>
                This application is intended to aid you in practicing translation skills between languages. To begin, input the original word and its translation in the designated text field, then click "start" to begin the quiz. The application will generate practice questions for you to translate words, so continue practicing until you feel confident in your ability to accurately translate between the languages.                </p>
                <p className="mb-1 fw-bold">Saving</p>
                <p>
                    The application has a great feature that allows you to save your words as a JSON file. By doing so, you can practice them later without having to input them repeatedly.
                </p>
                <p className="mb-1 fw-bold">Tip:</p>
                <p>To get the right promt ask an AI like ChatGPT this: <em>Can you provide me with 30 English words and their corresponding Dutch translations? Please ensure that both lists are arranged in the same order. The first list should contain the English words, and the second list should contain their Dutch translations.</em>
                </p>
            </div>
            <a className="text-decoration-none" href="/MonkLang">
            </a>
            <Button id="button" className="bg-white textPrimaryDark mx-auto fs-6" text="Return" icon={faArrowLeft} onClick={() => window.location.href = '/MonkLang'} />
        </>
    );
}

export default Help;