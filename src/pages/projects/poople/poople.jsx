import './poople.css';

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
                    Poople Unlimited is my own modified version of the popular worlde-like site <span className='highlight'>poople.io</span>, where I implemented my own features. I decided to create this project as I enjoyed the orignal site, however there was no enjoyable unlimited versions. For example, all of the sites I tried did not allow the user to move backwards, which is something that makes the game much harder than it should be.
                </p>

                <p>
                    Through creating my own remake of the original, I developed my skills in React, Vite, planning a project, and my problem solving skills. To create this project, I used technologies such as React, HTML5, CSS3, JS, and canva. In particular, I used canva for planning the design, and the others were utlised to program the game with Visual Studio code.
                </p>

                <a
                    className="poople-button"
                    href="https://poople-unlimited.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                >
                    Open Site <span>↗</span>
                </a>
            </article>
        </div>
    );
}

export default Poople;