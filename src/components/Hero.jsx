import { useEffect, useRef } from 'react';
import resumePdf from '../assets/Waqas-Anjum-Resume.pdf';

const Hero = () => {
    const heroRef = useRef(null);

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

        const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero" ref={heroRef}>
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-particles">
                    {[...Array(50)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title animate-on-scroll">
                    Muhammad Waqas Anjum
                </h1>
                <h2 className="hero-subtitle animate-on-scroll">
                    Full Stack Developer
                </h2>
                <p className="hero-description animate-on-scroll">
                    I build scalable, secure, and high-performance web applications
                    using React, Node.js, and NestJS.
                </p>

                <div className="hero-buttons animate-on-scroll">
                    <button className="btn btn-primary" onClick={scrollToProjects}>
                        <span>View Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                    <a href={resumePdf} download="Waqas-Anjum-Resume.pdf" className="btn btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
