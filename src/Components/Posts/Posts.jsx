import React,{useState,useEffect} from 'react';
import NewPost from '../NewPost/NewPost';
import PostCard from '../PostCard/PostCard';
import axios from 'axios';
import './Posts.css';
import CommentContext from '../../Context/Context';

const Posts = () => {
    const [postsData,setPostsData]=useState([]);
    const [commentsData,setCommentsData]=useState([]);


    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=20").
        then((res)=>{
            setPostsData(res.data);
        })
        .catch(err=>{
            console.error(err);
        })
        axios.get("https://jsonplaceholder.typicode.com/comments?_limit=5")
        .then((res)=>{
            console.log(res.data);
            setCommentsData(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])

    return (
        <main className='container'>
            <CommentContext.Provider value={{commentsData:commentsData , setCommentsData:setCommentsData}}>
                <NewPost postsData={postsData} setPostsData={setPostsData}/>
                <section className='posts'>
                    {
                        postsData?postsData.map((ele,index)=>{
                            return(
                            <PostCard NumOfPost={index} postsData={postsData} setPostsData={setPostsData}/>
                            )
                        }):null
                    }
                </section>
            </CommentContext.Provider>
        </main>
    )
}

export default Posts;





// import React,{useState,useEffect, useRef} from 'react'
// import Comments from '../Comments/Comments';
// import NewPost from '../NewPost/NewPost';
// import imgPosts from '../../Images/pexels-sovit-chetri-3344325.jpg'
// import {BsHeartFill,BsFillChatLeftTextFill} from 'react-icons/bs'
// import {MdEdit} from 'react-icons/md' 
// import {GrClose} from 'react-icons/gr'
// import axios from 'axios'
// import './Posts.css'

// const Posts = () => {
//     const [PostsData,setPostsData]=useState([]);
//     const [CommentsDisplay,setCommentsDisplay]=useState(false);
//     const [EditPost,setEditPost]=useState(false);

//     useEffect(()=> {
//         axios.get("https://jsonplaceholder.typicode.com/posts?_limit=2").
//         then((res)=>{
//             setPostsData(res.data);
//         })
//         .catch(err=>{
//             console.error(err);
//         })
//         },[PostsData])
        
//     const removePostHandel = (PostId)=>{
//         const removedPost = PostsData.filter(el =>{
//             return (el.id !==  PostId) })
//         setPostsData(removedPost)
//       // console.log(PostsData);
//     }

//     const handleLove = (e)=>{
//         e.target.classList.toggle('love');
//     }

//     const handleComments=(e)=>{
//         if(CommentsDisplay){
//             setCommentsDisplay(false);
//         }
//         else {
//             setCommentsDisplay(true);
//         }
//     }

//     const handleEditPosts = (PostId)=>{
//         for (let i= 0; i < PostsData.length; i++) {
//             if(CommentsDisplay===false&&PostsData[i].id===PostId) {
//                 setCommentsDisplay(true);
//             }
//             else {
//                 setCommentsDisplay(false);
//             }
            
//         }
//     }

//     return (
//         <div className='container'>
//             <NewPost PostsData={PostsData} setPostsData={setPostsData}/>
//             <div className='posts'>
//             {
//                 PostsData.map(ele => {
//                     return (
//                     <div className='post col-12' id={ele.id} key={ele.id}>
//                         <div className='d-flex justify-around'>
//                             <img src={imgPosts} className='imgPosts'/>
//                             <div>
//                                 <p className='m-0 mx-3 fw-bold'>AbdElrhman Mohamed</p>
//                                 <p className='title mx-3'>{ele.title}</p>
//                             </div>
//                             <div className='btn' onClick={()=>{removePostHandel(ele.id)}}><GrClose/></div>
//                         </div>
//                         {   
//                             EditPost ? <textarea className='EditBody'>{ele.body}</textarea>
//                             : <div className='body'>{ele.body}</div>
//                         }
//                         <div className='postIcons'>
//                             <div>
//                                 <BsHeartFill className='.postIcon mx-3' onClick={handleLove}/>
//                                 <BsFillChatLeftTextFill className='.postIcon' onClick={()=>{handleComments(ele.id)}}/>
//                             </div>
//                             <div><MdEdit className='.postIcon' onClick={handleEditPosts}/></div>
//                         </div>
//                         <Comments  CommentsDisplay={CommentsDisplay}/>
//                     </div>
//                     )
//                 })
//             }
//             </div>
//         </div>
//     )
// }

// export default Posts
