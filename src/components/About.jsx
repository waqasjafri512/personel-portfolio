import { useEffect, useRef } from 'react';
import profileImg from '../assets/profile.jpg';

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about" ref={aboutRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">
                    About Me
                </h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="animate-on-scroll">
                            I am a results-driven <span className="highlight">Full Stack Software Engineer</span> with
                            over <span className="highlight">1+ year</span> of experience building scalable
                            and secure web applications using <span className="highlight">React.js</span>,
                            <span className="highlight">Node.js</span>, and <span className="highlight">NestJS</span>.
                        </p>
                        <p className="animate-on-scroll">
                            I specialize in <span className="highlight">enterprise and government-level systems</span>,
                            focusing on RAG-based AI, REST APIs, authentication, RBAC, and performance optimization.
                            My expertise includes working with <span className="highlight">Azure OpenAI</span>,
                            <span className="highlight">PostgreSQL</span>, and <span className="highlight">Prisma</span>.
                        </p>
                        <p className="animate-on-scroll">
                            I enjoy solving real-world problems, writing clean code, and collaborating with
                            cross-functional teams to deliver high-quality software solutions.
                        </p>
                    </div>

                    <div className="about-image animate-on-scroll">
                        <div className="image-wrapper">
                            <img src={profileImg} alt="Muhammad Waqas Anjum" className="profile-image" />
                            <div className="image-border"></div>
                        </div>
                    </div>
                </div>

                <div className="about-stats animate-on-scroll">
                    <div className="stat-item">
                        <span className="stat-number">1+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">20+</span>
                        <span className="stat-label">Technologies</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Client Satisfaction</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
