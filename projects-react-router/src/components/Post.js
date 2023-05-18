import { useEffect, useState } from "react"

function fetchContents(setContent, url, i, comment) {
    // i commenti sotto il post con una query GET a es.:
    // https://jsonplaceholder.typicode.com/posts/1/comments.
    url = url + '/' + i + '/' + comment

    async function fetchPostsInfo() {
        let res = await fetch(url)
        let json = await res.json()
        setContent(json)
    }
    fetchPostsInfo()
}

function Comment({ comment }) {
    return (
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

function PostInEvidenza({ postEvidenza, comments }) {
    return (
        <div>
            <h2 className="firstUp">{postEvidenza.title}</h2>
            <p className="body firstUp">{postEvidenza.body}</p>
            <div className="commentSection">
                <h2>Comments</h2>
                <div className="commentsList">
                    {comments.map((comment) => {
                        return (
                            <Comment key={comment.id} comment={comment} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default function Forum({ post }) {
    let [comments, setComments] = useState([])
    let url = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        fetchContents(setComments, url, post.id, 'comments')
    }, [post])

    return (
        <div>
            <PostInEvidenza postEvidenza={post} comments={comments} />
        </div>
    )
}


