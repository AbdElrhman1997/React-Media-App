import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.css';

function App() {
  
  

  // useEffect(()=>{
  //   axios.post('https://jsonplaceholder.typicode.com/posts?_limit=5',
  //   {
  //     id:2,
  //     title:"title from dev",
  //     body:"body from dev"
  //   })
  //   .then((res)=>{
  //     const newPostsData =[...PostsData,res.data];
  //     setPostsData(newPostsData);
  //     // console.log(PostsData);
  //   })
  //   .catch((err)=>{
  //     console.error(err);
  //   })
  // },[setPostsData])

    return (
    <section className="App">
        <Header/>
        <Posts/>
    </section>
  );
}
export default App;
