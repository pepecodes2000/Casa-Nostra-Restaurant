import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FacebookCarousel.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const imageUrls = [
        "https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/247211138_113493857789448_5187602417561945121_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=QAfo7rdMOygQ7kNvwHb_9EB&_nc_oc=Adkb0TAuUfMKH45wryNuWLqtMU18S60XKIY8hxf71smNe8MEQI0aO499ZCYglmOYIvs&_nc_zt=23&_nc_ht=scontent.floh4-1.fna&_nc_gid=bQtgR94suXIDfBtRydYFoA&oh=00_AYHW2XHMCrhnmr7zPpazclDaSXFzCyZeryVkn95hw8nJpg&oe=67F60F3B",
        "https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/475890689_635371249013521_8291171051981002840_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GfeDBFIUlG0Q7kNvwFfwgOj&_nc_oc=AdmJ7Qz2fzoz7nOXUNQAAAv20mWLG8vF3PS1np8gIE0qG2FqIXH8VDtFmkjvrsDKHSY&_nc_zt=23&_nc_ht=scontent.floh4-1.fna&_nc_gid=gBMRtFI2qooe8g1PUbdKEQ&oh=00_AYH4hMfBR4E3lTBavHBhqBuT8yEDQSqr7AcJ4BRH6tpi8w&oe=67F62DB4",
        "https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/475449847_634936692390310_1301244454047094123_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PhvejeuZkGoQ7kNvwH1OH-m&_nc_oc=AdkDgvA0-lLpX8XeArvPaWDTgIHlxTmylAY2bT4-vzVaw-nJmChPj-GEW5t09sYf33g&_nc_zt=23&_nc_ht=scontent.floh4-1.fna&_nc_gid=vGeuKT0vT9Ru02saMteZhg&oh=00_AYHdOjDlNzreufOYbAhx3z5GCXeCCDrEQc2Ea7QGFVrDPQ&oe=67F6331C",
        "https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/472930290_624370536701775_3562068399604997896_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rBQIzdxbBeEQ7kNvwHo4dS0&_nc_oc=AdmxBG9_IDsfSsvUS9RdT2YumdoiM5um3B28_4D-ZIjgYePCDHBpGWWObawO6Z3Fzhk&_nc_zt=23&_nc_ht=scontent.floh4-1.fna&_nc_gid=Pwrma-MkipGekFfjFRg-Ng&oh=00_AYEuVY0u-v2BSqxwnWUwjfuyrSItfOFGE0kJV2LlARRYnQ&oe=67F62017",
        "https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/472799080_624370720035090_4598389511228661241_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TLL4JQ4zuYAQ7kNvwGv9YYa&_nc_oc=Adn7UqYoHW6TbxcxdI6f2sZxqd8ft9YfsrMIMRZlntfUs76MbduL7zWZN6T1LyOQ04Q&_nc_zt=23&_nc_ht=scontent.floh4-1.fna&_nc_gid=2UiA2MvGwaoqWX5jcpViaw&oh=00_AYGYhmaNTHqieQ3Tj_95Jkr5wOES_P3X0lTyVwX7L0x3zg&oe=67F632D6",
        "https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/472894555_624370503368445_3236587507221785307_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A9qGB-vXc0cQ7kNvwHJJmDn&_nc_oc=Admj0w7W88PdYVVQKwbBdpfM69kgNicXJLgERP0NDZydxt8EaPPDF8RuVwlAudtlyjM&_nc_zt=23&_nc_ht=scontent.floh4-1.fna&_nc_gid=vAbbBf200PqHPhIJ_qbEyQ&oh=00_AYH4vTRB3Bg0DLDutg4EOZczq55nE2aO5kjcs48zNadHSg&oe=67F61797",
        "https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/472799074_624370513368444_4866945460635501118_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=byr7vrIRGf4Q7kNvwG0u40R&_nc_oc=Adl7LNYGsNaPatJWsWZfi3ayruhmV_q6D5zd4Al3xf7EfySR0J4feN7KN9aCVzHU8TA&_nc_zt=23&_nc_ht=scontent.floh4-1.fna&_nc_gid=IIOrYAtOhdgf0OIdBaAtRQ&oh=00_AYHe2XzXkibXCi-dVQKshAEXfWMd0ImOZJrNYkXD38w2SQ&oe=67F61998",
        "https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/472708563_624370656701763_5253474511560091170_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QrPAFMGeLmEQ7kNvwHyPqmw&_nc_oc=AdkDqwCN2sF-QHbAe0id6Cz0eM8eyQiNUQupdknGZPDAfNPOBAMVUNUIdGRX6fOzUu8&_nc_zt=23&_nc_ht=scontent.floh4-1.fna&_nc_gid=M0eNqgua9pQM8y0-KWu1hw&oh=00_AYEprYwe8ic1X3wC-OPbxw2hJRIwCt3eIasuci1A-iJ6RQ&oe=67F644D8",
        "https://scontent.floh4-1.fna.fbcdn.net/v/t39.30808-6/472527343_623609616777867_3845096755032141788_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LPkCYhA1n_0Q7kNvwEPdBum&_nc_oc=AdnzkWLBVyf_AsQ8IICOMDrjMrWaGAKGBbFQMaQK9NpfWFePa6v75BpXutYxGq_ijGU&_nc_zt=23&_nc_ht=scontent.floh4-1.fna&_nc_gid=5Vddo9OHXGqCb1KFp0mpYw&oh=00_AYFbdHCWLJUlcri_Rg0oHEpGexZ-uZBWlW9p93z-TClFNg&oe=67F6441F"
    ];

const FacebookCarousel = () => {
    return (
        <div className="carousel-slide" style={{ fontFamily: "'Playfair Display', serif" }}>
            <div className="carousel-content">
                {/* Izquierda: Logo */}
                <div className="carousel-left">
                    <img src="/Logo_Blanco.png" alt="Logo" className="carousel-logo" />
                    <h2 className="text-uppercase">Casa Nostra Restaurant</h2>
                </div>

                {/* Centro: Carrusel de imágenes */}
                <div className="carousel-center">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        className="swiper-container"
                    >
                        {imageUrls.map((url, index) => (
                            <SwiperSlide key={index}>
                                <img src={url} alt={`slide-${index}`} className="carousel-image" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Derecha: Bienvenida */}
                <div className="carousel-right">
                    <section className="welcome-section">
                        <h1>Bienvenido a nuestro restaurante</h1>
                        <h4>Disfruta de una experiencia gastronómica única.</h4>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default FacebookCarousel;
