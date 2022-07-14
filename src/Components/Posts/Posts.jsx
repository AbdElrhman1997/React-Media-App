import React,{useState,useEffect} from 'react'
import NewPost from '../NewPost/NewPost';
import axios from 'axios'
import './Posts.css'

const Posts = () => {
    
    const [PostsData,setPostsData]=useState([]);

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5").
        then((res)=>{
            setPostsData(res.data);
            // console.log(res.data);
        })
        .catch(err=>{
            console.error(err);
        })
        },[setPostsData])
        
        const removePostHandel = (PostId)=>{
        const removedPost = PostsData.filter(el =>{
        return (el.id !==  PostId) })
        setPostsData(removedPost)
      // console.log(PostsData);
    }


    return (
        <div className='container'>
            <NewPost PostsData={PostsData} setPostsData={setPostsData}/>
            <div className='posts'>
            {
                PostsData.map(ele => {
                    return (
                    <div className='post' id={ele.id} key={ele.id}>
                    <div className='btn btn-danger' onClick={()=>{removePostHandel(ele.id)}}>X</div>
                    <div className='title'>{ele.title}</div>
                    <div className='body'>{ele.body}</div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Posts