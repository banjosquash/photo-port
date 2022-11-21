import React, { useState } from 'react';


function ContactForm() {

    const [formState, setFormState ] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;

    function handleChange(event){
        setFormState({...formState, [event.target.name]: event.target.value })
    }
 
    function handleSubmit(event){
        event.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;