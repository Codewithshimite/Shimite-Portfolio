import { useState } from 'react';
import "../styles/Form.scss";



export default function BasicForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent){
    e.preventDefault();
    e.stopPropagation();

    // ✅ Check for required fields before submitting
    if (!name || !email || !message) {
      setError("Please fill in all required fields correctly.");
      return; // Stop submission
    }

    setLoading(true);
    setError(''); // Clear previous errors

    fetch("https://formcarry.com/s/4gZbzy55JDL", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, subject, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("I received your submission, thank you!");
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setError('');
      } else if (response.code === 422) {
        setError(response.message || "Validation error occurred. You can send a whatsapp text from service page");
      } else {
        setError(response.message || "An unexpected error occurred.  You can send a whatsapp text from service page");
      }
    })
    .catch(error => {
      setError(error.message || "An error occurred while submitting. You can send a whatsapp text from service page");
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="formcarry-block">
        <label htmlFor="name">Your Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => { setName(e.target.value); setError(''); }} 
          id="name" 
          placeholder="Your first and last name" 
        />
      </div>

      <div className="formcarry-block">
        <label htmlFor="email">Your Email Address</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => { setEmail(e.target.value); setError(''); }} 
          id="email" 
          placeholder="Your Email" 
        />
      </div>

      <div className="formcarry-block">
        <label htmlFor="subject">Subject</label>
        <input 
          type="text" 
          value={subject} 
          onChange={(e) => { setSubject(e.target.value); setError(''); }} 
          id="subject" 
          placeholder="Your Subject"  
        />
      </div>

      <div className="formcarry-block">
        <label htmlFor="message">Your Message</label>
        <textarea 
          value={message} 
          onChange={(e) => { setMessage(e.target.value); setError(''); }} 
          id="message" 
          placeholder="Your message..." 
        ></textarea>
      </div>

      {/* ✅ Error message displayed here if any required field is missing */}
      {error && <div className='required-error'>{error}</div>}

      <div className="formcarry-block">  
        <button 
          type="submit" 
          className='send-message best' 
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"} 
          <i className="fa fa-envelope"></i>

        </button>
      </div>
    </form>
  );
}
