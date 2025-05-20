import { motion} from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Contact = () => {
    const title = 'Contact Us';
    const navigate = useNavigate();
    const [Name, setName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Email, setEmail] =  useState('');
    const [Problem, setProblem] = useState('');

    


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/posts", {
            Name,
            PhoneNumber,
            Email,
            Problem
        })
        .then((response)=> {
         console.log(response.data); 
         navigate.push('/') 

        })
        .catch ((err) => {
            console.log(err)
            }
            )
    };


    return ( 
            <div className="create">
                <h2 className="contact"> {title} </h2>

                <div className="form">
                    <form   onSubmit={handleSubmit}>
                      <label htmlFor="name">Name:</label>                        
                      <input name='name' type="text" required  value = {Name} onChange={(e) => setName(e.target.value)}  />
                      <label htmlFor="number">Phone Number:</label>
                      <input type="number" name="number" required value= {PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                      <label htmlFor="email">E-mail: </label>
                      <input type="email" name="email" required value={Email} onChange={(e) => setEmail(e.target.value)}  />
                      <label htmlFor='problem'>Problems or Issues</label>
                      <textarea cols={30} rows={20} required  value ={Problem} onChange={(e)=> setProblem(e.target.value)}>

                      </textarea>
                      <motion.button className="submit"  whileHover={{scale: 1.1, textShadow:'0px 0px 9px blue', backgroundColor:'rgba(22, 22, 158, 0.7)', color:'#f2f2f2'}}
                      > Submit Form </motion.button>
                      
                    </form>
                </div>

            


            </div>
        
     );
}
 
export default Contact;