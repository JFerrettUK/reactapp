import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Daisy",
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleFirstName = (e) => {
    const newName = e.target.value;
    setPerson({ ...person, firstName: newName });
  };

  const handleLastName = (e) => {
    const newName = e.target.value;
    setPerson({ ...person, lastName: newName });
  };

  return (
    <>
      <input type="text" onChange={handleFirstName} />
      <h1>{person.firstName + " " + person.lastName}</h1>
      <input type="text" onChange={handleLastName} />
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
