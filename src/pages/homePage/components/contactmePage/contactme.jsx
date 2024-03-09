import styles from "../../styles/contactme.module.scss"
import background from "../../assets/contactmeBackground.png"
import { motion } from 'framer-motion';


function Contactme(){
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
                    <div className={styles.inputLabelGroup}>
                        <input type="text" id="nombre" placeholder="" name="nombre" />
                        <label htmlFor="nombre">nombre </label>
                    </div>
                    <div className={styles.inputLabelGroup}>
                        <input type="email" id="email" placeholder="" name="email" />
                        <label htmlFor="email">email </label>
                    </div>
                    <div className={styles.inputLabelGroup}>
                        <textarea id="message" placeholder="" name="message" />
                        <label htmlFor="message">Tu mensaje </label>
                    </div>
                    <input className={styles.submitButton} type="submit" value="Enviar" />
                </form>
            </div>            
        </div>
    )
}

export default Contactme;