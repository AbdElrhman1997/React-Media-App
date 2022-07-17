import React,{useState,useContext,useEffect} from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import CommentCard from '../CommentCard/CommentCard';
import CommentContext from '../../Context/Context';
import './Comments.css';

const Comments = ({commentsDisplay}) => {    
    const {commentsData} = useContext(CommentContext);
    const [localComments,setLocalComments]=useState([]);

    useEffect(()=>{
        setLocalComments(commentsData);
    },[])
    //add New Comment
    let valNewComment='';

    const handleChange=(e)=>{
        valNewComment=e.target.value;
    }
    const addNewComment = (e)=>{
        const NewComment = 
        {
            id:Math.floor(Math.random()*1000),
            name:'New Comment',
            body:valNewComment
        }
        setLocalComments([NewComment,...localComments]);
        document.querySelector('.inputComment').value='';
    }

    return (
        <div className={`comments ${commentsDisplay?'d-block':'d-none'}`}>
            <div className='position-relative'>
                <label className='text-black-50 lableComment'>add new Comment</label>
                <textarea type='text' className='inputComment' onChange={handleChange}/><hr/>
                <AiOutlineArrowRight className='iconInputComment' onClick={addNewComment}/>
            </div>
            {
                localComments?localComments.map((ele,index) => {
                    return (
                        <div>
                            <hr className={index===0?'d-none':''}/>                        
                            <CommentCard NumOfComment={index} key={ele.id} localComments={localComments} setLocalComments={setLocalComments}/>
                        </div>
                    )
                }):''
            }
            </div>

    )
}

export default Comments;

