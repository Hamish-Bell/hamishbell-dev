
import './footer.css'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const links = [
    {
        label: 'GitHub',
        href: 'https://github.com/Hamish-Bell',
        icon: FaGithub,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/YOUR-PROFILE',
        icon: FaLinkedinIn,
    },
    {
        label: 'Email',
        href: 'mailto:you@example.com',
        icon: FaEnvelope,
    },
]

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <span>© {new Date().getFullYear()} Hamish Bell</span>
                <span className="footer-sep">-</span>

                <span className="status">
                    <span className="status-dot" />
                    All Services Operational
                </span>
            </div>

            <nav className="footer-links" aria-label="Social links">
                {links.map(({ label, href, icon: Icon }) => (
                    <a
                        key={label}
                        href={href}
                        aria-label={label}
                        title={label}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                        <Icon />
                    </a>
                ))}
            </nav>
        </footer>
    )
}

export default Footer
