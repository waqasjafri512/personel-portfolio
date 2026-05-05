import { useEffect, useRef } from 'react';
import profileImg from '../assets/profile.jpg';
import { Briefcase, Rocket, Laptop, Award } from 'lucide-react';

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
                            I am a <span className="highlight">Junior Full Stack Developer</span> with
                            <span className="highlight">1+ year</span> of hands-on experience building and shipping
                            real-world web applications. Specialized in <span className="highlight">React.js</span>,
                            <span className="highlight">NestJS</span>, and <span className="highlight">PostgreSQL</span>.
                        </p>
                        <p className="animate-on-scroll">
                            I have production exposure to <span className="highlight">real-time systems</span>,
                            <span className="highlight">AI integrations</span>, and <span className="highlight">role-based access platforms</span>.
                            I'm an <span className="highlight">AWS Certified Cloud Practitioner</span> who actively
                            participates in code reviews and thrives in sprint-based, collaborative teams.
                        </p>
                        <p className="animate-on-scroll">
                            I'm a fast learner who enjoys solving real-world problems, writing clean code, and
                            collaborating with cross-functional teams to deliver high-quality software solutions.
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
                        <Briefcase className="stat-icon" size={24} color="#6366f1" />
                        <span className="stat-number">1+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <Rocket className="stat-icon" size={24} color="#ec4899" />
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Features Shipped</span>
                    </div>
                    <div className="stat-item">
                        <Laptop className="stat-icon" size={24} color="#14b8a6" />
                        <span className="stat-number">25+</span>
                        <span className="stat-label">Technologies</span>
                    </div>
                    <div className="stat-item">
                        <Award className="stat-icon" size={24} color="#f59e0b" />
                        <span className="stat-number">4</span>
                        <span className="stat-label">Certifications</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
