import Navigation from "./Components/navigation";

const About = () => {
    return (
        <>
            <h3 className="mt-5 fw-bold">About this application</h3>
            <div className="mx-auto w-50 mt-4 d-flex justify-content-center flex-column fs-5">
                <p>
                    Welcome to my language practice application! I created this application to improve my React skills while also providing a useful tool for language learners.
                </p>
                <p>
                    With this application, you can easily practice translating words from one language to another. Simply enter words in one language in the designated text field, and enter their translations in the other. When you click "start", the application will generate a quiz for you to practice translating the words in both directions.
                </p>
                <p>
                    One of the best features of this application is the ability to save your words as a JSON file. This means that you can come back to practice the same words again later, without having to re-enter them every time.
                </p>
                <p>
                    As a language learner myself, I know how important it is to practice regularly. This application is designed to help you improve your language skills, whether you're a beginner or an advanced learner. It's also a great way to test your knowledge and track your progress over time.
                </p>
                <p>
                    Thank you for choosing my language practice application! I hope you find it helpful in achieving your language learning goals. If you have any feedback or suggestions, please don't hesitate to reach out to me.
                </p>
            </div>
        </>
    );
}

export default About;