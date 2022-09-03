const PupUp=(props)=>{
    function process(){
        props.onOpera(pre=>({...pre,deleteCo:true}))
        props.onSub()
    }
    return(
        <div className="ovely">
<div className="deleteCo">
    <div>
        <h3>

        Delete comment
        </h3>
    </div>
    <div>
        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone</p>
    </div>
    <div className="btns">
        <span>
            <button onClick={()=>props.onOpera(pre=>({...pre,popUpOpen:false}))} style={{backgroundColor:"hsl(212, 24%, 26%)",borderRadius:"8px"}}  className="btn btn-dark">NO,CANCEL</button>
        </span>
        <span>
            <button onClick={()=>process()} style={{backgroundColor:"hsl(358, 79%, 66%)",borderRadius:"8px"}} className="btn btn-danger">YES,DELETE</button>
        </span>
    </div>
</div>
        </div>
    )
}
export default PupUp;