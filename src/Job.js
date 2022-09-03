import pic from './images/eyecam-co.svg'
const Job=(props)=>{
    // console.log(props)
    return(
        <div  className={props.data.featured ? "job-con featured":"job-con"}>
        <div className="job-info">
            <span className='job-img'>
            <img src={props.data.logo} alt="" />
            </span>
            <span >
                <div style={{color:"hsl(180, 29%, 50%)"}} className='header'><span>{props.data.company}</span> {props.data.new &&<span style={{backgroundColor:"hsl(180, 29%, 50%)"}} className='badge bg-new badge-title'>NEW!</span>}{props.data.featured&&<span className='badge bg-dark badge-title'>FREATURED</span>}</div>
                
                <div className="job-title">{props.data.position}</div>
                <div className='job-info-footer'><span>{props.data.postedAt}</span>.<span>{props.data.contract}</span><span>.</span><span>{props.data.location}</span></div>
            </span>
        </div>
        <div className="skills">
            {props.data.languages.map((language,index)=>(<span onClick={()=>props.onFilterReq(language)} key={index} className="badge bg-skills">{language}</span>))}
            {props.data.tools.map((tool,index)=>(<span key={index} onClick={()=>props.onFilterReq(tool)} className="badge bg-skills">{tool}</span>))}
            
        </div>
    </div>
    )
}
export default Job;