import { createTransport } from 'nodemailer'

const transport = createTransport({
    host:"imap.gmail.com",
    port:465,
    secure: true,
    auth:{
        user:"abidala.iel@gmail.com",
        pass:"bzyamzxjtmrhavkf"
             
    }
})


transport.sendMail({
    from:"manual do dev <abidala.iel@gmail.com>",
    to:"dani.ajala@yahoo.com , sergio.ajala@yahoo.com,ajala.karina@gmail.com",
    subject:"teste dev",
    html:"ola dev"
    
})

.then(()=> console.log("email enviado"))
.catch((erro)=> console.log(erro))