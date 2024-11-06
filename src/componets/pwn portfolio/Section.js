import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Section.css'
import Slider from 'react-slick';
import { about, cv, logo } from '../../assest/images';
import SectionModal from './SectionModal';
import Comments from './Comments';
import axios from 'axios';
const skillsData = [
  { name: 'C', backgroundImage: 'https://img.freepik.com/free-vector/branding-identity-corporate-c-logo-vector-design-template_460848-13936.jpg?semt=ais_hybrid' },
  { name: 'HTML5', backgroundImage: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png' },
  { name: 'CSS3', backgroundImage: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' },
  { name: 'JavaScript', backgroundImage: 'https://www.shutterstock.com/image-illustration/javascript-es6-vector-logo-disign-260nw-2438402733.jpg' },
  { name: 'SQL', backgroundImage: 'https://www.shutterstock.com/image-vector/sql-icon-major-database-format-260nw-1904337712.jpg' },
  { name: 'ReactJS', backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s' },
  { name: 'ExpressJS', backgroundImage: 'https://t3.ftcdn.net/jpg/03/47/42/98/360_F_347429829_LhBd6fIJYzWZXg21HfDBm7Ze38akG9DS.jpg' },
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
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Clean up the event listener
  }, []);
  const [open, setOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState('');
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setSubmittedData(data);
    try {
      const response = await fetch('http://localhost:5000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: data }),
      });
      if (response.ok) {
        setInputData('');
        fetchData(); 
        setSubmittedData(data);
        setOpen(true);
        reset();
      } else {
        console.error('Failed to post data');
      }
    
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

const handleClose = () => setOpen(false);

useEffect(() => {
  AOS.init({
    duration: 1000,
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
  arrows: false,
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
const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};
const [percent, setPercent] = useState(0);
const [isDownloading, setIsDownloading] = useState(false);

const imageUrl = cv;

const startDownload = () => {
  if (isDownloading) return;

  setIsDownloading(true);
  const interval = setInterval(() => {
    setPercent((prev) => {
      if (prev < 100) return prev + 1;
      clearInterval(interval);

      downloadImage(imageUrl);

      setTimeout(() => {
        setPercent(0);
        setIsDownloading(false);
      }, 500);
      return prev;
    });
  }, 30);
};

const downloadImage = (url) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = 'pankaj singh cv.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const handleScroll = () => {
  window.scrollBy({
    top: 700,
    left: 0,
    behavior: 'smooth'
  });
};


return (
  <>

<div className={`container ${scrolled ? 'scrolled' : ''}`}>
      <div className="row mx-auto">
        <div className="col-12 border-0">
          <nav className={`navbar navbar-expand-lg ${scrolled ? 'bg-change' : 'header-bg'} fixed-top border-none`} data-aos="fade-up" data-aos-duration="3000">

            <div className="container-fluid navbar-bg " >
              <a href="" className="navbar-brand mb-3 p-0">
                <img src={logo} alt="" className='img-fluid me-auto mt-2 rounded-circle d-lg-none' style={{ width: '40px', height: '40px' }} />
              </a>
              <button className="navbar-toggler text-white border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
              </button>
              <div className="collapse navbar-collapse bg-lg-transparent " id="navbarSupportedContent">
                <ul className="navbar-nav ps-lg-5  me-auto mb-2 mb-lg-0">
                  <li className="nav-item ps-lg-5" onClick={() => scrollToSection('home')}>
                    <a className="nav-link active ps-lg-5 text-center" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => scrollToSection('about')}>
                    <a className="nav-link active ps-lg-5 text-center" aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => scrollToSection('skills')}>
                    <a className="nav-link active ps-lg-5 text-center" aria-current="page" href="#">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => scrollToSection('works')}>
                    <a className="nav-link active ps-lg-5 text-center" aria-current="page" href="#">
                      Works
                    </a>
                  </li>
                  <li className="nav-item" onClick={() => scrollToSection('contact')}>
                    <a className="nav-link active ps-lg-5 text-center" aria-current="page" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    {/* HOME */}
    <section id="home">
      <div className="container-fluid h-screen mt-5 " data-aos="fade-up" data-aos-duration="3000">
        <div className="row">
          <div className="col-lg-6 col-12 mt-5 ">
            <div className="div text-white d-flex justify-content-start align-items-start">
              <div className="div athira" data-aos="fade-down-right">
                <h4>PANKAJ SINGH</h4>
                <p >Engineer + Junior Front-end Developer</p>
                <div className="d-flex justify-content-center justify-content-lg-start space-x-6 mt-5">
                  <a href="https://twitter.com" target="_blank" className='rounded-circle  py-2 p-0 px-2 icon' rel="noopener noreferrer">
                    <FaTwitter size={32} className='text-dark d-none d-lg-block' />
                    <FaTwitter size={23} className='text-dark d-lg-none' />
                  </a>
                  <a href="https://github.com" target="_blank" className='rounded-circle mx-2  py-2 p-0 px-2 icon' rel="noopener noreferrer">
                    <FaGithub size={32} className='text-dark d-none d-lg-block' />
                    <FaGithub size={23} className='text-dark d-lg-none' />
                  </a>
                  <a href="https://linkedin.com" target="_blank" className='rounded-circle mx-2  py-2 p-0 px-2 icon' rel="noopener noreferrer">
                    <FaLinkedin size={32} className='text-dark d-none d-lg-block' />
                    <FaLinkedin size={23} className='text-dark d-lg-none' />
                  </a>
                  <a href="https://instagram.com" target="_blank" className='rounded-circle mx-2  py-2 p-0 px-2 icon' rel="noopener noreferrer">
                    <FaInstagram size={32} className='text-dark d-none d-lg-block' />
                    <FaInstagram size={23} className='text-dark d-lg-none' />
                  </a>
                </div>
              </div>
            </div>
            <div className="scroll d-flex justify-content-start align-items-start " onClick={handleScroll} style={{ cursor: 'pointer' }}>
              <p style={{ color: '#928A97' }}><i class="bi bi-arrow-down-circle"></i> Scroll</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    {/* ABOUT */}
    <section id="about">
      <div className="container mt-lg-5 ">
        <div className="row mx-auto">
          <div className="col-12 col-lg-5 d-lg-flex flex-column justify-content-lg-end" data-aos="fade-down"
          >
            <img src={about} className='img-fluid buissness-img ms-auto mt-lg-0 mt-5' alt="" />
            <div className="scrol px-lg-5 mt-3 d-flex justify-content-start align-items-start " onClick={handleScroll} style={{ cursor: 'pointer' }}>
              <p style={{ color: '#928A97' }}><i class="bi bi-arrow-down-circle"></i> Scroll</p>
            </div>
          </div>
          <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center align-items-lg-start mt-lg-5  " data-aos="fade-down"
          >
            <div className="div-about text-start  w-75">
              <h3>About me</h3>
              <p className="py-2 text-muted">
                An unquisitive Computer Sceince Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collabration, communcation and passion.
              </p>

              <div className="container1">
                <button
                  className={`button ${isDownloading ? 'start-download' : ''}`}
                  onClick={startDownload}
                >
                  <div
                    className="progress"
                    style={{ inset: `${percent}% 0 0 0` }}
                  ></div>
                  <span className="value">
                    {isDownloading ? `${percent}%` : 'Download CV'}
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <hr className='d-lg-none' />
    </section >
    {/* SKILLS */}
    <section section id="skills" >
      <div className="container mt-lg-5">
        <div className="row">
          <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center  " data-aos="fade-down"
          >
            <div className="div-about text-start mt-lg-5 w-75">
              <h3>Skills</h3>
              <p className="py-2 text-muted">
                I enjoy creating things that live on the internet whether that be websites, applications, or anything in between.
              </p>
              <div className="skills-container mt-5 mt-lg-3" data-aos="fade-up" data-aos-anchor-placement="center-bottom"
              >
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
                    ></div>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
              <div className="scrol  mt-3 d-flex justify-content-start align-items-start " onClick={handleScroll} style={{ cursor: 'pointer' }}>
                <p style={{ color: '#928A97' }}><i class="bi bi-arrow-down-circle"></i> Scroll</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5" data-aos="fade-down"
          >
            <img src="https://www.shutterstock.com/image-photo/young-casual-business-woman-sitting-600nw-2461145297.jpg" className='img-fluid buissness-img2 ms-auto' alt="" />

          </div>
        </div>
      </div>
    </section>
    {/* WORKS */}
    <section section id="works" >

      <div className="caontainer mt-lg-4">
        <div className="row mx-auto">
          <div className="col-12">
            <hr className="d-lg-none" />

            <div className="carousel-container">
              <Slider {...settings}>
                {images.map((imgSrc, index) => (
                  <div key={index} className="carousel-slide w-100 pt-lg-5 pb-5 mt-lg-4">
                    <img src={imgSrc} alt={`Slide ${index + 1}`} className="carousel-image  mx-auto" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CONTACT */}
    <section section id="contact" >
      <div className="bg-frame mt-lg-4">
        <div className="container-fluid p-lg-5 ">
          <div className="row mx-auto ">
            <div className="col-12 bg-white rounded-3 p-lg-3">
              <div className="row">
                <div className="col-12 col-lg-5 px-lg-4">
                  <h1 className='form-heading px-2 mb-lg-5 px-lg-4' style={{ wordSpacing: '10px' }} data-aos="zoom-out">GET IN <span className="text-danger">TOUCH</span></h1>

                  <div className="div w-100 " data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000" >
                    <h2 className='form-heading-para  mt-lg-2 px-lg-4 mt-3' >Please fill out the form on this section to contact with me . call between saturday to sunday anytime.</h2>
                    <div className="d-flex px-lg-4 mt-3 w-100">
                      <div className="address w-100">
                        <h5 className='mt-lg-1'> <i class="bi bi-geo-alt"></i> Address:</h5>
                        <h5 className='mt-lg-4'><i class="bi bi-envelope"></i> Email:</h5>
                        <h5 className='mt-lg-4'><i class="bi bi-telephone"></i> Phone:</h5>
                        <h5 className='mt-lg-4'><i class="bi bi-browser-chrome"></i> Website:</h5>
                        <h5 className='mt-lg-4'><i class="bi bi-instagram"></i> Instagram</h5>
                        <h5 className='mt-lg-4'><i class="bi bi-facebook"></i> Facebook:</h5>
                        <h5 className='mt-lg-4'><i class="bi bi-whatsapp"></i> Whatsapp:</h5>
                      </div>
                      <div className="link px-3 w-100">
                        <p className='form-heading-address '> INDUSTRIAL AREA PHASE 1 CHANDIGARH</p>
                        <p className='form-heading-address'>pankajpundir228@gmail.com</p>
                        <p className='form-heading-address'>7668038069</p>
                        <p className='form-heading-address'><a className=' form-heading-address' href="https://resume-r29u.vercel.app/?vercelToolbarCode=oczRWGze1K-SBg0">resume-r29u-phxsxfh4u-p7ps-projects</a></p>
                        <p className='form-heading-address'><a className=' form-heading-address' href="https://www.instagram.com/mr.p_7_p?igsh=NXQzYTh1emlwa2E=">mr.p_7_p</a></p>
                        <p className='form-heading-address'><a className=' form-heading-address' href="https://www.facebook.com/pankajpundir.pankaj.79">Pankaj Pundir Pankaj</a></p>
                        <p className='form-heading-address'><a className=' form-heading-address' href="https://whatsapp.com/dl/">7534918002</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-7 p-lg-5"  >
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-lg-5">
                    {/* Name Input */}
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control mb-3 input"
                      {...register('name')}
                    />
                    {errors.name && <p className="text-danger" style={{ fontSize: '13px' }}>{errors.name.message}</p>}

                    {/* Email Input */}
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control mb-3 input"
                      {...register('email')}
                    />
                    {errors.email && <p className="text-danger" style={{ fontSize: '13px' }}>{errors.email.message}</p>}

                    {/* Message Textarea */}
                    <textarea
                      placeholder="Message"
                      className="form-control mb-3"
                      rows={4}
                      {...register('message')}
                    />
                    {errors.message && <p className="text-danger" style={{ fontSize: '13px' }}>{errors.message.message}</p>}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn p-2 px-3 text-white d-none d-lg-block"
                      data-aos="zoom-out"
                      style={{ backgroundColor: '#151E3D' }}
                    >
                      Send Message
                    </button>
                    <button
                      type="submit"
                      className="btn p-1 px-1 text-white d-lg-none mb-2"
                      style={{ backgroundColor: '#151E3D', fontSize: '13px' }}
                    >
                      Send Message
                    </button>
                  </form>


                  {/* Modal Component */}
                  <SectionModal open={open} handleClose={handleClose} data={submittedData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-bg mb-lg-0 mb-2">
        <div className="container p-3">
          <div className="row">
            <div className="col-12 col-lg-6">
              <Comments />
            </div>
            <div className="col-12 col-lg-6"></div>
          </div>
        </div>
      </div>
      <div className="bg-footer">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-12 text-center p-3 contact-section" data-aos="flip-down">
              <p className=' text-white'>Pankaj singh</p>
              <div className="d-flex justify-content-center space-x-6 mt-3">
                <a href="https://twitter.com" target="_blank" className='rounded-circle  py-2 p-0 px-2 icon' rel="noopener noreferrer">
                  <FaTwitter size={32} className='text-dark d-none d-lg-block' />
                  <FaTwitter size={23} className='text-dark d-lg-none' />
                </a>
                <a href="https://github.com" target="_blank" className='rounded-circle mx-2  py-2 p-0 px-2 icon' rel="noopener noreferrer">
                  <FaGithub size={32} className='text-dark d-none d-lg-block' />
                  <FaGithub size={23} className='text-dark d-lg-none' />
                </a>
                <a href="https://linkedin.com" target="_blank" className='rounded-circle mx-2  py-2 p-0 px-2 icon' rel="noopener noreferrer">
                  <FaLinkedin size={32} className='text-dark d-none d-lg-block' />
                  <FaLinkedin size={23} className='text-dark d-lg-none' />
                </a>
                <a href="https://instagram.com" target="_blank" className='rounded-circle mx-2  py-2 p-0 px-2 icon' rel="noopener noreferrer">
                  <FaInstagram size={32} className='text-dark d-none d-lg-block' />
                  <FaInstagram size={23} className='text-dark d-lg-none' />
                </a>
              </div>
              <p className='mt-3 text-white'>All Rights Reserved &copy; {new Date().getFullYear()} Pankaj Singh</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>
);
}

export default Hero;
