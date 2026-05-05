import { useEffect, useRef } from 'react';
import { certifications } from '../data/certifications';
import * as FaIcons from 'react-icons/fa';

const certColors = {
    'FaAws': '#FF9900',
    'FaReact': '#61DAFB',
    'FaNodeJs': '#339933',
    'FaDocker': '#2496ED',
};

const CertIcon = ({ iconName }) => {
    const color = certColors[iconName] || 'currentColor';
    if (FaIcons[iconName]) {
        const Icon = FaIcons[iconName];
        return <Icon size={24} color={color} />;
    }
    return null;
};

const Certifications = () => {
    const certRef = useRef(null);

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

        const elements = certRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="certifications" className="certifications" ref={certRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">
                    Certifications
                </h2>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="certification-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="cert-icon-wrapper">
                                <span className="cert-icon">
                                    <CertIcon iconName={cert.icon} />
                                </span>
                            </div>
                            <div className="cert-content">
                                <h3 className="cert-title">{cert.title}</h3>
                                <span className="cert-issuer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    {cert.issuer}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
