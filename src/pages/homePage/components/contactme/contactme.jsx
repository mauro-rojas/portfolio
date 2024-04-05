import styles from "../../styles/contactme.module.scss"

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

import sendEmail from "./sendEmail.js";
import validateBlank from "./validateBlank.js";
import validateEmail from "./validateEmail.js";

import background from "../../assets/contactmeBackground.png"

import EmailSuccesModal from "./components/emailSuccesModal.jsx";
import ErrorMessage from "./components/errorMessage.jsx";



function Contactme({setContactmeRef}){


    const contactmeRef = useRef(null);

    const [buttonSeen, setButtonSeen] = useState(false);
    const buttonRef = useRef(null);
    const buttonIsInView = useInView(buttonRef, { once: true });    
    
    const delayContactme = 0.3;   
    
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [messageError, setMessageError] = useState();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [succesEmail, setSuccesEmail] = useState(false);

    useEffect(() => {
        
        if ((!buttonSeen) && (buttonIsInView)) {
            //console.log("se vio el boton");
            setButtonSeen(true);
                                
        }
        
    }, [buttonIsInView]);

    useEffect(() => {        
        setContactmeRef(contactmeRef);
    }, []);

    // useEffect(()=>{
    //     console.log(nameError);
    // },[nameError])

    const activeAnimation = {
        marginBottom: "18px",
        boxShadow:"",
        scale: [1, 1.1, 1],
        //rotate: [15, 0],
    };

    
    function onSubmit (e) {
        e.preventDefault();       
        validateBlank(name, "nombre" , setNameError);
        validateEmail(email, setEmailError);
        validateBlank(message, "mensaje" , setMessageError);
        if( nameError === null && emailError === null && messageError === null){
            console.log("no hay error");
            sendEmail(name, email, message, setSuccesEmail);
            setName("");
            setEmail("");
            setMessage(""); 
            setNameError(undefined)
            setEmailError(undefined)
            setMessageError(undefined)           
        }
        else{
            //console.log("hay error");
            return false;
        }     
    }


    return(
        <div className={styles.contactMeContainer} ref={contactmeRef}>            
            
            <img className={styles.contactmeBackground} src={background} loading="lazy" alt="contactmeBackground" />            
                
            <EmailSuccesModal
                succesEmail={succesEmail}
                setSuccesEmail={setSuccesEmail}
            />
            
            <div className={styles.appreciationText}>
                <h1>Cualquier feedback o recomendación es más que bienvenida</h1>
                <h2>y muchas gracias por mirar mi portfolio ❤️{/*&lt;3 */}</h2>
            </div>
            
            <div className={styles.formContainer}>
                <h3>Contacto</h3>
                <form onSubmit={onSubmit}>    
                    <motion.div className={styles.fieldLabelGroup}
                        initial={{ marginBottom: 0, boxShadow: "none" }}
                        animate={buttonSeen ? activeAnimation  : {}}                        
                        transition={{ duration: 0.3, delay: delayContactme, type: "spring",  stiffness: 900, damping: 33}}
                    >   
                        <motion.input 
                            className={`${nameError ? styles.inputError : ""}`}
                            type="text"
                            id= "nombre"
                            placeholder="" 
                            autoComplete="off"
                            name= "nombre"
                            initial = {{ 
                                borderBottom: "none", 
                                backgroundColor: "#0000008e",
                                pointerEvents: "none" 
                            }}
                            animate= {
                                buttonSeen ? { 
                                    borderBottom: "",
                                    backgroundColor: "",
                                    pointerEvents: ""                               
                                }  : 
                                {}
                            }
                            transition={{ duration: 0.3, delay: delayContactme  }}
                            value={name}
                            onChange={(e)=>{
                                setName(e.target.value);
                                validateBlank(e.target.value, "name" , setNameError)
                                
                            }}
                        />   
                        <motion.label 
                            htmlFor= "nombre"
                            initial={{ 
                                color: "#27272700",
                                textShadow: "none",
                                pointerEvents: "none"
                            }}
                            animate={buttonSeen ? { 
                                color: "",  
                                textShadow:"",
                                pointerEvents: ""                               
                            }  : {}}                        
                            transition={{ duration: 0.3, delay: delayContactme}}
                        > 
                            nombre         
                        </motion.label>  
                    </motion.div>
                    <ErrorMessage
                        specificError={nameError}
                    />                    
                    <motion.div className={styles.fieldLabelGroup}
                        initial={{ marginBottom: 0, boxShadow: "none" }}
                        animate={buttonSeen ? activeAnimation  : {}}                        
                        transition={{ duration: 0.3, delay: delayContactme, type: "spring",  stiffness: 900, damping: 33}}
                    >   
                        <motion.input 
                            className={`${emailError ? styles.inputError : ""}`}
                            id= "email"
                            placeholder="" 
                            autoComplete="off"
                            name= "email"
                            initial = {{ 
                                borderBottom: "none", 
                                borderTop: "none",
                                backgroundColor:"#0000008e",
                                pointerEvents: "none" 
                            }}
                            animate= {
                                buttonSeen ? { 
                                    borderBottom: "",
                                    borderTop: "",
                                    backgroundColor: "",
                                    pointerEvents: ""                               
                                }  : 
                                {}
                            }
                            transition={{ duration: 0.3, delay: delayContactme  }}
                            value={email}
                            onChange={(e)=> {setEmail(e.target.value); validateEmail(e.target.value, setEmailError)}}
                        /> 
                        <motion.label 
                            htmlFor= "email"
                            initial={{ 
                                color: "#27272700",
                                textShadow: "none",
                                pointerEvents: "none"
                            }}
                            animate={buttonSeen ? { 
                                color: "",  
                                textShadow:"",
                                pointerEvents: ""                               
                            }  : {}}                        
                            transition={{ duration: 0.3, delay: delayContactme}}
                        > 
                            email         
                        </motion.label>
                    </motion.div>                    
                    <ErrorMessage
                        specificError={emailError}
                    />                    
                    <motion.div className={styles.fieldLabelGroup}
                        initial={{ 
                            marginBottom: 0, 
                            boxShadow: "none"                           
                        }}
                        animate={buttonSeen ? activeAnimation  : {}}                        
                        transition={{ duration: 0.3, delay: delayContactme, type: "spring",  stiffness: 900, damping: 33}}
                    >   
                        <motion.textarea 
                            className={`${messageError ? styles.inputError : ""}`}
                            id="message" 
                            placeholder="" 
                            name="message" 
                            initial={{ 
                                borderBottom: "none",
                                borderTop: "none",
                                backgroundColor:"#0000008e",
                                pointerEvents: "none"
                            }}
                            animate={buttonSeen ? { 
                                borderBottom: "",
                                borderTop: "",
                                backgroundColor:"",
                                pointerEvents: "" 
                            }  : {}}                        
                            transition={{ duration: 0.3, delay: delayContactme  }}
                            value={message}
                            onChange={(e)=>{setMessage(e.target.value); validateBlank(e.target.value, "mensaje" , setMessageError)}}
                        />
                        <motion.label 
                            htmlFor= "message"
                            initial={{ 
                                color: "#27272700",
                                textShadow: "none",
                                pointerEvents: "none"
                            }}
                            animate={buttonSeen ? { 
                                color: "",  
                                textShadow:"",
                                pointerEvents: ""                               
                            }  : {}}                        
                            transition={{ duration: 0.3, delay: delayContactme}}
                        > 
                            Tu mensaje         
                        </motion.label>            
                    </motion.div>
                    <ErrorMessage
                        specificError={messageError}
                    />
                    <motion.input className={styles.submitButton} type="submit" value="Enviar"                         
                        ref={buttonRef} 
                        initial={{ 
                            marginTop: 0,
                            borderTop: "none",
                            boxShadow: "none",
                            color: "#27272700",
                            //fontSize: "",
                            textShadow: "none",
                            backgroundColor: "#0000008e",
                            pointerEvents: "none"
                        }}
                        animate={buttonSeen ? { 
                            marginTop: "10px", 
                            scale: [1, 1.2, 1],
                            borderTop: "",
                            boxShadow: "",
                            color: "",
                            //fontSize: ["1.5vw", "1.6vw" , "1.5vw"],
                            textShadow: "",
                            backgroundColor:"",
                            pointerEvents: "" 
                        }  : {}}                        
                        transition={{ duration: 0.2, delay: delayContactme  }}
                    />
                </form>
            </div>        
        </div>
    )
}

export default Contactme;