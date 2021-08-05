import axios from 'axios';
import React from 'react';

interface Props {
    action: string;
    method: string;
    template: string;
}

const ContactForm: React.FC<Props> = ({action, method = "POST", template = "BOX"}) => {
    const [formData, setFormData] = React.useState({_captcha: false, _honey: 'hidden'});
    const [loading, setLoading] = React.useState(false);

    const handleChange = React.useCallback((e) => {
        console.log(e.target.name, e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value   
        }); 
    }, [formData]);

    const handleSubmit = React.useCallback((e) => {
        e.preventDefault();

        setLoading(true);
        axios.defaults.headers.post["content-type"] = "application/json";
        axios.post(e.target.action, formData)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false);
        })

    }, [formData])

    return (
        <form action={action} method={method} onSubmit={handleSubmit}>
            <input type="hidden" name="_template" value={template}/> 
            <input type="text" name="_honey" className="hidden"/>
            <input type="hidden" name="_captcha" value="false"/>

            <div className="form-control relative mt-4">
                <label className="label font-semibold absolute top-0 left-3 bg-white pb-0">
                    Name
                </label> 
                <input type="text" name="name" className="input input-bordered mt-5 pt-1" onChange={handleChange} required/>
            </div>
            <div className="form-control relative mt-4">
                <label className="label font-semibold absolute top-0 left-3 bg-white pb-0">
                   Email Address
                </label> 
                <input type="email" name="email" className="input input-bordered mt-5 pt-1" onChange={handleChange} required/>
            </div>
            <div className="form-control relative mt-4">
                <label className="label font-semibold absolute top-0 left-3 bg-white pb-0">
                    Subject
                </label> 
                <input type="text" name="subject" className="input input-bordered mt-5 pt-1" onChange={handleChange} required/>
            </div>
            <div className="form-control relative mt-4">
                <label className="label font-semibold absolute top-0 left-3 bg-white pb-0">
                    Say Hello
                </label> 
                <textarea name="content" className="textarea h-24 textarea-bordered mt-5 pt-3" onChange={handleChange} required></textarea>
            </div>
            <button className={loading ? 'mt-5 btn btn-primary btn-lg loading':'mt-5 btn btn-primary btn-lg'}>{loading ? "Submitting" : "Send Message"}</button>
        </form>
    )
}

export default ContactForm;