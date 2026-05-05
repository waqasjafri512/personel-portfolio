import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <span className="logo-text">Muhammad Waqas Anjum</span>
                </div>

                <p className="footer-text">
                    Designed & Built by <span className="highlight">Muhammad Waqas Anjum</span>
                </p>

                <div className="footer-links">
                    <a href="https://github.com/waqasjafri512" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} color="#ffffff" />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-waqas-anjum" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} color="#0077b5" />
                    </a>
                    <a href="mailto:mr.waqasjafri@gmail.com" aria-label="Email">
                        <Mail size={20} color="#ea4335" />
                    </a>
                </div>

                <p className="footer-copyright">
                    © {currentYear} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
