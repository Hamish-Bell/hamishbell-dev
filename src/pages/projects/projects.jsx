import './projects.css'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { FiPlay, FiShuffle, FiClock, FiExternalLink } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const projects = [
    {
        name: 'Poople Unlimited',
        description: 'A custom word-guessing game.',
        technologies: 'React · JavaScript',
        link: 'https://poople-unlimited.vercel.app',
    },
    {
        name: 'Wave RPG',
        description: 'A wave-survival game built with Python.',
        technologies: 'Python · Pygame',
        link: '',
    },
]

function Projects() {
    const navigate = useNavigate();
    return (
        <div className="projects-body">
            <div className="projects-content">

                <section className="projects-intro">
                    <div className="playlist-cover">
                        <FiPlay />
                    </div>

                    <div className="playlist-info">
                        <span className="projects-status">
                            Public playlist
                        </span>

                        <h1 className='playlist-name'>My Projects</h1>

                        <p>
                            A collection of things I've built,
                            ideas I've explored, and things I've learned.
                        </p>

                        <span className="playlist-meta">
                            Hamish Bell <span>·</span> {projects.length} projects
                        </span>
                    </div>
                </section>

                <div className="projects-toolbar">
                    

                    
                </div>

                <div className="project-list">
                    <div className="project-row project-header">
                        <span className="project-number">#</span>
                        <span className="project-heading">Project</span>
                        <span className="project-technologies">Built with</span>
                        <span className="project-link-heading">
                            <FiExternalLink />
                        </span>
                    </div>

                    {projects.map((project, index) => (
                        <div
                            className="project-row"
                            id={`project-${index + 1}`}
                            key={project.name}
                            onClick={() => {
                                if (project.name === 'Poople Unlimited') {
                                    navigate('/projects/poople');
                                }
                            }}
                            style={{
                                cursor: project.name === 'Poople Unlimited' ? 'pointer' : 'default'
                            }}
                        >
                            <span className="project-number">
                                <span className="number-text">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <FiPlay className="row-play" />
                            </span>

                            <div className="project-main">
                                <div className="project-thumbnail">
                                    <FiPlay />
                                </div>

                                <div className="project-details">
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                </div>
                            </div>

                            <span className="project-technologies">
                                {project.technologies}
                            </span>

                            <div className="project-actions">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`View ${project.name}`}
                                    >
                                        <FiExternalLink />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="projects-footer">
                    <span>More projects coming soon.</span>
                </footer>

            </div>
        </div>
    )
}

export default Projects