import Job from './Job';
import Filter from './Filter';
const Jobs =(props)=>{
    console.log(props)
    return(
        <div className="container">
            <div className="jobs-wraper">
                {props.onFilter.length !==0 &&<Filter onClear={props.onClear} onFilter={props.onFilter}/>}
              {
                props.data.map((job)=>(<Job onFilterReq={props.onFilterReq} key={job.id} data={job}/>)
                    
                )
              }
            </div>
        </div>
    )
}
export default Jobs;