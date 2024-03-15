import styles from "../../styles/contactme.module.scss"
import background from "../../assets/contactmeBackground.png"
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import validateForm from "./validateForm";
import sendEmail from "./sendEmail";
import alienSticker from "../../assets/alienStickers/alienSticker22.png"
import alienSticker2 from "../../assets/alienStickers/alienSticker3.png"



function Contactme({setContactmeRef}){

    const contactmeRef = useRef(null);
    const [buttonSeen, setButtonSeen] = useState(false);
    const buttonRef = useRef(null);
    const buttonIsInView = useInView(buttonRef, { once: true });
    
    
    const delayContactme = 3;
    
    
    const [errors, setErrors] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [succesEmail, setSuccesEmail] = useState(false);

    useEffect(() => {
        
        if ((!buttonSeen) && (buttonIsInView)) {
            console.log("se vio el boton");
            setButtonSeen(true);
                                
        }
        
    }, [buttonIsInView]);

    useEffect(() => {        
        setContactmeRef(contactmeRef);
    }, []);

    

    const activeAnimation = {
        marginBottom: "18px",
        boxShadow:"",
        scale: [1, 1.1, 1],
        //rotate: [15, 0],
    };

    
    function onSubmit (e) {
        e.preventDefault();       
        console.log("mando form");        
        const errors = validateForm(name, email, message);
        setErrors(errors); 
        if(!errors){
            console.log(name, email, message);
            sendEmail(name, email, message, setSuccesEmail);
            setName("");
            setEmail("");
            setMessage("");
            
        }
        else{
            console.log("hay error");
            return false;
        }     
    }


    return(
        <div className={styles.contactMeContainer} ref={contactmeRef}>            
            
            <img className={styles.contactmeBackground} src={background} alt="contactmeBackground" />
            <AnimatePresence>
                {
                    succesEmail &&
                    <motion.div className={styles.succesEmail}
                        initial={{                                   
                            backgroundColor: "#400161",
                            position: "fixed",
                            zIndex:"-2",
                            clipPath: "circle(0% at 100% 0%)"
                        
                        }}
                        animate={{
                            position: "fixed",
                            zIndex: "3",
                            clipPath: "circle(100% at 100% 50%)",
                                
                        }}
                        transition={{ duration: .4, delay: 0, type: "spring", stiffness:100, damping:15  }}
                        exit={{
                            clipPath: "circle(0% at 100% 0%)",
                            transition: { duration: 0.4, type: "spring", stiffness: 100, damping: 15 },
                        }}
                    >
                        <motion.button
                            whileHover={{ 
                                scale: 1.1,
                                border: "1px solid #ffffff",   
                                color: "#ffffff",
                                backgroundColor: "#400161",
                                boxShadow: "none",                         
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(prev) => setSuccesEmail(!prev) }
                        >
                            X
                        </motion.button>
                        <h1>Email enviado correctamente !!</h1> 
                        <img className={styles.alienSticker} src={alienSticker} alt="alienSticker" />    
                        <img className={styles.alienSticker2} src={alienSticker2} alt="alienSticker" />    
                    </motion.div>
                }    
            </AnimatePresence>
            <div className={styles.appreciationText}>
                <h1>Cualquier feedback o recomendación es más que bienvenida</h1>
                <h2>y muchas gracias por mirar mi portfolio ❤️{/*&lt;3 */}</h2>
            </div>
            
            <div className={styles.formContainer}>
                <h3>Contacto</h3>
                <form onSubmit={onSubmit}>                
                    
                    <motion.div className={styles.fieldLabelGroup}
                        initial={{ 
                            marginBottom: 0, 
                            boxShadow: "none"                           
                        }}
                        animate={buttonSeen ? activeAnimation  : {}}                        
                        transition={{ duration: 0.3, delay: delayContactme, type: "spring",  stiffness: 900, damping: 33}}
                    >   
                        <motion.input 
                            className={`${errors && errors.blankName ? styles.inputError : ""}`}
                            // ref= {nameInputRef}
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
                            onChange={(e)=>setName(e.target.value)}
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
                    {
                        errors && errors.blankName &&
                        <motion.div 
                            className={styles.errorMessage}
                            initial={{opacity:  0, y: -20}}
                            animate={{opacity:  1, y: 0}}
                            transition={{duration: 0.2, type: "spring",  stiffness: 200, damping: 11}}
                        >
                            {errors.blankName}
                        </motion.div>
                    }
                    
                    <motion.div className={styles.fieldLabelGroup}
                            initial={{ 
                                marginBottom: 0, 
                                boxShadow: "none"                           
                            }}
                            animate={buttonSeen ? activeAnimation  : {}}                        
                            transition={{ duration: 0.3, delay: delayContactme, type: "spring",  stiffness: 900, damping: 33}}
                    >   
                        <motion.input 
                            className={`${errors && (errors.blankEmail ||errors.invalidEmail) ? styles.inputError : ""}`}
                            // ref= {emailInputRef} 
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
                            onChange={(e)=>setEmail(e.target.value)}
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
                    {
                        errors && errors.blankEmail &&
                        <motion.div 
                            className={styles.errorMessage}
                            initial={{opacity:  0, y: -20}}
                            animate={{opacity:  1, y: 0}}
                            transition={{duration: 0.2, type: "spring",  stiffness: 200, damping: 11}}    
                        >
                            {errors.blankEmail}
                        </motion.div>
                    }
                    {
                        errors && errors.invalidEmail &&
                        <motion.div 
                            className={styles.errorMessage}
                            initial={{opacity:  0, y: -20}}
                            animate={{opacity:  1, y: 0}}
                            transition={{duration: 0.2, type: "spring",  stiffness: 200, damping: 11}}
                        >
                            {errors.invalidEmail}
                        </motion.div>
                    }
                    
                    <motion.div className={styles.fieldLabelGroup}
                        initial={{ 
                            marginBottom: 0, 
                            boxShadow: "none"                           
                        }}
                        animate={buttonSeen ? activeAnimation  : {}}                        
                        transition={{ duration: 0.3, delay: delayContactme, type: "spring",  stiffness: 900, damping: 33}}
                    >   
                        <motion.textarea 
                            className={`${errors && errors.blankMessage ? styles.inputError : ""}`}
                            id="message" 
                            placeholder="" 
                            name="message" 
                            // ref= {messageInputRef}
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
                            onChange={(e)=>setMessage(e.target.value)}
                        />
                        <motion.label 
                            htmlFor= "mensaje"
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
                    {
                        errors && errors.blankMessage &&
                        <motion.div 
                            className={styles.errorMessage}
                            initial={{opacity:  0, y: -20}}
                            animate={{opacity:  1, y: 0}}
                            transition={{duration: 0.2, type: "spring",  stiffness: 200, damping: 11}}
                        >
                            {errors.blankMessage}
                        </motion.div>
                    }
                    <motion.input className={styles.submitButton} type="submit" value="Enviar"                         
                        ref={buttonRef} 
                        initial={{ 
                            marginTop: 0,
                            borderTop: "none",
                            boxShadow: "none",
                            color: "#27272700",
                            fontSize: "",
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
                            fontSize: ["1.5vw", "1.6vw" , "1.5vw"],
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