import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function Home() {
      useEffect(() => {
        Aos.init({});
      }, []);

  return (
    <div
      style={{
        paddingTop: "20vh",
        color: "white",
        height: "80vh",
        verticalAlign: "center",
      }}
    >
      <img
        data-aos="slide-down"
        data-aos-duration="2000"
        src="https://clipartstation.com/wp-content/uploads/2018/10/wasserspritzer-clipart.png"
        alt="logo"
        height="90px"
      />
      <h1
        data-aos="slide-left"
        data-aos-duration="3000"
        style={{ fontFamily: "'Grape Nuts', cursive" }}
      >
        Company Name
      </h1>
      <img
        data-aos="slide-up"
        data-aos-duration="2000"
        alt="shoping"
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        src="https://www.weirdworm.com/wp-content/uploads/2020/01/Online-Shopping.jpg"
      />

      <h1
        data-aos="slide-right"
        data-aos-duration="3000"
        style={{ fontFamily: "'Grape Nuts', cursive" }}
      >
        Shoping Made Fun
      </h1>
    </div>
  );
}

export default Home