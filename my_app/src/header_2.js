import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useEffect,useState } from 'react';
const  Header_2= () => {
    const [isActive, setIsActive] = useState(false);
    
    return (  
        <div>
            <header>
            <nav>
                <ul className="first">   
                    <li>
                        <div>
                            <motion.h2
                            initial={{y:-300}}
                             animate={{y:0}} transition={{delay:0.1, duration: 2}}>APEX DIGITAL SOLUTION

                            </motion.h2>
                            <motion.h4 initial = {{x:100}} animate={{x:0}} transition={{delay: 2, duration:1.5, type: 'spring', stiffness: 120}}>
                                COMPUTER REPAIR</motion.h4>
                            <h5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg> +234-706-9284-305</h5>
                            <h5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" width={15}>
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg> apexdigitalsolutions62@gmail.com</h5>
                        </div>  
                    </li>
                    <li className="number">
                        <div>
                            <img src={require ('./assets/images/logo.jpg') } alt='logo' width={70} className="logos" />
                            
                        </div>
                    </li>                
                </ul>
            </nav>
        </header>
        <section id ='secon'>
            <div id='hamburger' onClick={()=>  
                setIsActive(!isActive)
            }> &#9776;</div>
            {isActive && <ul>
                    
                <motion.li className="diff" whileHover={{scale:1.1, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}}><Link  to= "/" > Home</Link></motion.li>
                <motion.li whileHover={{scale:1.1, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"} } ><Link  to= "/about">About Us</Link></motion.li>
                <motion.li whileHover={{scale:1.1, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"} }><Link to="/residential">Residential</Link></motion.li>
                <motion.li whileHover={{scale:1.1, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"} }><Link to="/tech">Book a Tech</Link></motion.li>
                <motion.li whileHover={{scale:1.1, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"} }><Link  to= "/contact">Contact</Link></motion.li>
                     
                
                </ul>}

                
        </section>
        <section className='oblivion'>
            
                <nav>
                    <ul id="second">
                        <motion.li className="diff" whileHover={{scale:1.1, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}}><Link  to= "/" > Home</Link></motion.li>
                        <motion.li whileHover={{scale:1.1, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"} } ><Link  to= "/about">About Us</Link></motion.li>
                        <motion.li whileHover={{scale:1.1, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"} }><Link to="/residential">Residential</Link></motion.li>
                        <motion.li whileHover={{scale:1.1, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"} }><Link to="/tech">Book a Tech</Link></motion.li>
                        <motion.li whileHover={{scale:1.1, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"} }><Link  to= "/contact">Contact</Link></motion.li>
                     </ul>
                </nav>
        </section>
        </div>
    );
}
 
export default Header_2 ;
