//temp dummy data

import SymptomList from "@/components/SymptomList";

const DUMMY_DATA = [
  {
    user: "AgastyaV",
    symptoms: [
      { symptom: "runny nose", severity: "mild" },
      { symptom: "headache", severity: "mild" },
      { symptom: "sore throat", severity: "severe" },
      { symptom: "sore throat", severity: "severe" },
    ],
    diagnosis: {
      diagnosis: "strep throat",
    },
    dates: {
      startDate: new Date(2023, 1, 28).toJSON(),
      endDate: new Date(2023, 1, 28).toJSON(),
    },
  },
  {
    user: "AlanC",
    symptoms: [
      { symptom: "stomach ache", severity: "mild" },
      { symptom: "diarrhea", severity: "mild" },
    ],
    dates: {
      startDate: new Date(2023, 1, 26).toJSON(),
      endDate: new Date(2023, 1, 28).toJSON(),
    },
  },
  {
    user: "Bob",
    symptoms: [
      { symptom: "fever", severity: "101" },
      { symptom: "cough", severity: "mild" },
    ],
    dates: {
      startDate: new Date(2023, 1, 23).toJSON(),
      endDate: new Date(2023, 1, 27).toJSON(),
    },
  },
];

function Home(props) {
  return (
    <>
      <SymptomList data={props.data} />
    </>
  );
}

export default Home;

export async function getStaticProps() {
  //fetch data from api;

  return {
    props: { data: DUMMY_DATA },
    revalidate: 1,
  };
}
