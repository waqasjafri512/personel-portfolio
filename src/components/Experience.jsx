import { useEffect, useRef } from 'react';
import { experience } from '../data/experience';

const Experience = () => {
    const experienceRef = useRef(null);

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

        const elements = experienceRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="experience" ref={experienceRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">
                    Work Experience
                </h2>

                <div className="experience-grid">
                    {experience.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="experience-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="experience-card-content">
                                <div className="card-header">
                                    <div className="company-logo">
                                        <span>{exp.company.charAt(0)}</span>
                                    </div>
                                    <div className="card-info">
                                        <h3 className="company-name">{exp.company}</h3>
                                        <h4 className="role-title">{exp.role}</h4>
                                    </div>
                                </div>

                                <div className="card-meta">
                                    <span className="duration">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                                            <polyline points="16 2 16 6"></polyline>
                                            <polyline points="8 2 8 6"></polyline>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        {exp.duration}
                                    </span>
                                    <span className="location">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        {exp.location}
                                    </span>
                                </div>

                                <ul className="responsibilities">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>
                                            <span className="bullet">▹</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
