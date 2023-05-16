import { useEffect, useState } from "react"

function fetchContents(setContent,url,i,comment){
    // la colonna di sinistra e’ stata ottenuta con una query GET a
    // https://jsonplaceholder.typicode.com/posts, la parte centrale con una query GET a
    // https://jsonplaceholder.typicode.com/posts/1 ed i commenti sotto il post con una query GET
    // a https://jsonplaceholder.typicode.com/posts/1/comments.
        if(i && !comment){
            // chiamata get per uno specifico post
            url=url+'/'+i   
        }else if(i && comment){
            // chiamata get per i commenti di uno specifico post
            url=url+'/'+i+'/'+comment    
        }
        
         async function fetchPostsInfo(){
            let res=await fetch(url)
            let json=await res.json()
            setContent(json)
        }
        fetchPostsInfo()
}

function ListPost({posts,setIndex}){
    return(
        <ul>
            {posts.map((post,i)=>{
                    return( 
                    <li 
                    key={i}
                    className="firstUp"
                    onClick={()=>{setIndex(post.id)}}>
                        {post.title}
                    </li> 
                    )
                })} 
        </ul>
    )
}

function PostsGallery({posts,setIndex}){
    return(
        <div>
            <h2>Gallery of posts</h2>
            <ListPost posts={posts} setIndex={setIndex}/>
        </div>
    )
}

function Comment({comment}){
    return(
        <>
        <div
        key={comment.id}>
            <p className="firstUp"> {comment.body} </p>
            <div className="userComment">
            <div><img src='https://static.vecteezy.com/ti/vettori-gratis/p1/2318271-icona-profilo-utente-vettoriale.jpg' width='30px'></img></div>
            <div><b>Nome:</b> {comment.name}</div> 
            <div><b>Email: </b>{comment.email}</div>
            </div>
        </div>
        </>
       
    )
}

function PostInEvidenza({postEvidenza,comments}){
    
    return(
        <div className="postEvidenza">
            <h2 className="firstUp">{postEvidenza.title}</h2>
            <p className="body firstUp">{postEvidenza.body}</p>
            <div className="commentSection">
                <h2>Comments</h2>
                <div className="commentsList">
                {comments.map((comment)=>{
                    return( 
                        <Comment key={comment.id} comment={comment}/>
                    )
                })}
                </div>
            </div>
        </div>

    )
}

export default function Forum(){
    let [posts,setPosts]=useState([])
    let [postEvidenza,setPostEvidenza]=useState([])
    let [comments,setComments]=useState([])
    let url='https://jsonplaceholder.typicode.com/posts'
    let [postIndex,setPostIndex]=useState(1)
    
    useEffect(()=>{
        fetchContents(setPosts,url)
    },[])

    useEffect(()=>{
        fetchContents(setPostEvidenza,url,postIndex)
        fetchContents(setComments,url,postIndex,'comments')
    },[postIndex])
            
    return(
        <>
        <h1>Il mio forum</h1>
        <div className="flex">
        <PostsGallery posts={posts} setIndex={setPostIndex}/>
        <PostInEvidenza postEvidenza={postEvidenza} comments={comments} index={postIndex}/>
        </div>
        </>
    )
}


