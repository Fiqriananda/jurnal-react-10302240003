import { useState } from 'react'
import KartuMenu from './components/KartuMenu';
import Panel from './components/Panel';

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
      <p style={style}> {judul}</p>
      <p>{jam < 12 ? "Selamat Pagi" : "Selamat Siang"}</p>
      <p>Saldo awal kartu kantin: Rp.{N*1000}</p>
      <button disabled="disabled">Bayar</button>
      <Panel judul={"Menu Makanan Hari Ini"}>
        <KartuMenu harga={10000+ (N*100)} nama={"Udang Goreng"}/>
        <KartuMenu harga={5000} nama={"Aqua"} kategori='Minuman'/>
        <KartuMenu harga={4000} nama={"Udang Rebus"}/>
      </Panel>
    </>
  )
}

export default App
