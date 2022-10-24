import {FC, memo, useState,} from 'react';
import { send } from 'emailjs-com';

const ContactForm: FC = memo(() => {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  });

  
  const handleSendMessage = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setToSend({
      name: '',
      email: '',
      message: '',
    });
    {/* --- METHOD TO SEND THE MAIL --- */}
    send(
      'service_qxr5xm4h',
      'template_6dz9xk9f',
      toSend,
      'zVy8w4Oow_OScGxzFo'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        
        alert("Thank you for reaching out. I will get back to you as soon as possible.")
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const onChange = (e: { target: { name: any; value: any; }; }) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
