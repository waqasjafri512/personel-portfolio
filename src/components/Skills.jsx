import { useEffect, useRef } from 'react';
import { skills } from '../data/skills';

const Skills = () => {
    const skillsRef = useRef(null);

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

        const elements = skillsRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const categories = [
        { key: 'frontend', title: 'Frontend', icon: '🎨' },
        { key: 'backend', title: 'Backend', icon: '⚙️' },
        { key: 'databases', title: 'Databases', icon: '🗄️' },
        { key: 'tools', title: 'Tools', icon: '🛠️' },
    ];

    return (
        <section id="skills" className="skills" ref={skillsRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">
                    Skills & Technologies
                </h2>

                <div className="skills-grid">
                    {categories.map((category, categoryIndex) => (
                        <div
                            key={category.key}
                            className="skill-category animate-on-scroll"
                            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skill-items">
                                {skills[category.key].map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="skill-item"
                                        style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                                    >
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-progress animate-on-scroll">
                    <h3 className="progress-title">Proficiency Levels</h3>
                    <div className="progress-bars">
                        <div className="progress-item">
                            <div className="progress-header">
                                <span>Frontend Development</span>
                                <span>95%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ '--progress': '95%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span>Backend Development</span>
                                <span>99%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ '--progress': '90%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span>Database Management</span>
                                <span>85%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ '--progress': '85%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span>DevOps & Tools</span>
                                <span>80%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ '--progress': '80%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
