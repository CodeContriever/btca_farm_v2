// validation.js

const validateSignupInputs = (formData, setFormErrors) => {
  let isValid = true;
  const errors = {};

  if (formData.fullname.length < 3) {
    errors.fullname = "Full Name must be at least 3 characters long.";
    isValid = false;
  }

  if (formData.username && formData.username.length < 3) {
  errors.fullname = "Username must be at least 3 characters long.";
  isValid = false;
}

  if (!/^\d{8,15}$/.test(formData.phoneNumber)) {
    errors.phoneNumber = "Phone Number must be between 8 and 15 digits.";
    isValid = false;
  }

  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
    errors.email = "Invalid Email Address.";
    isValid = false;
  }

  if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
    isValid = false;
  }

  // Password complexity validation (e.g., requiring numbers and special characters)
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
    errors.password = "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character.";
    isValid = false;
  }

  // Additional email validation (optional)
  // if (formData.email.length > 50) {
  //   errors.email = "Email Address is too long.";
  //   isValid = false;
  // }

  console.log("Validation errors:", errors); // Log validation errors

  setFormErrors(errors);
  return isValid;
};

export default validateSignupInputs
