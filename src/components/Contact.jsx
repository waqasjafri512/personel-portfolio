import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Contact = () => {
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

        const elements = contactRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <Mail size={24} color="#6366f1" />,
            label: 'Email',
            value: 'mr.waqasjafri@gmail.com',
            href: 'mailto:mr.waqasjafri@gmail.com',
        },
        {
            icon: <Phone size={24} color="#14b8a6" />,
            label: 'Phone',
            value: '+92-308-0425989',
            href: 'tel:+923080425989',
        },
        {
            icon: <MapPin size={24} color="#ec4899" />,
            label: 'Location',
            value: 'Islamabad, Pakistan',
            href: null,
        },
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/waqasjafri512',
            icon: <Github size={24} color="#ffffff" />,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/muhammad-waqas-anjum',
            icon: <Linkedin size={24} color="#0077b5" />,
        },
    ];

    return (
        <section id="contact" className="contact" ref={contactRef}>
            <div className="container">
                <h2 className="section-title animate-on-scroll">
                    Get In Touch
                </h2>

                <div className="contact-content">
                    <div className="contact-info animate-on-scroll">
                        <h3 className="info-title">Let's Connect</h3>
                        <p className="info-description">
                            I'm currently open to new opportunities and would love to hear from you.
                            Whether you have a question, want to collaborate, or just want to say hi,
                            feel free to reach out!
                        </p>

                        <div className="contact-items">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="contact-item">
                                    <div className="item-icon">{item.icon}</div>
                                    <div className="item-content">
                                        <span className="item-label">{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} className="item-value">{item.value}</a>
                                        ) : (
                                            <span className="item-value">{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
