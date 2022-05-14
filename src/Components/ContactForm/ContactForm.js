import './ContactForm.css'


const ContactForm = () => { 

return(

<form className="contact-form">
    <label>שם מלא</label>
    <input type="text" className="full-name" 
    placeholder='אבי כהן' />
    <label>אימייל</label>
    <input type="email" className="full-name" 
    placeholder='avi@gmail.com' />
    <label>תחום העסק</label>
    <input type="text" className="full-name" 
    placeholder='חנות בגדים' />
    <label>טלפון</label>
    <input type="number" className="full-name" 
    placeholder='0521234567' />
    <label>נושא</label>
    <textarea name="" id="" cols="30" rows="6" 
    placeholder='אני מעוניין לעשות חנות אונליין ל....'></textarea>
    <input type="submit" value="שלח" className='cwhite' />
</form>


)
}

export default ContactForm