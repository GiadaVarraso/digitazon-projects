import { useEffect, useState } from "react"

function fetchContents(setContent,url,i,comment){
    // la colonna di sinistra si ottiene con una query GET a
    // https://jsonplaceholder.typicode.com/posts, la parte centrale con una query GET a es.:
    // https://jsonplaceholder.typicode.com/posts/1 ed i commenti sotto il post con una query GET a es.:
    // https://jsonplaceholder.typicode.com/posts/1/comments.

    //controllo se la funzione è stata chiamata SOLO con i parametri setContent e url o meno 
        if(i!==undefined && comment===undefined){ //se il parametro i è definito ma comment no
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
    let [postsObjs,setPostsObjs]=useState([]) //lo stato dei posts (che sono degli oggetti , a cui aggiungo la proprietà classe)

    useEffect(()=>{ //questo useEffect filla lo state postsObjs
        let newArr=[...posts] //clono in un array temporaneo il valore dell array di oggetti del parametro (i posts)
        for (let i = 0; i < newArr.length; i++) { //itero sull array temporaneo 
            newArr[i]={...posts[i],classe:'firstUp'} //clono l oggetto che stava alla stessa posizione in posts e aggiungo la proprietà classe impostandola a 'firstUp' ,perchè voglio che tutti gli oggetti di base abbiano questa classe
        }
        setPostsObjs(newArr) //aggiorno lo stato dei posts con il risultato memorizzato nell array temporaneo
    },[posts]) //questo useEffect viene fatto solo se cambia posts (in teoria solo all inizio)

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
    //creo la lista html
    return(
        <ul> 
            {postsObjs.map((post,i)=>{ //mappo sui posts
                    return( 
                    <li  //creo i list items
                    key={i}
                    className={post.classe} //valorizzo la classe (sempre aggiornata vedi righe precedenti)
                    onClick={()=>{handleClick(post.id)}}>  {/*funzione richiamata al click a cui passo id*/}
                        {post.title}
                    </li> 
                    )
                })} 
        </ul>
    )}

//FIXME FORSE QUESTO COMPONENT NON è COSI UTILE , POSSO FARE MARGE CON ListPost?
function PostsGallery({posts,setIndex}){ //componente Galleria posts  
    // aggiungo il componente lista dei post
    return(
        <div>
            <h2>Gallery of posts</h2>
            <ListPost posts={posts} setIndex={setIndex}/> 
        </div>
    )
}

function Comment({comment}){ //questo è il componente che renderizza ogni singolo commento
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

function PostInEvidenza({postEvidenza,comments}){ //componente principale della sezione dx
    //con il post selezionato e le sue corrispettive informazioni
    return(
        <div className="postEvidenza">
            <h2 className="firstUp">{postEvidenza.title}</h2>
            <p className="body firstUp">{postEvidenza.body}</p>
            <div className="commentSection">
                <h2>Comments</h2>
                <div className="commentsList">
                {comments.map((comment)=>{// mappo sui commenti e per ogni comment renderizzo il component
                    return( 
                        <Comment key={comment.id} comment={comment}/>
                    )
                })}
                </div>
            </div>
        </div>

    )
}

export default function Forum(){ //il componente principale di default 
    let [posts,setPosts]=useState([]) // state per l array di tutti i posts
    let [postEvidenza,setPostEvidenza]=useState({}) // state per il singolo post selezionato
    let [comments,setComments]=useState([]) //state dell array di commenti del post in questione
    let url='https://jsonplaceholder.typicode.com/posts' //l url generico che mi permette di ricavare tutti i post e con l aggiunta di indice e stringa 'comments' anche il singolo post ed i relativi commenti 
    let [postIndex,setPostIndex]=useState(1) //indice del post che vogliamo visualizzare
    
    useEffect(()=>{ //questa useEffect viene fatta per ricavare tutti i post 
        fetchContents(setPosts,url) //richiama la funzione che fa la fetch dei dati e gli passa il setPost (per aggiornare lo state di tutti i posts) 
    },[])//viene effettuata una sola volta

    useEffect(()=>{//questa useEffect viene fatta per ricavare un singolo post ed i suoi commenti
        fetchContents(setPostEvidenza,url,postIndex) //richiama la funzione che fa la fetch e gli passa il setPost ma anche l indice, per costruire l URL che recupera un singolo post
        fetchContents(setComments,url,postIndex,'comments')//richiama la funzione che fa la fetch e gli passa il setPost ma anche l indice e la stringa 'comments' , per costruire l URL che recupera i commenti di un singolo post
    },[postIndex]) //viene fatta ogni volta che index cambia
            
    //renderizzo i componenti e gli passo le proprietà di cui hanno bisogno.
    //lato css mi occupo anche di flexare i due components attraverso la classe flex
    return(
        <>
        <h1>Il mio forum</h1>
        <div className="flex"> 
        <PostsGallery posts={posts} setIndex={setPostIndex} />
        <PostInEvidenza postEvidenza={postEvidenza} comments={comments} />
        </div>
        </>
    )
}


