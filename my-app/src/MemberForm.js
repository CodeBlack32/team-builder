import React, { useState } from "react";

const MemberForm = props => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    role: ""
  });

  const infoChange = event => {
    setInfo({ ...info, [event.target.name]: event.target.value });
    console.log(event);
  };

  const submitForm = event => {
    event.preventDefault();
    const newMember = { ...info, id: Date.now() };

    props.addNewMember(newMember);
    console.log(newMember);
    //console.log to test
    setInfo({ name: "", email: "", role: "" });
  };
  console.log("some info", info);
  return (
    <form onSubmit={submitForm}>
      <label>Member Name: </label>
      <input
        // id="memName"
        type="text"
        name="name"
        placeholder="Your Name Here!"
        onChange={infoChange}
        value={info.name}
      />
      <label>Member Email: </label>
      <input
        // id="memEmail"
        type="text"
        name="email"
        placeholder="Enter Your Email!"
        onChange={infoChange}
        value={info.email}
      />
      <label>Role: </label>
      <textarea
        id="memInfo"
        name="role"
        placeholder="Member Role Goes Here..."
        onChange={infoChange}
        value={info.role}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default MemberForm;
