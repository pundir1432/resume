import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Section.css'
import Slider from 'react-slick';
const skillsData = [
  { name: 'C', percent: 90, backgroundImage: 'https://img.freepik.com/free-vector/branding-identity-corporate-c-logo-vector-design-template_460848-13936.jpg?semt=ais_hybrid' },
  { name: 'HTML5', percent: 95, backgroundImage: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png' },
  { name: 'CSS3', percent: 85, backgroundImage: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' },
  { name: 'JavaScript', percent: 80, backgroundImage: 'https://www.shutterstock.com/image-illustration/javascript-es6-vector-logo-disign-260nw-2438402733.jpg' },
  { name: 'SQL', percent: 90, backgroundImage: 'https://www.shutterstock.com/image-vector/sql-icon-major-database-format-260nw-1904337712.jpg' },
  { name: 'ReactJS', percent: 70, backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s' },
  { name: 'ExpressJS', percent: 50, backgroundImage: 'https://t3.ftcdn.net/jpg/03/47/42/98/360_F_347429829_LhBd6fIJYzWZXg21HfDBm7Ze38akG9DS.jpg' },
];
const images = [
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',
  'https://www.ardentbusinesssolutions.com/img/business-1.jpg',

];

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <>
      <div className="container-fluid h-screen mt-5 ">
        <div className="row">
          <div className="col-6 mt-5 ">
            <div className="div text-white d-flex justify-content-start align-items-start">
              <div className="div athira" >
                <h4>PANKAJ SINGH</h4>
                <p>Engineer + Junior Front-end Developer</p>
                <div className="flex justify-center space-x-6 mt-5">
                  <a href="https://twitter.com" target="_blank" className='rounded-circle py-3 p-0 px-2 icon' rel="noopener noreferrer">
                    <FaTwitter size={32} className='text-dark' />
                  </a>
                  <a href="https://github.com" target="_blank" className='rounded-circle mx-2 py-3 p-0 px-2 icon' rel="noopener noreferrer">
                    <FaGithub size={32} className='text-dark' />
                  </a>
                  <a href="https://linkedin.com" target="_blank" className='rounded-circle mx-2 py-3 p-0 px-2 icon' rel="noopener noreferrer">
                    <FaLinkedin size={32} className='text-dark' />
                  </a>
                  <a href="https://instagram.com" target="_blank" className='rounded-circle mx-2 py-3 p-0 px-2 icon' rel="noopener noreferrer">
                    <FaInstagram size={32} className='text-dark' />
                  </a>
                </div>
              </div>
            </div>
            <div className="scroll d-flex justify-content-start align-items-start " style={{ cursor: 'pointer' }}>
              <p style={{ color: '#928A97' }}><i class="bi bi-arrow-down-circle"></i> Scroll</p>
            </div>
          </div>

        </div>
      </div>
      <div className="container mt-lg-5 ">
        <div className="row">
          <div className="col-12 col-lg-5 d-lg-flex flex-column justify-content-lg-end" data-aos="zoom-out-right">
            <img src="https://www.ardentbusinesssolutions.com/img/business-1.jpg" className='img-fluid buissness-img ms-auto' alt="" />
            <p style={{ color: 'black' }} className='mx-5 mt-4'><i class="bi bi-arrow-down-circle"></i> Scroll</p>

          </div>
          <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center  " data-aos="zoom-out-left">
            <div className="div-about text-start  w-75">
              <h3>About me</h3>
              <p className="py-2 text-muted">
                An unquisitive Computer Sceince Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collabration, communcation and passion.
              </p>
              <button className="btn bg-dark p-3 px-3 text-white">Download CV</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center  " data-aos="zoom-out-right">
            <div className="div-about text-start mt-5 w-75">
              <h3>Skills</h3>
              <p className="py-2 text-muted">
                I enjoy creating things that live on the internet whether that be websites, applications, or anything in between.
              </p>
              <div className="skills-container mt-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                {skillsData.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <div
                      className="circle p-1 text-dark"
                      style={{
                        '--percent': skill.percent,
                        backgroundImage: `url(${skill.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      data-percent={skill.percent}
                    ></div>
                    <span className='span'>{skill.percent}%</span>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>

              <p style={{ color: '#928A97' }} className='mt-5'><i class="bi bi-arrow-down-circle"></i> Scroll</p>
            </div>
          </div>
          <div className="col-12 col-lg-5" data-aos="zoom-out-left">
            <img src="https://www.ardentbusinesssolutions.com/img/business-1.jpg" className='img-fluid buissness-img2 ms-auto' alt="" />

          </div>
        </div>
      </div>
      <div className="caontainer mt-4">
        <div className="row mx-auto">
          <div className="col-12">
            <div className="carousel-container">
              <Slider {...settings}>
                {images.map((imgSrc, index) => (
                  <div key={index} className="carousel-slide w-100 pt-5 pb-5 mt-4">
                    <img src={imgSrc} alt={`Slide ${index + 1}`} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Hero;
