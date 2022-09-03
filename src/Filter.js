import close from './images/icon-remove.svg'
const Filter =(props)=>{
    return(
        <div className="filter-con">
            <div className='filter-wrapper'>
                <div className='wrapper'>
                    {props.onFilter.map((tool)=>(
                         <div className="filter">
                         <span className='pos'>{tool}</span> <span className='cl'><img src={close}/></span>
                    </div>
                    ))}
           
                </div>
                <div onClick={()=>props.onClear()} style={{fontWeight:500,cursor:"pointer",color:"hsl(180, 29%, 50%)",textDecoration:"underline"}}>
            clear
           </div>
            </div>
          
        </div>
    )
}
export default Filter;