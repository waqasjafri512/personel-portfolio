import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(navLinks[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="navbar-logo" onClick={() => scrollToSection('home')}>
                    <span className="logo-text">MWA</span>
                </a>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>

                <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.id);
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
