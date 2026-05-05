import { useEffect, useRef } from 'react';
import { skills } from '../data/skills';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
import * as LuIcons from 'lucide-react';

const iconColors = {
    // Frontend
    'FaReact': '#61DAFB',
    'SiNextdotjs': '#ffffff', // White for dark mode compatibility
    'SiRedux': '#764ABC',
    'SiTailwindcss': '#06B6D4',
    'SiMui': '#0081CB',
    'LuMonitorSmartphone': '#6366f1',
    'LuLayers': '#ec4899',
    // Backend
    'FaNodeJs': '#339933',
    'SiNestjs': '#E0234E',
    'SiExpress': '#ffffff',
    'LuZap': '#F7DF1E',
    'LuNetwork': '#14b8a6',
    'SiSocketdotio': '#ffffff',
    // Databases
    'BiLogoPostgresql': '#4169E1',
    'SiMongodb': '#47A248',
    'SiMysql': '#4479A1',
    'SiPrisma': '#2D3748',
    // Languages
    'IoLogoJavascript': '#F7DF1E',
    'SiTypescript': '#3178C6',
    'FaDatabase': '#4479A1',
    // Tools
    'FaGitAlt': '#F05032',
    'SiGithubactions': '#2088FF',
    'FaAws': '#FF9900',
    'LuInfinity': '#6366f1',
    'FaStripe': '#008CDD',
    'SiMicrosoftazure': '#0078D4',
    'LuKanban': '#ec4899',
};

const SkillIcon = ({ iconName }) => {
    const color = iconColors[iconName] || 'currentColor';
    
    // Check Lucide Icons first
    if (LuIcons[iconName]) {
        const Icon = LuIcons[iconName];
        return <Icon size={20} color={color} />;
    }
    // Check Font Awesome
    if (FaIcons[iconName]) {
        const Icon = FaIcons[iconName];
        return <Icon size={20} color={color} />;
    }
    // Check Simple Icons
    if (SiIcons[iconName]) {
        const Icon = SiIcons[iconName];
        return <Icon size={20} color={color} />;
    }
    // Check BoxIcons
    if (BiIcons[iconName]) {
        const Icon = BiIcons[iconName];
        return <Icon size={20} color={color} />;
    }
    // Check IonIcons
    if (IoIcons[iconName]) {
        const Icon = IoIcons[iconName];
        return <Icon size={20} color={color} />;
    }
    return null;
};

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
        { key: 'frontend', title: 'Frontend', icon: <LuIcons.Palette size={24} color="#6366f1" /> },
        { key: 'backend', title: 'Backend', icon: <LuIcons.Settings size={24} color="#14b8a6" /> },
        { key: 'databases', title: 'Databases', icon: <LuIcons.Database size={24} color="#ec4899" /> },
        { key: 'languages', title: 'Languages', icon: <LuIcons.Code size={24} color="#f59e0b" /> },
        { key: 'tools', title: 'Tools & Cloud', icon: <LuIcons.Wrench size={24} color="#6366f1" /> },
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
                                        <span className="skill-icon">
                                            <SkillIcon iconName={skill.icon} />
                                        </span>
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
                                <span>Backend Development</span>
                                <span>95%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ '--progress': '95%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header">
                                <span>Frontend Development</span>
                                <span>90%</span>
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
