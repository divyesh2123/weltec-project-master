import { useState } from "react";
import {
  createUserDocumentFromAuth,
  createAuthUserFromEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
import Toast from "../additional-components/toast/toast.component";
import { useDispatch, useSelector } from "react-redux";
import { registrationRequest } from "../../slice/registration.slice";

const statusMessages = {
  1: {
    color: "red",
    message: "Email already in use. Please enter a different email",
  },
  2: { color: "red", message: "Both Passwords do not match" },
  3: { color: "red", message: "Password should be at least 6 characters long" },
};
const defaultFormFields = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  isSubscribed:false,
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email,firstName,lastName,password,isSubscribed } = formFields;
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const data = useSelector(y=>y.registration);
  const mydis = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    try {
      mydis(registrationRequest(formFields))
      
    } catch (error) {
     
    }
   
  };

  const handleChange = (event) => {
    const { name, value,type,checked } = event.target;

    if(type =="checkbox")
      {
    setFormFields({ ...formFields, [name]: checked });
      }
      else
      {
        setFormFields({ ...formFields, [name]: value });
      }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email Address"
          type="text"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="firstName"
          type="text"
          name="firstName"
          required
          onChange={handleChange}
          value={firstName}
        />

        <FormInput
          label="lastName"
          type="text"
          name="lastName"
          required
          onChange={handleChange}
          value={lastName}
        />

        <FormInput
          label=" Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />
 <FormInput
          label=" isSubscribed"
          type="checkbox"
          name="isSubscribed"
          required
          onChange={handleChange}
          value={isSubscribed}

        />


        <Button type="submit">Sign Up</Button>
        {showAlert && <Toast color={error.color} message={error.message} />}
      </form>
    </div>
  );
};

export default SignUpForm;
