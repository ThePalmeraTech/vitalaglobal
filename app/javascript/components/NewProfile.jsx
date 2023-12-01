import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';


const NewProfile = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    gender: '',
    location: '',
    contact_information: '',
    pregnancy_status: '',
    medical_history: '',
    current_medications: '',
    abortion_history: false,
    previous_pregnancy_history: '',
    contraception_methods: '',
    family_planning_goals: '',
    abortion_family_planning_preferences: '',
    privacy_and_confidentiality_preferences: '',
    feedback_and_support: '',
    terms_acceptance: false,
    emergency_contact_information: '',
    survey_questionnaire: '',
    education_resource_preferences: '',
  });
  useEffect(() => {
    // Save the original background color
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#ffd26d';

    // Revert the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  const countryOptions = [
    { value: 'canada', label: 'Canada' },
    { value: 'usa', label: 'United States' },
    { value: 'venezuela', label: 'Venezuela' },
    // Add more countries as needed
  ];

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let newErrors = {};
    // Check if each required field is empty and add an error message if it is
    if (!profile.name) newErrors.name = 'Name is required';
    if (!profile.age) newErrors.age = 'Age is required';
    if (!profile.gender) newErrors.gender = 'Gender is required';
    if (!profile.location) newErrors.location = 'Location is required';

    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };



  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setProfile({ ...profile, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    fetch('/api/v1/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken,
      },
      body: JSON.stringify({ profile }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => navigate(`/profiles/${data.id}`))
    .catch((error) => console.error('Error:', error));
  };

  const handleSelectChange = (selectedOption) => {
    setProfile({ ...profile, location: selectedOption.value });
  };


  const [progress, setProgress] = useState(0); // Initialize progress to 0

  // Update progress when the user clicks "Next" in step 1
const handleNextStep = () => {
  if (validateFields()) {
    setProgress(50); // Update the progress as needed
    setStep(2);
  }
};

const handleBackToStep1 = () => {
  setStep(1);
  setProgress(0); // Reset progress if needed
};



// Render the progress bar
const renderProgressBar = () => (
  <div className="progress">
  <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
    {`${progress}%`}
  </div>
</div>

);

// Render the form fields for step 1
const renderStep1 = () => (
  <div>
    <form onSubmit={handleSubmit} className='mt-5'>
      <div className="row"> {/* Add a row container */}
        {/* Name */}
        <div className="col-md-5 mb-3"> {/* First column */}
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" placeholder='Full Name' value={profile.name} onChange={handleChange} required />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

        {/* Age */}
        <div className="col-md-5 mb-3"> {/* Second column */}
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" name="age" placeholder='Age' value={profile.age} onChange={handleChange} required />
          {errors.age && <div className="text-danger">{errors.age}</div>}
        </div>
      </div>

      <div className="row"> {/* Another row container for the next pair of fields */}
        {/* Gender */}
        <div className="col-md-5 mb-3"> {/* First column */}
          <label htmlFor="gender" className="form-label">Gender</label>
          <select className="form-control" id="gender" name="gender" value={profile.gender} onChange={handleChange} required >
            <option value="">Select Gender</option>
            <option value="female">Woman</option>
            <option value="trans-woman">Trans Woman</option>
            <option value="non-binary">Non-binary</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
          {errors.gender && <div className="text-danger">{errors.gender}</div>}
        </div>

        {/* Location */}
        <div className="col-md-5 mb-3"> {/* Second column */}
          <label htmlFor="location" className="form-label">Location</label>
          <Select
            options={countryOptions}
            onChange={handleSelectChange}
            className="basic-single"
            classNamePrefix="select"
            name="location"
            isClearable
            required />
          {errors.location && <div className="text-danger">{errors.location}</div>}
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-3 col-5 p-1">
        <label htmlFor="contact_information" className="form-label">Contact Information</label>
        <input type="text" className="form-control" id="contact_information" name="contact_information" placeholder='Introduce a phone number or email address' value={profile.contact_information} onChange={handleChange} />
      </div>

      {/* Pregnancy Status */}
      <div className="mb-3">
        <label htmlFor="pregnancy_status" className="form-label">Are you Pregnant?</label>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="pregnancy_status"
            name="pregnancy_status"
            checked={profile.pregnancy_status}
            onChange={handleChange}
            required />
        </div>
      </div>

      <button type="button" className="btn btn-primary" onClick={handleNextStep}>Next</button>
    </form>
  </div>
);


  // Render the form fields for step 2
  const renderStep2 = () => (
    <div>
      <form onSubmit={handleSubmit} className='mt-5'>
       {/* Medical History */}
        <div className="mb-3 col-md-6">
          <label htmlFor="medical_history" className="form-label">Medical History</label>
          <textarea className="form-control" id="medical_history" name="medical_history" value={profile.medical_history} onChange={handleChange}></textarea>
        </div>

        {/* Current Medications */}
          <div className="mb-3 col-md-6">
            <label htmlFor="current_medications" className="form-label">Current Medications</label>
            <textarea className="form-control" id="current_medications" name="current_medications" value={profile.current_medications} onChange={handleChange}></textarea>
          </div>

       {/* Abortion History */}
        <div className="mb-3 col-md-6 form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            id="abortion_history"
            name="abortion_history"
            checked={profile.abortion_history}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="abortion_history">Abortion History</label>
        </div>


        {/* Previous Pregnancy History */}
        <div className="mb-3 col-md-6">
          <label htmlFor="previous_pregnancy_history" className="form-label">Previous Pregnancy History</label>
          <textarea className="form-control" id="previous_pregnancy_history" name="previous_pregnancy_history" value={profile.previous_pregnancy_history} onChange={handleChange}></textarea>
        </div>

        {/* Contraception Methods */}
        <div className="mb-3 col-md-6">
          <label htmlFor="contraception_methods" className="form-label">Contraception Methods</label>
          <textarea className="form-control" id="contraception_methods" name="contraception_methods" value={profile.contraception_methods} onChange={handleChange}></textarea>
        </div>

        {/* Family Planning Goals */}
        <div className="mb-3 col-md-6">
          <label htmlFor="family_planning_goals" className="form-label">Family Planning Goals</label>
          <textarea className="form-control" id="family_planning_goals" name="family_planning_goals" value={profile.family_planning_goals} onChange={handleChange}></textarea>
        </div>

        {/* Abortion Family Planning Preferences */}
        <div className="mb-3 col-md-6">
          <label htmlFor="abortion_family_planning_preferences" className="form-label">Abortion and Family Planning Preferences</label>
          <textarea className="form-control" id="abortion_family_planning_preferences" name="abortion_family_planning_preferences" value={profile.abortion_family_planning_preferences} onChange={handleChange}></textarea>
        </div>

        {/* Privacy and Confidentiality Preferences */}
        <div className="mb-3 col-md-6">
          <label htmlFor="privacy_and_confidentiality_preferences" className="form-label">Privacy and Confidentiality Preferences</label>
          <textarea className="form-control" id="privacy_and_confidentiality_preferences" name="privacy_and_confidentiality_preferences" value={profile.privacy_and_confidentiality_preferences} onChange={handleChange}></textarea>
        </div>

        {/* Feedback and Support */}
        <div className="mb-3 col-md-6">
          <label htmlFor="feedback_and_support" className="form-label">Feedback and Support</label>
          <textarea className="form-control" id="feedback_and_support" name="feedback_and_support" value={profile.feedback_and_support} onChange={handleChange}></textarea>
        </div>



        {/* Emergency Contact Information */}
        <div className="mb-3 col-md-6">
          <label htmlFor="emergency_contact_information" className="form-label">Emergency Contact Information</label>
          <textarea className="form-control" id="emergency_contact_information" name="emergency_contact_information" value={profile.emergency_contact_information} onChange={handleChange}></textarea>
        </div>

        {/* Survey Questionnaire */}
        <div className="mb-3 col-md-6">
          <label htmlFor="survey_questionnaire" className="form-label">Survey Questionnaire</label>
          <textarea className="form-control" id="survey_questionnaire" name="survey_questionnaire" value={profile.survey_questionnaire} onChange={handleChange}></textarea>
        </div>

        {/* Education Resource Preferences */}
        <div className="mb-3">
          <label htmlFor="education_resource_preferences" className="form-label">Education Resource Preferences</label>
          <textarea className="form-control" id="education_resource_preferences" name="education_resource_preferences" value={profile.education_resource_preferences} onChange={handleChange}></textarea>
        </div>

         {/* Terms Acceptance */}
         <div className="mb-3 col-md-6 form-check">
          <input type="checkbox" className="form-check-input" id="terms_acceptance" name="terms_acceptance" checked={profile.terms_acceptance} onChange={handleChange} />
          <label className="form-check-label" htmlFor="terms_acceptance">Terms Acceptance</label>
        </div>

      <button type="button" className="btn custom-button me-2" onClick={handleBackToStep1}>Back</button>
      <button type="submit" className="btn custom-button">Submit</button>
      </form>

    </div>

  );

  return (
    <div className="container mt-5 pt-5">
      <h1 className="mb-4 mt-5 new_profile_title">Create a New Profile {renderProgressBar()} {/* Add the progress bar */}</h1>
      <img
        src="https://static.wixstatic.com/media/1fd4c8_4d7becce92c94088af15e9bb21a05119~mv2.png"
        alt="Descriptive Text Here"
        className='new-profile-img'
        style={{ maxWidth: '100%', height: 'auto' }}
      />


      {step === 1 ? renderStep1() : renderStep2()}
    </div>
  );
};

export default NewProfile;
