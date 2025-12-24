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
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="experience-card-header">
                                <div className="company-info-wrapper">
                                    <div className="company-logo">
                                        <span>{exp.company.charAt(0)}</span>
                                    </div>
                                    <div className="card-info">
                                        <h3 className="company-name">🏢 {exp.company}</h3>
                                        <h4 className="role-title">💼 {exp.role}</h4>
                                    </div>
                                </div>
                                <div className="card-meta">
                                    <span className="duration">📅 {exp.duration}</span>
                                    <span className="location">📍 {exp.location}</span>
                                </div>
                            </div>

                            <div className="card-divider"></div>

                            <div className="experience-responsibilities">
                                {exp.description.map((item, idx) => (
                                    <div key={idx} className="responsibility-tag">
                                        <span className="tag-bullet">▹</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
