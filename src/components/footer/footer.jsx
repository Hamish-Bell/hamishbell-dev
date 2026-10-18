import './footer.css'

const links = [
  { label: 'Github',   href: 'https://github.com/Hamish-Bell' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/YOUR-PROFILE' },
  { label: 'Email',    href: 'mailto:you@example.com' },
]

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-left'>
        <span>© {new Date().getFullYear()} Hamish Bell</span>
        <span className='footer-sep'>-</span>
        <span className='status'>
          <span className='status-dot' />
          All Services Operational
        </span>
      </div>

      <nav className='footer-links'>
        {links.map((l, i) => (
          <span key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel='noreferrer'
            >
              {l.label}
            </a>
            {i < links.length - 1 && <span className='footer-sep'> / </span>}
          </span>
        ))}
      </nav>
    </footer>
  )
}

export default Footer