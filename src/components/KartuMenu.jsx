import LabelHarga from './LabelHarga.jsx';
export default function KartuMenu({nama, harga, kategori = "Makanan"}){
    return <>
    <div className='kartu'>
        <h3>{nama}</h3>
        <p>{kategori}</p>
        <LabelHarga nilai={harga}/>
    </div>
    </>
}