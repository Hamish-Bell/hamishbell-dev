
import './about.css'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='about-body'>
            <div className='about-intro'>
                <div className='about-side'>
                    <h1 className='about-title'>About Me</h1>
                    <img src="/dog.jpg" alt="about-image" className='image'/>
                    <p className="image-caption">My dog, Schnitzell.</p>
                </div>
                
                <div className="about-main">
                    <p className="text">
                        <span className='bold'>Hey!</span> I'm Hamish Bell <Link to="/socials" className="accent">(@Socials)</Link>, an aspiring software engineer based in Adelaide, South Australia. I enjoy making new projects to cure my boredom.
                    </p>

                    <p className="text">
                        My favourite project so far is <span className="accent">PoopleUnlimited</span>, where I built my own modified version of the popular site, Poople.io. I also hold professional certifications from <span className="accent">HarvardX</span>, <span className="accent">IBM</span>, and <span className="accent">AlaskaX</span>. Through these courses, I enhanced my development and business skills.
                    </p>

                    <p className="text">
                        Outside of technology, I enjoy playing sports, spending time with my family, and playing with my dog, Schnitzell. In the future, I hope to apply my skills and travel the world!
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About
