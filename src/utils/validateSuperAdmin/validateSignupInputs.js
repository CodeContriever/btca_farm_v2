// validation.js

const validateSuperAdminSignupInputs = (formData, setFormErrors) => {
  let isSignupDataValid = true;
  const errors = {};

  if (formData.full_name.length < 3) {
    errors.full_name = "Full Name must be at least 3 characters long.";
    isSignupDataValid = false;
  }

  if (formData.username && formData.username.length < 3) {
  errors.fullname = "Username must be at least 3 characters long.";
  isSignupDataValid = false;
}

  if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
    isSignupDataValid = false;
  }

  // Password complexity validation (e.g., requiring numbers and special characters)
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
    errors.password = "Password must include at least one lowercase letter, one uppercase letter, one number, and one special character.";
    isSignupDataValid = false;
  }



  console.log("Validation errors:", errors); // Log validation errors

  setFormErrors(errors);
  return isSignupDataValid;
};

export default validateSuperAdminSignupInputs
