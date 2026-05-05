import { useEffect, useRef } from 'react';
import { education } from '../data/education';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';

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
                                    <GraduationCap size={24} color="#ffffff" />
                                </div>
                                <div className="edu-info">
                                    <h3 className="institution-name">{edu.institution}</h3>
                                    <h4 className="degree-title">{edu.degree}</h4>
                                </div>
                            </div>

                            <div className="edu-meta">
                                <span className="duration">
                                    <Calendar size={16} color="#6366f1" />
                                    {edu.duration}
                                </span>
                                <span className="location">
                                    <MapPin size={16} color="#ec4899" />
                                    {edu.location}
                                </span>
                                <span className="grade">
                                    <CheckCircle size={16} color="#14b8a6" />
                                    Grade: {edu.grade}
                                </span>
                            </div>

                            {edu.coursework && (
                                <div className="edu-coursework">
                                    <h5 className="coursework-title">Relevant Coursework</h5>
                                    <div className="coursework-tags">
                                        {edu.coursework.split(', ').map((course, idx) => (
                                            <span key={idx} className="coursework-tag">{course}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
