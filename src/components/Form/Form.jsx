import './Form.css';
import { useState } from 'react';
import emailjs from 'emailjs';
import 'react-toastify'
import { ToastContainer, toast } from 'react-toastify';
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    venue: '',
    guestCount: '',
    interestedIn: [],
    reason: '',
    story: '',
    discovery: '',
  });

  const options = [
    'Wedding Coverage',
    'Pre Wedding Shoot',
    'Engagement',
    'Anniversary',
    'Birthday',
    'Maternity / BabyShower',
    'Other',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(option)
        ? prev.interestedIn.filter((item) => item !== option)
        : [...prev.interestedIn, option],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_goesser', // Replace with your EmailJS service ID
        'template_e567nrs', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventDate: formData.eventDate,
          venue: formData.venue,
          guestCount: formData.guestCount,
          interestedIn: formData.interestedIn.join(', '),
          reason: formData.reason,
          story: formData.story,
          discovery: formData.discovery,
        },
        '7iwjEptVs0k1BFMG8' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          toast.success('Form submitted successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            eventDate: '',
            venue: '',
            guestCount: '',
            interestedIn: [],
            reason: '',
            story: '',
            discovery: '',
          });
        },
        (error) => {
          toast.error('Failed to send form. Please try again later.');
        }
      );
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <ToastContainer/>
      <div className="input-container">
        <label htmlFor="name">YOUR NAME / NAME OF BRIDE & GROOM *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="input-container">
        <label htmlFor="email">EMAIL *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="input-container">
        <label htmlFor="phone">PHONE *</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="input-container">
        <label htmlFor="eventDate">DATE OF YOUR EVENT *</label>
        <input
          type="text"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="input-container">
        <label htmlFor="venue">VENUE DETAILS & EVENT FLOW *</label>
        <input
          type="text"
          name="venue"
          value={formData.venue}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="input-container">
        <label htmlFor="guestCount">ESTIMATED GUEST COUNT *</label>
        <input
          type="text"
          name="guestCount"
          value={formData.guestCount}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="checkbox-container">
        <p className="checkbox-title">I'M INTERESTED IN.. *</p>
        {options.map((option, index) => (
          <label key={index} className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={formData.interestedIn.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            <span className="custom-checkbox"></span>
            {option}
          </label>
        ))}
      </div>

      <div className="input-container">
        <label htmlFor="reason">
          WHY WOULD YOU LIKE US TO BE A PART OF YOUR CELEBRATION *
        </label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

      <div className="input-container">
        <label htmlFor="story">TELL US ABOUT THE TWO OF YOU? TELL US YOUR STORY *</label>
        <textarea
          name="story"
          value={formData.story}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

      <div className="input-container">
        <label htmlFor="discovery">HOW DID YOU DISCOVER OUR WORK? *</label>
        <textarea
          name="discovery"
          value={formData.discovery}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

      <button className="form-submit-btn" type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
