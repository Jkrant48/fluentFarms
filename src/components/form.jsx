//form component

//handle form submission

function Form() {
  return (
    <div className="form-wrapper">
      <h2>Join Our Training Program</h2>

      {/* Original form component - commented out pending backend implementation */}
      {/* <form className="join-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+233 123 456 789"
          required
        />
        <button type="submit" disabled={true}>
          Submit
        </button>
      </form> */}

      {/* Embedded Google Form */}
      <div className="form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd59xxWjOtIBCgPZIBq0ReqGHy3VWZqCkwTmSHr1MLlbLFvTg/viewform?embedded=true"
          className="google-form"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Training Program Registration Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Form;
