import { color, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div>
            
            <footer>
        
        <div className="footer-1">
            <ul>
                <motion.li className="footer-list" whileHover={{scale:1.3, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}} transition={{type:'spring', stiffness:300}}><Link to={'/'}>Home</Link></motion.li>
                <motion.li className="footer-list" whileHover={{scale:1.3, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}} transition={{type:'spring', stiffness:300}}><Link to={"/about"}>About Us</Link></motion.li>
                <motion.li className="footer-list" whileHover={{scale:1.3, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}}transition={{type:'spring', stiffness:300}}><Link to={'/residential'}>Residential</Link></motion.li>
                <motion.li className="footer-list" whileHover={{scale:1.3, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}}transition={{type:'spring', stiffness:300}}><Link to={'/tech'}>Book a Tech</Link></motion.li>
                <motion.li className="footer-list" whileHover={{scale:1.3, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}}transition={{type:'spring', stiffness:300}}><Link to={'/contact'}>Contact Us</Link></motion.li>
                <motion.li whileHover={{scale:0.9, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}} transition={{type:'spring', stiffness:300}}className="icon"><Link to={'https://www.facebook.com/hashim.adeola?mibextid=rS40aB7S9Ucbxw6v'}><FontAwesomeIcon icon={faFacebook} fontSize={30} /></Link></motion.li>
                <motion.li whileHover={{scale:0.9, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}}transition={{type:'spring', stiffness:300}} ><Link to= {'https://www.facebook.com/hashim.adeola?mibextid=rS40aB7S9Ucbxw6v'}> <FontAwesomeIcon icon={faYoutube} fontSize={30} /></Link></motion.li>
                <motion.li whileHover={{scale:0.9, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}}transition={{type:'spring', stiffness:300}}><Link to={'https://www.facebook.com/hashim.adeola?mibextid=rS40aB7S9Ucbxw6v'}> <FontAwesomeIcon icon={faTwitter}fontSize={30} /></Link></motion.li>
                <motion.li whileHover={{scale:0.9, textShadow:"0px 0px 8px rgba(255, 255, 255, 0.7)"}}transition={{type:'spring', stiffness:300}}><Link to={'https://www.facebook.com/hashim.adeola?mibextid=rS40aB7S9Ucbxw6v'} ><FontAwesomeIcon icon={faWhatsapp} fontSize={30} /></Link></motion.li>
                
                
            </ul>

        </div>
        <div className="footer-2">
            <p> Apex Digital Solution is not affiliated with any sister organisation -  </p>
        </div>
        <div className="pie">
            <p>We are here to help you with all your Computer Laptops, Network and Telecommunication repair</p>
            <p>Same day, Onsite or remote, pay nothing if we do not fix</p>
            
        </div>
        <div className='last'>
        <hr />
        <Link to= {'#'}><FontAwesomeIcon icon={faArrowAltCircleUp} fontSize={50}  className="arrow"  /></Link>
            <p> &copy; COPYRIGHT 2025, ALL RIGHTS RESERVERD! <br /> APEX DIGITAL SOLUTION</p>
            
    
        </div>
        
       
    
            </footer>
        </div>
     );
}
 
export default Footer;