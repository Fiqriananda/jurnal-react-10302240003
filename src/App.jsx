import { useState } from 'react'
import KartuMenu from './components/KartuMenu';
import Panel from './components/Panel';

function App() {
  const N = 3;
  const jam = 9;
  const [judul, setJudul] = useState("Kantin Fiqri");
  const menu = [
    {id: 1, nama:"Udang Goreng", harga:10000+ (N*100)},
    {id: 1, nama:"Aqua", harga:10000, kategori: "Minuman"},
    {id: 1, nama:"Udang Rebus", harga:49999}
  ]

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
        {
        menu.length == 0 ? "Semua Habis Terjual" :
        menu.map(data => <KartuMenu id={data.id} harga={4000} nama={"Udang Rebus"}/>)}
      </Panel>
    </>
  )
}

export default App
