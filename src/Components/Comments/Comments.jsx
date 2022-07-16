import React,{useState,useEffect} from 'react'
import NewPost from '../NewPost/NewPost'
import imgPosts from '../../Images/pexels-sovit-chetri-3344325.jpg'
import {GrClose} from 'react-icons/gr'
import {AiOutlineArrowRight} from 'react-icons/ai'
import axios from 'axios';
import './Comments.css'

const Comments = ({CommentsDisplay}) => {
    const[CommentsData,setCommentsData]=useState([]);
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments?_limit=5")
        .then((res)=>{
            console.log(res.data);
            setCommentsData(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })

    },[setCommentsData])
    
    
    const removeCommentHandel = (CommentId)=>{
        const NewComments=CommentsData.filter((e)=>{
            return(e.id!==CommentId);
        })
        setCommentsData([...NewComments])
    }
    
    const addNewComment = (e)=>{
        // console.log(e.target.previousElementSibling.previousElementSibling);
        const NewComment = 
        {
            id:Math.floor(Math.random()*1000),
            name:'New Comment',
            body:e.target.previousElementSibling.previousElementSibling.value
        }
        setCommentsData([NewComment,...CommentsData]);
        e.target.previousElementSibling.previousElementSibling.value=''
    }
    
    return (
        <div className={`comments ${CommentsDisplay?'d-block':'d-none'}`}>
            <div className='position-relative'>
                <label className='text-black-50 lableComment'>add new Comment</label>
                <textarea type='text' className='inputComment'/><hr/>
                <AiOutlineArrowRight className='iconInputComment' onClick={addNewComment}/>
            </div>
            {
                CommentsData.map((ele,index) => {
                    return (
                    <div className='comment' id={ele.id} key={ele.id}>
                        <div className='d-flex justify-around'>
                            <div className='imgComments'>{ele.name.charAt(0)}</div>
                            <p className='title mx-3'>{ele.name}</p>
                            <div className='btn' onClick={()=>{removeCommentHandel(ele.id)}}><GrClose className='transform'/></div>
                        </div>
                        <div className='body'>{ele.body}</div>
                        <hr className={index===CommentsData.length-1||CommentsData.length===0?'d-none':''}/>                            
                    </div>
                    )
                })
            }
            </div>

    )
}

export default Comments