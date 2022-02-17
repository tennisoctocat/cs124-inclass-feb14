
import './App.css';
import {useEffect, useState} from "react";

const data = [
  {
    id: 512,
    name: "Neil Rhodes",
    email: "rhodes@hmc.edu",
    phone: "(909) 555-1212"
  },
  {
    id: 787,
    name: "Barack Obama",
    email: "ex-prez@whitehouse.gov",
    phone: "(312) 555-1212"
  }
];

function PersonInfo(props) {
  let isSelected = props.selectedId === props.id;
  const [dimmed, setDimmed]  = useState(false);
  // Blinking effect
  useEffect(() => {
    if (isSelected) {
      const timer = setTimeout(() => setDimmed(!dimmed), 1000)
      // Clear timeout if we rerender/go to another page
      return () => clearTimeout(timer)
    } else {
      // This way when we first select an item, it will always be non-dimmed
      setDimmed(false);
    }
  }, [isSelected, dimmed])
  let classNameArr = ["persondiv"]
  if (isSelected) {
    classNameArr.push("selected");
  }
  if (dimmed) {
    classNameArr.push("dimmed");
  }
  return <div onClick={() => props.onSelectRow(props.id)}
              className={classNameArr.join(" ")}>
    <span id={"name"}>{props.name}</span>
    <span id={"email"}>{props.email}</span>
    <span id={"phone"}>{props.phone}</span>
  </div>
}

function ListofPeople(props) {
  const [selectedId, setSelectedId] = useState(null);

  function selectRow(id) {
    // So that we only update the variable if need be
    if (selectedId === null) {
      props.onNumChanged(1);
    }
    setSelectedId(id);
  }

  return props.people.map(person =>
      <PersonInfo key={person.id} onSelectRow={selectRow} selectedId={selectedId} {...person} />);
}


function App() {
  const [numSelected, setNumSelected] = useState(0);
  return (
      <>
        <h1>People {numSelected}/{data.length} selected</h1>
        <ListofPeople people={data} onNumChanged={setNumSelected}/>
      </>
  );
}

export default App;
