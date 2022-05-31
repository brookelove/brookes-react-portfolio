import React from "react";
import "../styles/Contact.css"


export default function Contact () {
    return (
        <div className="container">
            <div className="formContainer">
                <h1 className="formTitle">Reach out</h1>
                <div class="underline"></div>
                <div class="iconContainer">
                    {/* icon */}
                </div>
                <div>
                    <form action="#" method="post" id="contactPage">
                        <div className="nameEmailContainer">
                            <input type="text" placeholder="Your Name Here" name="name" id="nameInput" required></input>
                            <input type="text" placeholder="Your Email Here" name="name" id="emailInput" required></input>
                        </div>
                        <select placeholder="Subject line" name="subject" id="subject_input" required>
                            <option disabled hidden selected>Subject line</option>
                            <option>Let's talk about a project</option>
                            <option>Can I ask a question</option>
                            <option>I'd like to discuss something</option>
                        </select>
                        <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
                        <input type="submit" value="Send Message" id="form_button" />
                    </form>
                </div>
            </div>
        </div>
    )
}