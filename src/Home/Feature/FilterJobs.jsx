import { useEffect, useState } from "react";



const FilterJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [filterjobs,setfilterJobs]=useState([]);
    const [search,setSearch]=useState("");
    useEffect(()=>{
        fetch('feature.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[]);

    const handleJob=fill=>{
        if(fill==="all"){
            
            setfilterJobs(jobs);
        }
        else if(fill==='remote'){
            const remote=jobs.filter(jobs=>jobs.remote_or_onsite === "Remote");
            setfilterJobs(remote)
        }
        else if(fill==='onsite'){
            const onsite=jobs.filter(jobs=>jobs.remote_or_onsite === "Onsite");
            setfilterJobs(onsite);
        }
    }
 
    return (
        <div>
<input type="text" placeholder="Search Company Name" onChange={event=>{
    setSearch(event.target.value);
}} className="input input-bordered w-full max-w-xs" />
            <div className="flex justify-center items-center dropdown dropdown-hover">

  <div tabIndex={0} role="button" className="btn m-1">Filter Jobs</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleJob('all')} ><a>All </a></li>
    <li onClick={()=>handleJob('remote')} ><a>Remote</a></li>
    <li onClick={()=>handleJob('onsite')}><a>Onsite</a></li>

  </ul>
</div>


  {
    filterjobs.filter(val=>{
        if(search=="") return val;
        else if(val.company_name.toLowerCase().includes(search.toLocaleLowerCase()))return val;
    })
     .map(file=><li key={file.id}><span> {file.company_name} </span></li>)
  }
  
        </div>
    );
};

export default FilterJobs;