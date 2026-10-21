import { useState } from 'react';
import LabelHarga from './LabelHarga.jsx';
export default function KartuMenu({nama, harga, kategori = "Makanan"}){
    const [jumlah, setJumlah] = useState(0);
    const [catatan, setCatatan] = useState("");
    function tambah() {
        setJumlah(jumlah+1);
    }
    return <>
    <div className='kartu'>
        <h3>{nama}</h3>
        <p>{kategori}</p>
        <LabelHarga nilai={harga}/>
        <button onClick={() => setJumlah(jumlah-1)} disabled={jumlah == 0 ? true : false}>
            -
        </button>
        {" " + jumlah + " "}
        <button onClick={tambah}>
            +
        </button>
        <div style={
            {
                display: 'flex',
                flexDirection: 'column'
            }
        }>
        {jumlah <= 0 ? "Belum dipesan" : "Subtotal: Rp: " + (harga*jumlah)}
        <div>

        {jumlah >= 5 && <p className='badge'>PESANAN BANYAK</p>}
        <input type="text" name="Catatan" id="catatan" onChange={(e) => setCatatan(e.target.value)} />
        </div>
        {catatan ? <p>Catatan: {catatan}</p>: ""} 
        </div>
    </div>
    </>
}