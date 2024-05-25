import { Banner } from "../../components";

const people = [
  {
    name: "Sophie",
    description: "Hello my name is sophie, I'm 25 and from denmark",
    age: "",
    imgSrc: "/people/luke.jpg",
    nationality: "",
    location: "",
    duration: "",
  },
];

type person = {
  name: string;
  age: string;
  description: string;
  imgSrc: string;
  nationality: string;
  location: string;
  duration: string;
};

function getData(name: string) {
  const data = Object.values(people).reduce((results: any, people: person) => {
    if (people.name === name) {
      return people;
    }
    return results;
  });
  return data;
}

export default function BlogPage({ params }) {
  const person = getData(params.name);
  return (
    <Banner
      title={person.name}
      caption={person.description}
      style={{ height: "500px" }}
      imgSrc={person.imgSrc}
    />
  );
}
