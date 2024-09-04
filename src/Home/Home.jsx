
import user from '../assets/images/user.png'
import SectionTittle from '../SectionTittle/SectionTittle';
import Categorey from './Categorey';
import FeatureJobs from './Feature/FeatureJobs';
const Home = () => {
    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='flex flex-col justify-center items-center text-center md:text-left md:w-2/4' >
                    <div> <h3 className='text-5xl w-2/3 font-extrabold'>One Step <br /> Closer To Your <br /> <span className='text-[#9873FF]'>Dream Job</span></h3>

                        <p className='w-2/3 font-medium m-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p></div>
                        <button className="btn btn-active justify-start btn-secondary">Get started</button>
                </div>
                <div><img src={user} alt="" /></div>

            </div>
            <SectionTittle className="mt-10" heading={"Job Category List"} subHeading={"Explore thousands of job opportunities with all the information you need. Its your future"}></SectionTittle>
         
            <Categorey></Categorey>
            <div className='mt-29'>
                <SectionTittle heading={"Feature Jobs"} subHeading={"Explore thousands of job opportunities with all the information you need. Its your future"}></SectionTittle>
            </div>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;