import React, {useRef} from "react";
import "../styles/Contact.css"
import emailjs from "emailjs-com";
import { RiCellphoneFill } from "react-icons/ri";

export const ContactUs = () => {
    const contactForm = useRef(null);

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_yksvsn7', 'template_4zmvws8', contactForm.current, 'Kdn3GR-8xYIyGih5i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}

    return (
        <div id="contactMe" className="contactContainer">
            <div className="formContainer">
                <h1 className="formTitle">Reach out</h1>
                <div class="underline"></div>
                <div class="iconContainer">
                    <RiCellphoneFill size="2em"/>
                </div>
                <div>
                    <form ref={contactForm} action="#" method="post" id="contactPage" onSubmit={sendEmail}>
                        <div className="nameEmailContainer">
                            <input name="name" type="text" placeholder="Your Name Here" id="nameInput" required></input>
                            <input name="email" type="text" placeholder="Your Email Here"id="emailInput" required></input>
                        </div>
                        <select name="subject" placeholder="Subject line" id="subject_input" required>
                            <option disabled hidden selected>Subject line</option>
                            <option>Let's talk about a project</option>
                            <option>Can I ask a question</option>
                            <option>I'd like to discuss something</option>
                        </select>
                        <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
                        <div className="btnContainer">
                            <input type="submit" value="Send Message" id="form_button" className="submitBTN"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs