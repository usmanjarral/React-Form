import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    gender: '',
    subject: '',
    resume: null,
    url: '',
    about: ''
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleReset = () => {
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      gender: '',
      subject: '',
      resume: null,
      url: '',
      about: ''
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>REACT FORM</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter Your First Name"
          value={formData.firstname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter Your Last Name"
          value={formData.lastname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="contact">Phone No.</label>
        <input
          type="number"
          name="contact"
          placeholder="Enter Your Phone No."
          value={formData.contact}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        /> Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        /> Female
        <input
          type="radio"
          name="gender"
          value="other"
          checked={formData.gender === 'other'}
          onChange={handleChange}
        /> Other
        <br />
        <label htmlFor="subject" className='subject'>Subject</label>
        <select
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
        >

          <option value="math">Math</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="islamiat">Islamiat</option>
          <option value="computer">Computer</option>
        </select>
        <br />
        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="image">Your Image</label>
        <input
          type="text"
          name="url"
          placeholder="Your Image URL"
          value={formData.url}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="about">About</label>
        <br />
        <textarea
          name="about"
          id="about"
          placeholder="Enter Description"
          cols="30"
          rows="10"
          value={formData.about}
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="button" onClick={handleReset}>Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
