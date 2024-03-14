import styles from "../../styles/contactme.module.scss"
import background from "../../assets/contactmeBackground.png"
import { motion, useInView } from 'framer-motion';
import { forwardRef, useEffect, useRef, useState } from "react";
import validateForm from "./validateForm";

function Contactme({setContactmeRef}){

    const contactmeRef = useRef(null);
    const [buttonSeen, setButtonSeen] = useState(false);
    const buttonRef = useRef(null);
    const buttonIsInView = useInView(buttonRef, { once: true });
    
    //const [delayContactme, setDelayContactme] = useState(3);
    const delayContactme = 3;
    // const emailInputRef = useRef(null);
    // const nameInputRef = useRef(null);
    // const messageInputRef = useRef(null);
    
    const [errors, setErrors] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        //console.log(buttonSeen);
        
        if ((!buttonSeen) && (buttonIsInView)) {
            console.log("se vio el boton");
            setButtonSeen(true);
                                
        }
        
    }, [buttonIsInView]);

    useEffect(() => {        
        setContactmeRef(contactmeRef);
    }, []);

    

    const AnimatedfieldLabelGroup = ({children}) => {
        return (        
            <motion.div className={styles.fieldLabelGroup}
                            initial={{ 
                                marginBottom: 0, 
                                boxShadow: "none"                           
                            }}
                            animate={buttonSeen ? activeAnimation  : {}}                        
                            transition={{ duration: 0.3, delay: delayContactme, type: "spring",  stiffness: 900, damping: 33}}
            >   
            {children}         
            </motion.div>
        );
    };

    const AnimatedLabel = ({htmlFor, text}) => {
        return (        
            <motion.label 
                htmlFor= {htmlFor}
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
                {text}         
            </motion.label>
        );
    }

    const AnimatedInput = forwardRef(({type, id, name, initial, animate }, ref) => {
        return ( 
            <motion.input 
                ref = {ref}
                type= {type} 
                id= {id} 
                placeholder="" 
                name= {name} 
                autoComplete="off"                             
                initial={initial}
                animate={buttonSeen ? animate  : {}}                        
                transition={{ duration: 0.3, delay: delayContactme  }}
                
                
            />
        );
    });

    const activeAnimation = {
        marginBottom: "18px",
        boxShadow:"",
        scale: [1, 1.1, 1],
        //rotate: [15, 0],
    };

    
    function onSubmit (e) {
        e.preventDefault();       
        //setDelayContactme(0);
        //localStorage.clear();
        
        console.log("mando form");
        
        const errors = validateForm(name, email, message);
        setErrors(errors);
        
    }

    useEffect(() => {        
        if(!errors){
            
        
            console.log("sin errores");
            setName("");
            setEmail("");
            setMessage("");
            // si no hay errores mando mail  saco clase error de lso input
        }
        else{
            console.log("hay error");
        }
    }, [errors]);

    return(
        <div className={styles.contactMeContainer} ref={contactmeRef}>            
            
            <img className={styles.contactmeBackground} src={background} alt="contactmeBackground" />
            
            <div className={styles.appreciationText}>
                <h1>Cualquier feedback o recomendación es más que bienvenida</h1>
                <h2>y muchas gracias por mirar mi portfolio ❤️{/*&lt;3 */}</h2>
            </div>
            
            <div className={styles.formContainer}>
                <h3>Contacto</h3>
                <form onSubmit={onSubmit}>                
                    {/* <AnimatedfieldLabelGroup
                        children= {
                            <>                        
                                <AnimatedInput
                                    ref= {nameInputRef}
                                    type="text"
                                    id= "nombre"
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
                                />
                                <AnimatedLabel
                                    htmlFor= "nombre"
                                    text= "nombre"
                                />
                            </>
                        }
                    /> */}
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
                    {/* <AnimatedfieldLabelGroup
                        children={
                            <>
                                <AnimatedInput
                                    ref= {emailInputRef} 
                                    id= "email"
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
                                    value={email}
                                    
                                />
                                <AnimatedLabel
                                    htmlFor= "email"
                                    text= "email"
                                />
                            </>
                        }
                    /> */}
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
                    {/* <AnimatedfieldLabelGroup
                        children={
                            <>
                                <motion.textarea id="message" placeholder="" name="message" 
                                    ref= {messageInputRef}
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
                                />
                                <AnimatedLabel
                                    htmlFor= "message"
                                    text= "Tu mensaje"
                                />
                            </>                            
                        }                        
                    /> */}
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