import { useState } from 'react'

function App() {
  const N = 3;
  const jam = 9;
  const [judul, setJudul] = useState("Kantin Fiqri");

  const style = { 
    color: "blue",
    fontSize: "30px",
    fontWeight: "bold"
  }
  return (
    <>
      <p style={style}>{judul}</p>
      <p>{jam < 12 ? "Selamat Pagi" : "Selamat Siang"}</p>
      <p>Saldo awal kartu kantin: Rp.{N*1000}</p>
      <button disabled="disabled">Bayar</button>
    </>
  )
}

export default App
