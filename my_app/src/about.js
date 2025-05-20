import {motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
     const [name, setName] = useState('James H.');
     const [profession, setProfession] = useState('Gamer and Tech Enthusiast');
     const [testimonal, setTestimonial] = useState("I can't recommend Apex Digital Solution enough! Not only did they sell me a fantastic desktop that fits all my gaming needs, but their after-sales support is phenomenal. I had a minor issue with the setup, and their friendly technicians walked me through it patiently. They truly care about their customers!");
     const handleClick =() => {
        var val = Math.random() * files.length;
        val = Math.floor(val);
        files.forEach((file) => {
            setName(files[val].person)
            setProfession(files[val].profession)
            setTestimonial(files[val].opinion)
            
        }

     )}
    
    
    const files = [
      {person: 'Sarah T.',
      profession: 'Small Business Owner', 
      opinion:"I recently purchased a high-performance laptop from Apex Digital Solution, and I couldn't be happier with my choice! The staff took the time to understand my needs and guided me to the perfect model for my work. The setup was seamless and I appreciate the quick response from their customer support team when I had a few questions afterward. Highly recommend!"},
      {person: 'Michael R. ',
       profession: 'Freelance Designer', opinion: "Apex Digital Solution came to my rescue when my computer crashed just before an important presentation. Their repair service was fast and efficient! They diagnosed the issue quickly and had my device up and running in no time. Their expertise and professionalism are unmatched. I won’t go anywhere else for my tech needs!"
      },
      {person: 'Linda K.',
      profession: 'Operations Manager',
      opinion: "As a growing company, we needed a reliable partner for our computer networking. Apex Digital Solution designed and implemented a tailored networking solution that has greatly improved our efficiency. Their team was knowledgeable, professional, and always available for support. We’re extremely satisfied with their services!"},
      {
        person: 'Adedolapo D.',
        profession: 'Office Administrator',
        opinion:"We rely on Apex Digital Solution for all our IT needs. Their repair services are quick and reliable, and the team always goes above and beyond to ensure our systems run smoothly. They helped us set up a secure network that has significantly improved our productivity. It's a relief to know we have a partner we can trust!"
      }
      
    ]
    return ( 
        <div>
            
            <motion.h1 className="about-us" initial = {{x:'100vw'}}  animate={{x:0}} 
            transition ={{delay:0.5, type: 'spring', stiffness:'120'}} >
                About Us</motion.h1>
            <p className="note">
                At Apex Digital Solutions, we pride ourselves at being at the forefront
                of computer repair engineering, providing topnotch, reliable, and efficient
                services tailored to meet your unique needs with a team of certified technicians
                and a passion for technology. We are dedicated to ensuring your devices are running smoothly
                and efficiently.
            </p>
            
            <div className="note">
                <h2>Our Services</h2>
                <p >
                From hardware malfunction to software glitches, we handle it all! Our comprehensive
                range of services include:
                </p>
                <h4> Diagnostic Services:</h4>
                <p> We identify and troubleshoot issues to get to the root of the problem  </p>
                <h4>HardWare Repair</h4>
                <p>Whether it's a cracked screen, faulty motherboard or dead battery, our expert can fix it</p>
                <h4>Software Service</h4>
                <p>We specialize in virus removal, system optimization, and Os installation
                to keep your device performing at its best. </p>
                <h4>Data Recovery</h4>
                <p>Lost important files? Our data recovery service is aimed at recovering your valuable
                    information quickly and safely.
                </p>
                <h4>Custom Builds</h4>
                <p>Need a powerful gaming PC or a work station for your creative project?
                    We can design and build custom systems tailored to your requirements.
                </p>
            </div>
            <div className="assess">
                <p className="aby"> {name}</p>
                <p className="prof">{profession}</p>
                <i className="fa-solid fa-leaf" /> <i className="fa-solid fa-leaf" />
                <p className="view">{ testimonal }</p>
                <i className="fa-solid fa-leaf" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-regular fa-star" />
                <i className="fa-solid fa-leaf" style={{ color: "yellow" }} />
                <button className="comment" onClick={handleClick}> Next &gt;&gt;&gt;</button>
            </div>

                


        
        </div>
     );
}
 
export default About;