import { useState } from "react";

function App() {
  const [nilai, setNilai] = useState(0);
  return (
    <>
      <button onClick={() => setNilai(nilai + 1)}>Tambah</button>
      <button onClick={() => setNilai(nilai - 1)}>Kurang</button>
      <p className="text-xl">{nilai}</p>
    </>
  );
}

export default App;
