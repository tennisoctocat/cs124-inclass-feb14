
import './App.css';

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
  return <div className={"persondiv"}>
    <span id={"name"}>{props.name}</span>
    <span id={"email"}>{props.email}</span>
    <span id={"phone"}>{props.phone}</span>
  </div>
}

function ListofPeople(props) {
  return props.people.map(person =>
      <PersonInfo key={person.id} {...person} />);
}

function App() {
  return (
      <ListofPeople people={data}/>
  );
}

export default App;
