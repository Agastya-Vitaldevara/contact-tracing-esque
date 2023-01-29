import Symptom from "./Symptom";

function SymptomList(props) {
  const output = props.data.map((user) => {
    return <Symptom id={user.user} key={user.user} />;
  });
  console.log(output);

  return <div>{output}</div>;
}

export default SymptomList;
