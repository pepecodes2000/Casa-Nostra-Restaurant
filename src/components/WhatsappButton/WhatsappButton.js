import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import './WhatsappButton.css'; // Importa el archivo CSS con animaciones

const WhatsappButton = () => {
  const [isVibrating, setIsVibrating] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  const phoneNumber = '593994349912'; // Número de teléfono para contacto en WhatsApp
  const message = '¡Hola! Quiero hacer una cotización.'; // Mensaje predeterminado

  useEffect(() => {
    // Iniciar vibración y mostrar mensaje durante 15 segundos
    const vibrateTimeout = setTimeout(() => {
      setIsVibrating(true);
      setMessageVisible(true);
    }, 15000); // Espera 1 segundo antes de iniciar la vibración

    const stopVibrateTimeout = setTimeout(() => {
      setIsVibrating(false);
      setMessageVisible(false);
    }, 3000); // Detiene la vibración después de 15 segundos

    return () => {
      clearTimeout(vibrateTimeout);
      clearTimeout(stopVibrateTimeout);
    };
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
        <FaWhatsapp size={40} /> {/* Ícono de WhatsApp */}
      </a>
    </div>
  );
};

export default WhatsappButton;
