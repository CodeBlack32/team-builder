import React, { useState } from "react";
import MemberForm from "./MemberForm";

import "./App.css";

function App() {
  const [members, setMember] = useState([]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };

    const newMemberList = [...members, newMember];

    setMember(newMemberList);
  };

  console.log("Members", members);
  return (
    <div className="App">
      <h1>Team Member</h1>

      <MemberForm addNewMember={addNewMember} />
      <ul>
        {members.map(member => (
          <li>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
