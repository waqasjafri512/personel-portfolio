import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import { Folder, ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const Projects = () => {
    const projectsRef = useRef(null);

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

        const elements = projectsRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="projects" ref={projectsRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">
                    Featured Projects
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-header">
                                <div className="project-icon">
                                    <Folder size={40} strokeWidth={1} color="#6366f1" />
                                </div>
                                <div className="project-links">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <Github size={20} color="#ffffff" />
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                            <ExternalLink size={20} color="#14b8a6" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="project-body">
                                <span className="project-type">{project.type}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <ul className="project-description">
                                    {project.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-footer">
                                <div className="tech-stack">
                                    {project.techStack.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
