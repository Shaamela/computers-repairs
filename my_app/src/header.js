import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse} from '@fortawesome/free-solid-svg-icons';




function Header() {
  return (
    <div>
        
        <section className="grid">
          <motion.div initial={{opacity: 0.3}}
          animate={{opacity: 1}} transition={{delay:0.5, duration: 2.5}}>
            <p>
              
                Introducing Apex Digital Solutions: <br />
                Your Trusted Partner in <br />
                Computer Repair Engineering
            </p>
            <p>
                Free 30days Remote Support after you <br /> use our services for the first
                time
            </p>
            <motion.div initial={{y:[10, 20, 10, 0, -10, -20]}} animate={{y: -20 }} transition={{duration: 1.2, repeatType:'reverse', repeat:Infinity}}   className="mouse"><FontAwesomeIcon icon={faMouse} fontSize={40} color= 'blue'  /></motion.div>
          </motion.div>
          <div className='pic'>
                <img src= { require("./assets/images/screen.jpeg") }  alt="computer engineer" />
          </div>
        </section>
        <main>
        <div className="main"> 
        <div className="welcome-1">
            <h3>Welcome</h3>
            <p>
                
                Apex Digital Solution is a professional mobile computer repair service
                company specializing in Microsoft and Apple platform computers serving
                Nationwide for over 7 years. <br />
                <br /> Apex Digital Solution provides you with the highest quality
                computer support for desktops, laptops an notebook computers and offer
                a wide variety of services for both resdential and business customers as
                well as remote support. <br />
                <br />
                Apex Digital Solution has been certified to troubleshoot and fix some of
                the latest computer systems, including, the Windows series, Apple OS and
                Vista operating systems. <br />
                <br />
                Apex Digital Solution certified computer technicians will be on time to
                your residence or place of business and will resolve your computer
                issues accurately and within stipulated time. <br />
                <br />
                Call us anytime, we are available to serve you <br /> 24 hours in a day,
                7 days a week at +234-706-9284-305.
            </p>
            
    </div>
        <div className="welcome-2">
        <p>
            Same day Computer,
            <br />
            Network IT repair for <br />
            your <br />
            Home or Office.
        </p>
        <p>
            Free Remote Support after <br /> you use our services for the <br />{" "}
            first time <br /> Free Phone Support 24/7{" "}
        </p>
        </div>
    </div>
    
    </main>
    <iframe
      title="Impressive Close Map"
      src="https://maps.google.com/maps?q=Impressive+Close,+Agidingbi,+Ikeja,+Lagos&output=embed&t=m&z=18"
      width="100%"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
    ></iframe>
    
    </div>
  )
}

export default Header;