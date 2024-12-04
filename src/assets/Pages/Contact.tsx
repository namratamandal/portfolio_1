import React from "react"; // Importing React 
import "./Contact.css"; // Importing CSS file for styling the component
import { useDispatch, useSelector } from "react-redux"; // Importing Redux hooks for state management
import { RootState, AppDispatch } from "../../Redux/store"; // Importing RootState and AppDispatch for type safety in Redux
import { updateField, resetForm } from "../../Redux/contactSlice"; // Importing Redux actions for updating and resetting form fields

const Contact: React.FC = () => { // Declaring Contact component using React Functional Component (FC) type
  const dispatch: AppDispatch = useDispatch(); // Using dispatch hook with AppDispatch type for dispatching actions
  const formState = useSelector((state: RootState) => state.contact); // Using selector to get the contact state from Redux store

  // Function to handle changes in the input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { 
    const { name, value } = e.target; // Destructuring the target element to get name and value
    dispatch(updateField({ field: name as keyof typeof formState, value })); // Dispatching action to update the form field in the Redux store
  };

  // Function to reset all the form fields
  const handleReset = () => {
    dispatch(resetForm()); // Dispatching resetForm action to reset all the fields
  };

  return (
    <div className="contact-container"> {/* Main container for the contact form */}
      <div className="contact-text"> {/* Section for introductory text */}
        <h1>Tell me about your <br /> project</h1> {/* Heading for the form */}
        <p>Any project starts with goal setting. If you have a vision, I can design it.</p> {/* Brief description about the project */}
        <p>
          After the inquiry, I will reply within 2-3 working days, with an approximate quote for the project or with questions for more details. After that, we can have an intro call to discuss your project and see if it's a match.
        </p> {/* Detailed description about the inquiry process */}
        <p>Email me at <strong>ar.namratamanda@gmail.com</strong></p> {/* Contact email */}
      </div>
      <form className="contact-form"> {/* Form element for submitting the contact details */}
        <div className="input-row"> {/* First row for name and email input fields */}
          <input
            type="text"
            name="name"
            placeholder="Your name" /* Placeholder text for the name input field */
            value={formState.name} /* Binding the input value to the Redux state */
            onChange={handleInputChange} /* Calling handleInputChange when the input changes */
          />
          <input
            type="email"
            name="email" 
            placeholder="Your email" /* Placeholder text for the email input field */
            value={formState.email} /* Binding the input value to the Redux state */
            onChange={handleInputChange} /* Calling handleInputChange when the input changes */
          />
        </div>
        <div className="input-row"> {/* Second row for project type and budget input fields */}
          <input
            type="text"
            name="projectType" 
            placeholder="Project type" /* Placeholder text for the project type input field */
            value={formState.projectType} /* Binding the input value to the Redux state */
            onChange={handleInputChange} /* Calling handleInputChange when the input changes */
          />
          <input
            type="text"
            name="budget" 
            placeholder="Budget" /* Placeholder text for the budget input field */
            value={formState.budget} /* Binding the input value to the Redux state */
            onChange={handleInputChange} /* Calling handleInputChange when the input changes */
          />
        </div>
        <input
          type="text"
          name="website" 
          placeholder="Your website (if exists)" /* Placeholder text for the website input field */
          value={formState.website} /* Binding the input value to the Redux state */
          onChange={handleInputChange} /* Calling handleInputChange when the input changes */
        />
        <textarea
          name="details" 
          placeholder="Project details, context, how can I help you..." /* Placeholder text for the details textarea */
          value={formState.details} /* Binding the textarea value to the Redux state */
          onChange={handleInputChange} /* Calling handleInputChange when the textarea value changes */
        />
        <button type="button" onClick={handleReset}>Reset</button> {/* Button to reset the form */}
        <button type="submit">Get in touch</button> {/* Button to submit the form */}
      </form>
    </div>
  );
};

export default Contact; {/* Exporting the Contact component for use in other parts of the application */}
