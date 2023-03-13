const MapPage=()=>{
    let ar = ['박시은','모모','레이'];
    //components
    //0 <li>'박시은'</li>
    //1 <li>'모모'</li>
    //2 <li>'레이'</li>

    let id =0;

    let components = ar.map((value)=><li key={id++}>{value}</li>)
    console.log(components);
    return (
        <ul>
            {components}
        </ul>
    );
}

export default MapPage;
