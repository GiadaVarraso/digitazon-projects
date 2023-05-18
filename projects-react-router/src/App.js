import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import { useEffect, useState } from 'react'

function fetchContents(setContent, url) {
  async function fetchPostsInfo() {
    let res = await fetch(url)
    let json = await res.json()
    setContent(json)
  }
  fetchPostsInfo()
}

function App() {
  let [posts, setPosts] = useState([])
  let url = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    fetchContents(setPosts, url)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          {posts.map((post) =>
            <Route key={post.id} path={`post${post.id}`} element={<Home post={post}></Home>}></Route>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
