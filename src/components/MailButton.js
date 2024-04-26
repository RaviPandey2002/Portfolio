import { Button } from 'react-bootstrap';
import { useState } from "react";

const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

const MailButton = ({firstName,lastName,subject,phone,message})=>{
    const [body, setBody] = useState("");
   
    const handleMail=()=>{
        console.log("hi", firstName)
        setBody(`
        Hey,
        ${message}

        Name: ${firstName} ${lastName}
        phone: ${phone}
`)
      }
    return (
      <Mailto email="chauhanishita5356@gmail.com" body={body} subject={subject} obfuscate={true}>
        <Button onClick={handleMail}>Send</Button>
      </Mailto>
    );
  
};

export default MailButton