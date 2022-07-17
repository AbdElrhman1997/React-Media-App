import React,{useState}from 'react';
import {GrClose} from 'react-icons/gr';
import {MdEdit,MdEditOff} from 'react-icons/md';
import './CommentCard.css';

const CommentCard = ({NumOfComment,localComments,setLocalComments}) => {
    const [editComment,setEditComment] =useState();
    

    const removeCommentHandel = (CommentId)=>{
        const NewComments=localComments.filter((e)=>{
            return(e.id!==CommentId);
        })
        setLocalComments([...NewComments]);
    }

    const handleEditComment = ()=>{
        if(editComment) {
            setEditComment(false);
            localComments[NumOfComment].body=document.querySelector('#EditBody').value;
        }
        else {
            setEditComment(true);
        }
    }

    return (
        <div id='commentCard'>
            <div className='comment' id={localComments[NumOfComment].id}>
                <div className='row'>
                    <div className='imgComments col-2'>{localComments[NumOfComment].name.charAt(0)}</div>
                    <p className='title col-lg-10 col-md-10 col-sm-10 col-7'>{localComments[NumOfComment].name}</p>
                    {
                        editComment?<div className='btn commentIcon open'><MdEditOff onClick={handleEditComment}/></div>
                        :<div className='btn commentIcon'><MdEdit onClick={handleEditComment}/></div>
                    }
                    <div className='btn iconP col-2' onClick={()=>{removeCommentHandel(localComments[NumOfComment].id)}}><GrClose/></div>
                </div>
                {   
                    editComment?<textarea id='EditBody' cols='120' className='EditBody'>{localComments[NumOfComment].body}</textarea>
                    :<div className='body'>{localComments[NumOfComment].body}</div>
                }
            </div>
        </div>
    )
}

export default CommentCard;