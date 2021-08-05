import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact : React.FC = () => {
    const FORMSUBMIT_EMAILCODE = process.env.FORMSUBMIT_EMAILCODE;
    const DOMAIN = process.env.DOMAIN;
    
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="px-4">

                    <p>If you like what you've seen on my site, I'd love for you to get in touch via my contact form or social media!</p>
                </div>
                <div className="px-4">
                    <ContactForm action={`https://formsubmit.co/${FORMSUBMIT_EMAILCODE}`} method="POST" template="BOX"/>
                </div>
            </div>
        </div>
    )
}

export default Contact;