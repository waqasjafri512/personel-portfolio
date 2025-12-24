import { useEffect, useRef } from 'react';
import { education } from '../data/education';

const Education = () => {
    const educationRef = useRef(null);

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

        const elements = educationRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="education" className="education" ref={educationRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">
                  Education
                </h2>

                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div
                            key={edu.id}
                            className="education-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="edu-header">
                                <div className="edu-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                    </svg>
                                </div>
                                <div className="edu-info">
                                    <h3 className="institution-name">{edu.institution}</h3>
                                    <h4 className="degree-title">{edu.degree}</h4>
                                </div>
                            </div>

                            <div className="edu-meta">
                                <span className="duration">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                                        <polyline points="16 2 16 6"></polyline>
                                        <polyline points="8 2 8 6"></polyline>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    {edu.duration}
                                </span>
                                <span className="location">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    {edu.location}
                                </span>
                                <span className="grade">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    Grade: {edu.grade}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
