import React from 'react';
import './About.css'; 

const About = () => {
    return (
        <div
            className="about-container d-flex justify-content-start align-items-center"
            style={{
                minHeight: '100vh',
                backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '85px',
            }}
        >
            <div
                className="text-white p-5 rounded"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    maxWidth: '450px',
                    borderRadius: '15px',
                }}
            >
                <h5>Somos</h5>
                <h2 className="fw-bold">Casa Nostra</h2>
                <p className="mt-3">
                    Somos una empresa de alimentación empresarial con años de experiencia, dedicados a ofrecer
                    soluciones gastronómicas de alta calidad y adaptadas a cada cliente.
                </p>
                <div className="text-center mt-4">
                    <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="Perfil"
                        className="rounded-circle"
                        style={{ width: '150px', height: '150px', objectFit: 'cover', border: '3px solid white' }}
                    />
                    <p className="mt-3 mb-0 fw-bold">María González</p>
                    <small>COORDINADORA COMERCIAL</small>
                </div>
            </div>
        </div>
    );
};

export default About;
