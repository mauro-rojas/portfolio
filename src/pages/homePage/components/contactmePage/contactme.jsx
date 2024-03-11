import styles from "../../styles/contactme.module.scss"
import background from "../../assets/contactmeBackground.png"
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

function Contactme(){

    const [buttonSeen, setButtonSeen] = useState(false);
    const buttonRef = useRef(null);
    const buttonIsInView = useInView(buttonRef, { once: true });


    useEffect(() => {
        //console.log(buttonSeen);
        
        if ((!buttonSeen) && (buttonIsInView)) {
            console.log("se vio el boton");
            setButtonSeen(true);
                                
        }
        
    }, [buttonIsInView]);

    const AnimatedfieldLabelGroup = ({children}) => {
        return (        
            <motion.div className={styles.fieldLabelGroup}
                            initial={{ 
                                marginBottom: 0, 
                                boxShadow: "none"                           
                            }}
                            animate={buttonSeen ? activeAnimation  : {}}                        
                            transition={{ duration: 0.3,delay: 3, type: "spring",  stiffness: 900, damping: 33}}
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
                transition={{ duration: 0.3, delay: 3}}
            > 
                {text}         
            </motion.label>
        );
    }

    const AnimatedInput = ({type, id, name, initial, animate }) => {
        return ( 
            <motion.input 
                type= {type} 
                id= {id} 
                placeholder="" 
                name= {name}                                 
                initial={initial}
                animate={buttonSeen ? animate  : {}}                        
                transition={{ duration: 0.3, delay: 3  }}
            />
        );
    }

    const activeAnimation = {
        marginBottom: "18px",
        boxShadow:"",
        scale: [1, 1.1, 1],
        //rotate: [15, 0],
    };

    


    return(
        <div className={styles.contactMeContainer}>            
            
            <img className={styles.contactmeBackground} src={background} alt="contactmeBackground" />
            
            <div className={styles.appreciationText}>
                <h1>Cualquier feedback o recomendación es más que bienvenida</h1>
                <h2>y muchas gracias por mirar mi portfolio ❤️{/*&lt;3 */}</h2>
            </div>
            
            <div className={styles.formContainer}>
                <h3>Contacto</h3>
                {/* <form onSubmit={onSubmit}> */}
                <form>
                  
                    {/* <motion.div className={styles.fieldLabelGroup}
                        initial={{ 
                            marginBottom: 0,
                            
                        }}
                        animate={buttonSeen ? activeAnimation  : {}}                        
                        transition={{ duration: 0.4,delay: 1,   }}
                    > */}
                        {/* <motion.input type="text" id="nombre" placeholder="" name="nombre" 
                            initial={{ 
                                borderBottom: "none",
                            }}
                            animate={buttonSeen ? { 
                                borderBottom: ""                               
                            }  : {}}                        
                            transition={{ duration: 0.4, delay: 1  }}
                        /> */}

                        {/* <motion.label htmlFor="nombre"
                            initial={{ 
                                color: "#3B3B3B",
                                textShadow: "none"
                            }}
                            animate={buttonSeen ? { 
                                color: "",  
                                textShadow:""                               
                            }  : {}}                        
                            transition={{ duration: 0.4, delay: 1  }}
                        >nombre </motion.label> */}
                    {/* </motion.div> */}
                    {/* <motion.div className={styles.fieldLabelGroup}
                        initial={{ 
                            marginBottom: 0
                        }}
                        animate={buttonSeen ? activeAnimation  : {}}                        
                        transition={{ duration: 0.4,delay: 1  }}
                    > */}
                        {/* <motion.input type="email" id="email" placeholder="" name="email" 
                            initial={{ 
                                borderBottom: "none",
                                borderTop: "none"

                            }}
                            animate={buttonSeen ? { 
                                borderBottom: "",
                                borderTop: ""
                                   
                            }  : {}}                        
                            transition={{ duration: 0.4, delay: 1  }}
                        /> */}
                        
                        {/* <label htmlFor="email">email </label> */}
                        
                    {/* </motion.div> */}
                    {/* <motion.div className={styles.fieldLabelGroup}
                        initial={{ 
                            marginBottom: 0
                        }}
                        animate={buttonSeen ? activeAnimation  : {}}                        
                        transition={{ duration: 0.4,delay: 1  }}
                    > */}
                        {/* <label htmlFor="message"> Tu mensaje </label> */}
                    {/* </motion.div> */}
                
                    <AnimatedfieldLabelGroup
                        children= {
                            <>                        
                                <AnimatedInput
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
                    />
                    <AnimatedfieldLabelGroup
                        children={
                            <>
                                <AnimatedInput
                                    type="email"
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
                                />
                                <AnimatedLabel
                                    htmlFor= "email"
                                    text= "email"
                                />
                            </>
                        }
                    />
                    <AnimatedfieldLabelGroup
                        children={
                            <>
                                <motion.textarea id="message" placeholder="" name="message" 
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
                                    transition={{ duration: 0.3, delay: 3  }}
                                />
                                <AnimatedLabel
                                    htmlFor= "message"
                                    text= "Tu mensaje"
                                />
                            </>                            
                        }                        
                    />
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
                        transition={{ duration: 0.2, delay: 3  }}
                    />
                </form>
            </div>            
        </div>
    )
}

export default Contactme;