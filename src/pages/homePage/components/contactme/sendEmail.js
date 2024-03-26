

function sendEmail(name, email, message, setSuccesEmail){
    const bodyMessage = `Email: ${email} <br> Message: ${message}`
    Email.send({
        SecureToken : "26a392e1-dd97-4d02-9042-5b1f858b4c29",
        To : 'maurorojas.web@gmail.com',
        From : "maurorojas.web@gmail.com",
        Subject : name,
        Body : bodyMessage
    }).then(
      message => {
        if(message === "OK"){
            setSuccesEmail(true);
        }
      }
    );
}

export default sendEmail;