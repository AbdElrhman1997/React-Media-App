import React,{useState} from 'react'
import Comments from '../Comments/Comments';
import imgPosts from '../../Images/pexels-sovit-chetri-3344325.jpg';
import {BsHeartFill,BsFillChatLeftTextFill} from 'react-icons/bs';
import {MdEdit,MdEditOff} from 'react-icons/md';
import {GrClose} from 'react-icons/gr';
import './PostCard.css';

const PostCard = ({NumOfPost,postsData,setPostsData}) => {
    const [commentsDisplay,setCommentsDisplay]=useState(false);
    const [EditPost,setEditPost]=useState(false);

    const removePostHandel = (PostId)=>{
        const removedPost = postsData.filter(el =>{
            return (el.id !==  PostId) 
        })
        setPostsData(removedPost);
    }

    const handleEditPosts = ()=>{
        if(EditPost) {
            setEditPost(false);
            postsData[NumOfPost].body=document.querySelector('#EditBody').value;
        }
        else {
            setEditPost(true);
        }
    }

    const handleLove = (e)=>{
        e.target.classList.toggle('love');
    }

    const handleComments=()=>{
        if(commentsDisplay){
            setCommentsDisplay(false);
        }
        else {
            setCommentsDisplay(true);
        }
    }

    return(
        <div id='postCard'>
            <div className='post' id={postsData[NumOfPost].id}>
                <div className='row'>
                    <img src={imgPosts} className='imgPost col-1'/>
                    <div className='col-sm-10 col-8'>
                        <p className='m-0 fw-bold'>AbdElrhman Mohamed</p>
                        <p className='title'>{postsData[NumOfPost].title}</p>
                    </div>
                    <div className='iconP col-lg-1 col-md-1 col-sm-1 col-2'><GrClose onClick={()=>{removePostHandel(postsData[NumOfPost].id)}}/></div>
                </div>
                {   
                    EditPost?<textarea id='EditBody' cols='120' className='EditBody'>{postsData[NumOfPost].body}</textarea>
                    :<div className='body'>{postsData[NumOfPost].body}</div>
                }
                <div className='postIcons'>
                    <div className='d-flex'>
                        <div className='postIcon'><BsHeartFill onClick={handleLove}/></div>
                        <div className='postIcon'><BsFillChatLeftTextFill className={commentsDisplay?'open':''} onClick={handleComments}/></div>
                    </div>
                    <div>
                        {
                            EditPost?<div className='postIcon open'><MdEditOff onClick={handleEditPosts}/></div>
                            :<div className='postIcon'><MdEdit onClick={handleEditPosts}/></div>
                        }
                    </div>
                </div>
                <Comments commentsDisplay={commentsDisplay}/>
            </div>
        </div>
    )
}

export default PostCard;
