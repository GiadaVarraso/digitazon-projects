import { useEffect, useState } from "react"

function fetchContents(setContent,url,i,comment){
    // la colonna di sinistra e’ stata ottenuta con una query GET a
    // https://jsonplaceholder.typicode.com/posts, la parte centrale con una query GET a
    // https://jsonplaceholder.typicode.com/posts/1 ed i commenti sotto il post con una query GET
    // a https://jsonplaceholder.typicode.com/posts/1/comments.

    //controllo se la funzione è stata chiamata SOLO con i parametri setContent e url o meno 
        if(i!=undefined && comment==undefined){ //se il parametro i è definito ma comment no
            // vuol dire che la funzione è stata chiamata per ottenere il get di uno specifico post
            url=url+'/'+i //quindi modifico la stringa dell url come segue
        }else if(i && comment){//se il parametro i è definito ED ANCHE comment
            // vuol dire che la funzione è stata chiamata per ottenere il get dei commenti di uno specifico post
            url=url+'/'+i+'/'+comment // quindi modifico la stringa dell url come segue
        }
        //a questo punto , abbiamo l' url completo in base ai parametri ricevuti 
         async function fetchPostsInfo(){ //creo una funzione asincrona 
            let res=await fetch(url) //faccio la fetch dell url e uso il comando await per attendere che finisca prima di riempire la variabile
            let json=await res.json() //parso il risultato ottenuto dalla fetch
            setContent(json) //uso la funzione setContent passata come parametro per valorizzare gli state corrispondenti
        }
        fetchPostsInfo() //richiamo la funzione asincrona appena creata
}

function ListPost({posts,setIndex}){ // componente che renderizza la galleria dei posts
    let [postsObjs,setPostsObjs]=useState([]) //

    useEffect(()=>{
        let newArr=[...posts]
        for (let i = 0; i < newArr.length; i++) {
            newArr[i]={...posts[i],classe:'firstUp'}
        }
        setPostsObjs(newArr)
    },[posts])

    function handleClick(id){ //funzione chiamata al click sopra uno dei posts listati in gallery
        setIndex(id) // imposto l'indice del postInEvidenza
        setPostsObjs((prev)=>{ // per evidenziare in css quello selezionato al click modifico l array dei posts
            let newArr=[...prev] //copio il valore precedente in un array clone
            for (let i = 0; i < newArr.length; i++) { //ciclo su tutti i suoi elementi
                if(i==(id-1)){ //se l elemento attuale ha indice corrispondente a id-1 (i post.id partono da 1 non da 0)
                    newArr[i].classe='firstUp selected'//aggiungo la classe selected alla proprietà .classe dell oggetto attuale
                }else{ //altrimenti...
                    newArr[i].classe='firstUp' //devo cancellare i selected (eventuali) precedentemente messi nella proprietà .classe dell oggetto attuale
                }
            }
            //una volta ottenuto l array clone modificato posso restituirlo per fare il set dei nuovi posts
            return newArr
        })
    }

    return(
        <ul>
            {postsObjs.map((post,i)=>{
                    return( 
                    <li 
                    key={i}
                    className={post.classe}
                    onClick={()=>{handleClick(post.id)}}>
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
        <PostsGallery posts={posts} setIndex={setPostIndex} index={postIndex}/>
        <PostInEvidenza postEvidenza={postEvidenza} comments={comments} />
        </div>
        </>
    )
}


