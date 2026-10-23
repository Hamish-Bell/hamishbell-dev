import './poople.css';
import { FaGithub } from 'react-icons/fa';

function Poople() {
    return (
        <div className="poople-body">
            <article className="poople-content">
                <span className="poople-label">PROJECT / 01</span>

                <h1>Poople Unlimited</h1>

                <p className="poople-subtitle">
                    A custom word-guessing game built with React and JavaScript.
                </p>

                <div className="poople-divider" />

                <h2>About the project</h2>

                <p>
                    Poople Unlimited is my own modified version of the popular
                    Wordle-like site <span className="accent">poople.io</span>,
                    where I implemented my own features. I decided to create
                    this project because I enjoyed the original site, but
                    couldn't find an unlimited version I enjoyed. For example,
                    the sites I tried did not allow users to move backwards,
                    which made the game much harder than it needed to be.
                </p>

                <p>
                    Through creating my own version of the original, I
                    developed my skills in React, Vite, project planning, and
                    problem-solving. I used technologies such as React, HTML5,
                    CSS3, JavaScript, and Canva. I used Canva to plan the
                    design, while the other technologies were used to build
                    the game in Visual Studio Code.
                </p>

                <div className="poople-buttons">
                    <a
                        className="poople-button"
                        href="https://poople-unlimited.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open Site <span>↗</span>
                    </a>

                    <a
                        className="poople-button poople-github-button"
                        href="https://github.com/Hamish-Bell/poople-unlimited"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub /> Open GitHub
                    </a>
                </div>
            </article>
        </div>
    );
}

export default Poople;