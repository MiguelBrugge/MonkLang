import { useState, useEffect, useRef } from "react";
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
    faTimes
} from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const [practisePage, setPractisePage] = useState(false);
    const [fromWords, setFromWords] = useState([]);
    const [toWords, setToWords] = useState([]);
    const [wrong, setWrong] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState("");
    const fromTextArea = useRef();
    const toTextArea = useRef();
    const exportInput = useRef();
    const [isRotating, setIsRotating] = useState(false);

    // LocalStorage Get
    useEffect(() => {
        const storedFromWords = localStorage.getItem('fromWords');
        const storedToWords = localStorage.getItem('toWords');

        if (storedFromWords && storedToWords) {
            setFromWords(JSON.parse(storedFromWords));
            setToWords(JSON.parse(storedToWords));

            const wordsString = JSON.parse(storedFromWords).join(" ");
            const formattedString = wordsString.replace(",", " ");
            fromTextArea.current.innerHTML = wordsString;
            const wordsString2 = JSON.parse(storedToWords).join(" ");
            const formattedString2 = wordsString2.replace(",", " ");
            toTextArea.current.innerHTML = wordsString2;
        }
    }, []);

    // LocalStorage Put
    useEffect(() => {
        localStorage.setItem('fromWords', JSON.stringify(fromWords));
        localStorage.setItem('toWords', JSON.stringify(toWords));
    }, [fromWords, toWords]);

    const rotate = () => {
        setIsRotating(true);
        setTimeout(() => {
            setIsRotating(false);
        }, 150); // Change this to match the duration of the animation
    };

    useEffect(() => {
        fillTextArea();
    }, [practisePage]);

    const fillTextArea = () => {
        if (fromTextArea.current?.innerHTML.length === 0) {
            const wordsString = fromWords.join(" ");
            const formattedString = wordsString.replace(",", " ");
            fromTextArea.current.value = formattedString;
        }
        if (toTextArea.current?.innerHTML.length === 0) {
            const wordsString = toWords.join(" ");
            const formattedString = wordsString.replace(",", " ");
            toTextArea.current.value = formattedString;
        }
    }

    const exchangeLanguages = () => {
        setFromWords([...toWords]);
        setToWords([...fromWords]);

        const wordsString = toWords.join(" ");
        const formattedString = wordsString.replace(",", " ");
        fromTextArea.current.value = formattedString;

        const wordsString2 = fromWords.join(" ");
        const formattedString2 = wordsString2.replace(",", " ");
        toTextArea.current.value = formattedString2;
    }

    const checkInput = event => {
        if (event.target.value.indexOf(" ") !== -1) {
            if (event.target.value.slice(0, -1).toLowerCase() === toWords[currentWordIndex].toLowerCase()) {
                if (fromWords.length > 1) {
                    let randomIndex = Math.floor(Math.random() * fromWords.length);
                    while (randomIndex === currentWordIndex) {
                        randomIndex = Math.floor(Math.random() * fromWords.length);
                    }
                    setCurrentWordIndex(randomIndex);
                } else {
                    setCurrentWordIndex(0);
                }
                setWrong(false);
                event.target.value = "";
            } else {
                setWrong(true);
            }
        }
    };

    const downloadFile = () => {
        const data = {
            fromWords: fromWords,
            toWords: toWords,
        };
        const json = JSON.stringify(data);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        const typedName = exportInput.current.value;
        const fileName = typedName != "" ? typedName : "MonkLangSave";
        link.download = fileName;
        link.href = url;
        link.click();
    };

    const importFile = event => {
        if (!event.target.files) {
            console.error("No file selected");
            return;
        }
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const data = JSON.parse(ev.target.result);
                setFromWords(data.fromWords);
                setToWords(data.toWords);
                const wordsString = data.fromWords.join(" ");
                const formattedString = wordsString.replace(",", " ");
                fromTextArea.current.value = formattedString;

                const wordsString2 = data.toWords.join(" ");
                const formattedString2 = wordsString2.replace(",", " ");
                toTextArea.current.value = formattedString2;
                event.target.value = "";
            } catch (error) {
                console.error("Error while parsing JSON data:", error);
            }
        };
        reader.readAsText(file);
    };

    const changePage = () => {
        if (practisePage) {
            return (
                <>
                    <div className="container d-flex justify-content-center flex-column w-50">
                        <h3 className="mt-5 mb-5 fw-bold">Translate the following word</h3>
                        <h3 className="mt-5 fw-bold">{fromWords[currentWordIndex] || "NULL"}</h3>
                        <p className={`fw-bold mt-4 ${wrong ? "text-danger" : "text-white"}`}>{wrong ? "Wrong answer" : "-"}</p>
                        <input className="p-2 rounded" type="text" placeholder="Type here" onChange={checkInput} />
                        <div className="d-flex mt-2">
                            <Button id="button" className="bg-white textPrimaryDark me-auto" text="Choose words" icon={faArrowLeft} onClick={() => setPractisePage(false)} />
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="container d-flex justify-content-center flex-column">
                        <h3 className="mt-5 fw-bold">Put in the words you want to practise</h3>
                        <p className={`fw-bold mt-4 ${fromWords.length !== toWords.length || fromWords.length <= 1 || toWords.length <= 1 ? "text-danger" : "text-white"}`}>{fromWords.length !== toWords.length ? "Both sides need the same amount of words" : "-" + fromWords.length <= 1 || toWords.length <= 1 ? "You need atleast 2 words" : "-"}</p>
                        <div className="d-flex gap-2">
                            <div className="position-relative">
                                <h4 className="text-start mb-1 me-auto">From</h4>
                                <p className="mb-1 mt-4 fw-bold muted position-absolute bottom-0 end-0 p-2">{fromWords.length || "0"} Words</p>
                                <textarea className="p-2 rounded w-100" rows="15" cols="90" onChange={event => setFromWords(event.target.value.split(/\s+/).filter(Boolean))} ref={fromTextArea}></textarea>
                            </div>
                            <Button id="button" className={`bg-white textPrimaryDark mt-auto mb-auto pt-2 ps-2 pe-2 pb-1 ${isRotating ? 'rotate' : ''}`} icon={faRepeat} onClick={() => exchangeLanguages() + rotate()} />
                            <div className="position-relative">
                                <h4 className="text-start mb-1 me-auto">To</h4>
                                <p className="mb-1 mt-4 fw-bold muted position-absolute bottom-0 end-0 p-2">{toWords.length || "0"} Words</p>
                                <textarea className="p-2 rounded w-100" rows="15" cols="90" onChange={event => setToWords(event.target.value.split(/\s+/).filter(Boolean))} ref={toTextArea}></textarea>
                            </div>
                        </div>
                        <div className="d-flex mt-1">
                            <Button id="button" className={`startButton bgPrimary text-white ${fromWords.length !== toWords.length || fromWords.length <= 1 || toWords.length <= 1 ? "d-none" : ""}`} text="Start" onClick={() => setCurrentWordIndex(Math.floor(Math.random() * fromWords.length)) + setPractisePage(true) + setWrong(false)} />
                            <div className="d-flex gap-2 ms-auto">
                                <input id="file-input" className="d-none" type="file" onChange={importFile} />
                                <Button id="button" className="bg-white textPrimaryDark" type="file" text="Import" icon={faFileImport} onClick={() => document.getElementById('file-input').click()}>
                                    Import
                                </Button>
                                <Button id="button" className="bg-white textPrimaryDark" text="Export" icon={faFloppyDisk} databstoggle="modal" databstarget="#exportModal" />
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="exportModal">
                        <div class="modal-dialog p-5">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <Button id="button" className="times bg-white textPrimaryDark position-absolute top-0 end-0 m-1 p-0" icon={faTimes} />
                                    <h4>Export</h4>
                                    <p>Choose a name for your save file</p>
                                    <input className="rounded p-1" placeholder="Name" ref={exportInput} />
                                    <Button id="button" className="bg-white mx-auto mt-2 textPrimaryDark" type="file" text="Export" onClick={downloadFile} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

    }
    return (
        <div id="home">
            <Navigation activePage={"Home"} />
            <a id="questionButton" className="position-absolute bottom-0 end-0 m-3" href="MonkLang/Help" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
                <FontAwesomeIcon className="fs-5" icon={faCircleQuestion} />
            </a>
            {changePage()}
        </div>
    );
}

export default Home;