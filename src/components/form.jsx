//form component

//handle form submission

function Form() {
  return (
    <div className="form-wrapper">
      <h2>Join Our Training Program</h2>
      <form className="join-form">
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
      </form>
    </div>
  );
}

export default Form;
