import { useState } from 'react';
import PupUp from './PupUp';
import './bootstrap.css'
import './App.css';
import Comments from './Comments';
function App() {
 const currentUser= {
  image:{
    png: "./images/avatars/image-juliusomo.png",
    webp: "./images/avatars/image-juliusomo.webp"
  },
  username: "juliusomo"
 }
  const [comments,setComments]=useState([
    {id:1,content:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt:"1 month ago",
    score:12,
    user:{
      image:{
        png: "./images/avatars/image-amyrobson.png",
        webp:"./images/avatars/image-amyrobson.webp"
      },
      username:"amyrobson"
    },
    replies:[]
  },
  {id:2,content:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
  createdAt:"2 weeks ago",
  score:5,
  user:{
    image:{
      png: "./images/avatars/image-maxblagun.png",
      webp:"./images/avatars/image-maxblagun.webp"
    },
    username:"maxblagun"
  },
  replies:[
    {
      id:3,
      content:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
      createdAt:"1 week ago",
      score:4,
      replyingTo:"maxblagun",
      user:{
        image:{
          png:"./images/avatars/image-ramsesmiron.png",
          webp: "./images/avatars/image-ramsesmiron.webp"
        },
        username:"ramsesmiron"
      }
    },
    {
      id:4,
      content:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      createdAt:"2 days ago",
      score:2,
      replyingTo:"ramsesmiron",
      user:{
        image:{
          png:"./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp"
        },
        username:"juliusomo"
      }
    }
  ]
}
  ])
// form control 
const [form,setForm]=useState(
  {
    id:0,
    content:'',
    replyingTo:"",
    editMode:false,
    replyMode:false,
    score:0,
    createdAt:"",
    btnName:'SEND',
    replies:false,
    parentid:0
  }
)
// reply
const reply=(id,type,pid)=>{
  if(type==="res"){
    comments.map((comment)=>{
      comment.replies.map((reply)=>(reply.id===id&&setForm((pre)=>({...pre,replyingTo:reply.user.username,id:id,btnName:"REPLY",replyMode:true,parentid:pid,replies:true}))))
    })
  }
  else{

    comments.map((comment)=>comment.id ===id&&setForm((pre)=>({...pre,replyingTo:comment.user.username})))
    setForm((pre)=>({...pre,replyMode:true,id:id,btnName:"REPLY"}))
  }
}
const edit=(id)=>{
  comments.map((comment)=>comment.replies.map((reply)=>(reply.id===id&&setForm((pre)=>({...form,content:reply.content,score:reply.score,editMode:true,id:id,btnName:"UPDATE"})))))
}
// add a comment
const addComment=(co)=>{
 
  if(!form.editMode&&!form.replyMode){

    setComments([...comments,co]) 
  }
//  setComments((pre)=>({...pre,replies:[...pre,co]}))
 if(form.replyMode){
  if(form.replies){
    setComments(
      comments.map((comment)=>comment.id ===form.parentid ? {...comment,replies:[...comment.replies,co]} : comment)
    )
  }
  else{

    setComments(
      comments.map((comment)=>comment.id ===form.id ? {...comment,replies:[...comment.replies,co]} : comment)
    )
  }
 }
 if(form.editMode){
  let {content}=co;
  setComments(comments.map((comment)=>({...comment,replies:comment.replies.map((reply)=>(reply.id===form.id ? {...reply,content:content}:reply))})))
 }

 setForm({
  id:0,
  content:'',
  replyingTo:"",
  editMode:false,
  replyMode:false,
  score:0,
  createdAt:"",
  btnName:'SEND',
  replies:false,
  parentid:0
})
}
//delete
const deleteCom=(id,type)=>{
  setPupUp((pre)=>({...pre,id:id,type:type,popUpOpen:true}))
  

}
const deletef=()=>{
  popUp.type==="res" ?setComments(comments.map((comment)=>({...comment,replies:comment.replies.filter((reply)=>reply.id!==popUp.id && reply)}))) :setComments(comments.filter(comment=>comment.id !==popUp.id&&comment))
  setPupUp({
    type:'',
    id:0,
    popUpOpen:false,
    deleteCon:false
  })
}

const [popUp,setPupUp]=useState({
  type:'',
  id:0,
  popUpOpen:false,
  deleteCon:false
 })
// like
const like=(id,op,type,pid)=>{
  if(type==="res"){
    setComments(comments.map(comment=>comment.id ===pid ? {...comment,replies:comment.replies.map((reply)=>(reply.id===id ? {...reply,score:op==="inc" ?reply.score+1:reply.score-1}:reply))}:comment))
  }
  else{

    setComments(comments.map(comment=>comment.id ===id ? {...comment,score:op==="inc" ?comment.score+1:comment.score-1}:comment))
  }
  
}
  return (
  <>
  <div className='container'>
    <Comments onDelete={deleteCom} onLike={like} onEdit={edit} onReply={reply} formCon={form} formMgt={setForm} onAdd={addComment} auth={currentUser} comments={comments} />
  </div>
  {popUp.popUpOpen && <PupUp onSub={deletef} onOpera={setPupUp} />}
  
  </>
  );
}

export default App;
