import { Outlet, Link, json } from 'react-router-dom'
import { useEffect, useState } from 'react'

function fetchContents(setContent, url) {

    async function fetchPostsInfo() {
        let res = await fetch(url)
        let json = await res.json()
        setContent(json)
    }
    fetchPostsInfo()
}

const Layout = () => {

    let [posts, setPosts] = useState([])
    let url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        fetchContents(setPosts, url)
    }, [])

    return (
        <>
            <h1>Il mio forum</h1>
            <div className='flex'>
               <div>
                    <h2>Gallery of posts</h2>
                    <ul>
                        {/*<li> <Link to='/home'>Home</Link> </li>*/}
                        {posts.map((post) =>
                            <li key={post.id}
                                className="firstUp">
                                <Link to={`/post${post.id}`}> {post.title} </Link>
                            </li>)
                        }
                    </ul>
               </div>
               <Outlet></Outlet> 
            </div>
        </>
    )
}

export default Layout;