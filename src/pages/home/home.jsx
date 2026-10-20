
import './home.css'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

function Home() {
    return (
        <div className="home-body">
            <div className="intro">
                <h1 className="title">
                    It's me, <span className="accent">Hamish</span>!
                </h1>

                <p className="about">
                    I'm a 16-year-old student from Adelaide, South Australia,
                    with an interest in software development. I've been learning
                    to code since I was 14, mainly using Python, LUAU, and Vite
                    React. I enjoy making websites, working on personal{' '}
                    <span className="accent">projects</span>, and learning how
                    things work behind the scenes. I've also completed
                    certifications through <span className="accent">HarvardX</span>,{' '}
                    <span className="accent">IBM</span>, and{' '}
                    <span className="accent">AlaskaX</span>. I'm hoping to
                    continue improving my skills and pursue a career in software
                    engineering.
                </p>

                <div className="socials">
                    <a
                        href="https://github.com/YOUR_USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>

                    <span className="social-divider">|</span>

                    <a
                        href="https://www.linkedin.com/in/YOUR_USERNAME/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <FaLinkedinIn />
                        <span>LinkedIn</span>
                    </a>

                    <span className="social-divider">|</span>

                    <a
                        href="mailto:YOUR_EMAIL@example.com"
                        aria-label="Email"
                        title="Email"
                    >
                        <FaEnvelope />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
