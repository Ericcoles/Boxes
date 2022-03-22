import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

// function Demo() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello world </h1>
//         <p>I have made my first page years ago </p>
//       </header>
//     </div>
//   );
// }

const persons = [
  {
    name: "Margit",
    title: "CEO",
    age: 29,
    languages: [
      { name: "English", id: 1 },
      { name: "Finnish", id: 2 },
      { name: "Russian", id: 3 },
    ],
  },
  {
    name: "Kati",
    title: "Developer",
    age: 25,
    languages: [
      { name: "English", id: 1 },
      { name: "Finnish", id: 2 },
      { name: "Russian", id: 3 },
      { name: "Turkish", id: 4 },
    ],
  },
  {
    name: "Karin",
    title: "Designer",
    age: 45,
    languages: [
      { name: "English", id: 1 },
      { name: "Finnish", id: 2 },
      { name: "Russian", id: 3 },
      { name: "Spanish", id: 4 },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        {persons.map((person) => (
          <Box
            key={person.name}
            name={person.name}
            title={person.title}
            age={person.age}
            languages={persons.languages.map(languages)}
          />
        ))}
        {/* <Box
          name={persons[0].name}
          title={persons[0].title}
          age={persons[0].age}
        /> */}
        {/* <Box name="Kati" title="Developer" age="25" />
        <Box name="Karin" title="Designer" age="45" />
        <Box name="Steve" title="CEO" age="65" />
        <Box name="Susan" title="HR" age="65" />
        <Box name="Eric" title="Front-End" age="30" /> */}
      </main>

      <Footer />
    </div>
  );
};
export default App;
