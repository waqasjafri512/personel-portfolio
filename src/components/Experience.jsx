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

                <div className="timeline">
                    {experience.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item animate-on-scroll ${index % 2 === 0 ? 'left' : 'right'}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-marker">
                                <div className="marker-dot"></div>
                            </div>

                            <div className="timeline-content">
                                <div className="experience-card">
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
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
