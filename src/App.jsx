import NavBar from "./components/NavBar";
import Card from "./components/Card";
import notes from "./notes.jsx";

export default function App() {
  const _notes = notes.map((note, index) => <Card key={index} {...note} />);
  return (
    <div className="space-y-[32px] mx-auto w-[550px] text-[10.24px] shadow-xl">
      <NavBar />
      <div className="space-y-[32px]">{_notes}</div>
    </div>
  );
}
