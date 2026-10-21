import './socials.css'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

function Social() {
    const socials = [
        {
            name: 'GitHub',
            description: 'Check out my projects and code.',
            icon: <FaGithub />,
            link: 'https://github.com/YOUR_USERNAME',
            label: 'View GitHub'
        },
        {
            name: 'LinkedIn',
            description: 'Connect with me professionally.',
            icon: <FaLinkedinIn />,
            link: 'https://linkedin.com/in/YOUR_USERNAME',
            label: 'Connect on LinkedIn'
        },
        {
            name: 'Email',
            description: 'Have a project or question? Get in touch.',
            icon: <FaEnvelope />,
            link: 'mailto:YOUR_EMAIL@example.com',
            label: 'Send me an email'
        }
    ]

    return (
        <div className="socials-body">
            <div className="socials-text">
                <h1 className="socials-title">Socials</h1>
                <p className="socials-caption">
                    Find me across the web. Let's build something together.
                </p>
            </div>

            <div className="socials-cards">
                {socials.map((social) => (
                    <a
                        className="socials-card"
                        href={social.link}
                        target={social.name === 'Email' ? undefined : '_blank'}
                        rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                        key={social.name}
                    >
                        <div className="socials-icon">
                            {social.icon}
                        </div>

                        <h2>{social.name}</h2>

                        <p>{social.description}</p>

                        <span className="socials-link">
                            {social.label} ↗
                        </span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Social