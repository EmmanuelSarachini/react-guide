import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);


  useEffect(() => {
    if(enteredNameIsValid) {
      console.log("name is valid");
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredEmailIsValid(true);
    }

    if (!enteredEmail.includes("@") || !enteredEmail.includes(".com")) {
      setEnteredEmailIsValid(false);
    }
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={emailInputChangeHandler} value={enteredEmail}/>
        {!enteredEmailIsValid && <p className="error-text">Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
