import { useEffect, useRef } from 'react';
import { experience } from '../data/experience';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

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

                <div className="experience-list">
                    {experience.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="experience-card-wrapper animate-on-scroll"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
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
                                        <Calendar size={16} color="#6366f1" />
                                        {exp.duration}
                                    </span>
                                    <span className="location">
                                        <MapPin size={16} color="#ec4899" />
                                        {exp.location}
                                    </span>
                                </div>

                                <ul className="responsibilities">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>
                                            <span className="bullet">
                                                <ChevronRight size={14} color="#14b8a6" />
                                            </span>
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
