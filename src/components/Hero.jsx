import { useEffect, useRef } from 'react';
import resumePdf from '../assets/Muhammad_Waqas_Anjum_Resume.pdf';
import { ArrowRight, Download } from 'lucide-react';

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
                    Junior Full Stack Developer
                </h2>
                <p className="hero-description animate-on-scroll">
                    Junior Full Stack Developer with 1+ year of hands-on experience building real-world web applications using React.js, NestJS, and PostgreSQL. AWS Certified Cloud Practitioner.
                </p>

                <div className="hero-buttons animate-on-scroll">
                    <button className="btn btn-primary" onClick={scrollToProjects}>
                        <span>View Projects</span>
                        <ArrowRight size={20} />
                    </button>
                    <a href={resumePdf} download="Muhammad_Waqas_Anjum_Resume.pdf" className="btn btn-secondary">
                        <Download size={20} color="#6366f1" />
                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
