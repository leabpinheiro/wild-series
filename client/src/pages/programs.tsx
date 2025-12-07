import { useEffect, useState } from "react";

interface Program {
  title: string;
  synopsis: string;
}
function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((programs) => setPrograms(programs));
  }, []);

  return (
    <section>
      <h1>Liste des programmes</h1>
      {programs.map((prog) => (
        <div key={prog.title}>
          <h2>{prog.title}</h2>
          <p>{prog.synopsis}</p>
        </div>
      ))}
    </section>
  );
}
export default Programs;
