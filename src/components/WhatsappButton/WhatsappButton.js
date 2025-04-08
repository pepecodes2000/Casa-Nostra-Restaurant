import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WhatsappButton.css';

const WhatsappButton = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  const phoneNumber = '593994349912';
  const message = '¡Hola! Quiero hacer una cotización.';

  useEffect(() => {
    // Función que activa vibración y luego la desactiva
    const triggerVibration = () => {
      setIsVibrating(true);
      setMessageVisible(true);

      setTimeout(() => {
        setIsVibrating(false);
        setMessageVisible(false);
      }, 3000); // Vibra durante 3 segundos
    };

    // Espera inicial de 15 segundos, luego se repite cada 18 (15 + 3)
    const initialTimeout = setTimeout(() => {
      triggerVibration();
      const interval = setInterval(triggerVibration, 18000); // Repite cada 18 seg

      // Guardar el interval para limpieza
      return () => clearInterval(interval);
    }, 15000); // Espera inicial de 15 seg

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div>
      {/* Mensaje emergente */}
      {messageVisible && (
        <div className="message-popup">
          ¡Hola! ¿Te puedo ayudar?
        </div>
      )}

      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        className={`btn btn-success rounded-circle position-fixed bottom-0 end-0 m-3 shadow-lg whatsapp-btn ${isVibrating ? 'vibrate' : ''}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default WhatsappButton;
