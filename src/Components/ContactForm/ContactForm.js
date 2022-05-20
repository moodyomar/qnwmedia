import './ContactForm.css'


const ContactForm = ({language}) => { 
const {form,textarea,btn} = language.contact
return(

<form className="contact-form">
    {form.map((item,i) => (
        <>
        <label>{item.name}</label>
        <input type={item.type} className="full-name" 
        placeholder={item.placeholder} />
        </>
    ))}
    <label>{textarea.name}</label>
    <textarea name="" id="" cols="30" rows="6" 
    placeholder={textarea.placeholder}></textarea>
    <input type="submit" value={btn.name} className='cwhite' />
</form>


)
}

export default ContactForm