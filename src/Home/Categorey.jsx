import { useEffect, useState } from "react";
import CategoreyCard from "./CategoreyCard";


const Categorey = () => {
    const [cat,setCat]=useState([]);
    useEffect(()=>{
        fetch('categorey.json')
        .then(res=>res.json())
        .then(data=>setCat(data))
    },[])
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-3">
            {
                cat.map(cat=><CategoreyCard key={cat.id} cat={cat}></CategoreyCard>)
            }
        </div>
    );
};

export default Categorey;