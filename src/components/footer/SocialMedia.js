import React, { useEffect } from 'react'
import './footer.css'
import { BsFacebook, BsInstagram, BsPinterest, BsYoutube } from 'react-icons/bs'
import { AiFillCopyrightCircle, AiFillGooglePlusCircle, AiFillTwitterCircle } from 'react-icons/ai';
import Aos from 'aos';
import "aos/dist/aos.css";
    
function SocialMedia() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <footer className="flex-rw">
        <ul className="footer-list-top">
          <li>
            <h4
              data-aos="slide-right"
              data-aos-duration="1000"
              className="footer-list-header"
            >
              About Us
            </h4>
          </li>
        </ul>
        <ul className="footer-list-top">
          <li>
            <h4
              data-aos="fade-down"
              data-aos-duration="1000"
              className="footer-list-header"
            >
              Our Products
            </h4>
          </li>
        </ul>
        <ul className="footer-list-top">
          <li id="help">
            <h4
              data-aos="slide-left"
              data-aos-duration="1000"
              className="footer-list-header"
            >
              Contact Us
            </h4>
          </li>
        </ul>
        <section className="footer-social-section flex-rw">
          <span
            data-aos="slide-right"
            data-aos-duration="1000"
            className="footer-social-overlap footer-social-connect"
          >
            CONNECT <span className="footer-social-small">with</span> US
          </span>
          <span className="footer-social-overlap footer-social-icons-wrapper">
            <a
              data-aos="slide-left"
              data-aos-duration="1000"
              href="https://in.pinterest.com/"
              className="generic-anchor"
              title="Pinterest"
            >
              <BsPinterest />
            </a>
            <a
              data-aos="slide-left"
              data-aos-duration="1000"
              href="https://www.facebook.com"
              className="generic-anchor"
              title="Facebook"
            >
              <BsFacebook />
            </a>
            <a
              data-aos="slide-left"
              data-aos-duration="1000"
              href="https://twitter.com"
              className="generic-anchor"
              title="Twitter"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              data-aos="slide-left"
              data-aos-duration="1000"
              href="http://instagram.com"
              className="generic-anchor"
              title="Instagram"
            >
              <BsInstagram />
            </a>
            <a
              data-aos="slide-left"
              data-aos-duration="1000"
              href="https://www.youtube.com"
              className="generic-anchor"
              title="Youtube"
            >
              <BsYoutube />
            </a>
            <a
              data-aos="slide-left"
              data-aos-duration="1000"
              href="https://plus.google.com"
              className="generic-anchor"
              title="Google Plus"
            >
              <AiFillGooglePlusCircle />
            </a>
          </span>
        </section>
        <section className="footer-bottom-section flex-rw">
          <div className="footer-bottom-wrapper">
            <AiFillCopyrightCircle /> 2022 @ Nayana Narayanan{" "}
            <span className="footer-bottom-rights">
              {" "}
              - All Rights Reserved -{" "}
            </span>
          </div>
          <div className="footer-bottom-wrapper">
            <a
              href="/terms-of-use.html"
              className="generic-anchor"
              rel="nofollow"
            >
              Terms
            </a>{" "}
            |{" "}
            <a
              href="/privacy-policy.html"
              className="generic-anchor"
              rel="nofollow"
            >
              Privacy
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}

export default SocialMedia