export default function Panel({children, judul}){
    return(
        <div className="panel">
            <h1>{judul}</h1>
            {children}
        </div>
    );
}