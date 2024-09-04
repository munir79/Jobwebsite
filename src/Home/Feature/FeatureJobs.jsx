import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";


const FeatureJobs = () => {
    const [featureJobs,setFeatureJobs]=useState([]);
    const [totalJob,setTotalJobs]=useState([4]);
    useEffect(()=>{
        fetch('feature.json')
        .then(res=>res.json())
        .then(data=>setFeatureJobs(data));
    },[])
    return (
       <div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
           {
            featureJobs.slice(0,totalJob).map(feat=><FeatureCard feat={feat} key={feat.id}></FeatureCard>)
           }
      
        </div>
       <div className={ totalJob===FeatureJobs.length && 'hidden'}>
       <button onClick={()=>setTotalJobs(featureJobs.length)} className="btn btn-active btn-secondary">View More</button>
       </div>
       </div>
    );
};

export default FeatureJobs;