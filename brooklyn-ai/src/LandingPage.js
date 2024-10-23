// src/LandingPage.js
import React from 'react';
import './LandingPage.css'; // CSS styles for the landing page

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="leaves">
                <div className="leaf"></div>
                <div className="leaf"></div>
                <div className="leaf"></div>
                <div className="leaf"></div>
                <div className="leaf"></div>
            </div>
            <header className="header">
                <h1>Welcome to Brooklyn</h1>
                <p>Your personal guide to positivity and support.</p>
            </header>
            <main className="main-content">
                <h2>How It Works</h2>
                <p>
                    Enter your thoughts or questions, and receive personalized audio advice
                    from our AI model, voiced by Brooklyn.
                </p>
                <button className="get-started-button">
                    Get Started
                </button>
            </main>

            {/* New "Why Brooklyn" Section */}
            <section className="why-brooklyn">
                <h2>Why Brooklyn Was Created</h2>
                <p>
                    Brooklyn was born from a vision to make mental wellness support more accessible, 
                    personal, and human. In a world where many feel overwhelmed or isolated, 
                    Brooklyn offers a unique combination of AI intelligence and human warmth.
                </p>
                <p className="centered">
                    Built with empathy at its core.
                </p>
            </section>

            {/* New "Our Mission" Section */}
            <section className="our-mission">
                <h2>Our Mission</h2>
                <p>
                    To provide accessible, judgment-free guidance that helps people navigate daily challenges 
                    and cultivate personal growth.
                </p>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Self-Help Audio Advice. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;


