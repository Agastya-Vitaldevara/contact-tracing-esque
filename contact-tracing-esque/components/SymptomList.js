import Symptom from "./Symptom";

function SymptomList(props) {
  const output = props.data.map((user) => {
    return <Symptom id={user.user} key={user.user} />;
  });
  console.log(output);

  return (
    <>
      <h2>Diagnosed</h2>
      <table>{diagnosedOutput}</table>
      <h2>Undiagnosed</h2>
      <table>{undiagnosedOutput}</table>
    </>
  );
}

export default SymptomList;
