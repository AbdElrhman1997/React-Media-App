import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './NewPost.css'

const NewPost = ({PostsData,setPostsData}) => {
    
    const addNewPost =(e)=>{
        const NewPost=
        {
            id:Math.floor(Math.random()*10),
            title:'New Post',
            body:e.target.previousElementSibling.value
        }
        setPostsData([NewPost,...PostsData]);
        e.target.previousElementSibling.value='';
    }

    return (
        <div className='newPost'>
            <div className='input'>
                <label className='text-black-50'>add new post</label>
                <div className='inputField'>
                    <textarea type='text' className='inputText'/>
                    <AiOutlineArrowRight className='iconInput' onClick={addNewPost}/>
                </div>
            </div>
        </div>
    )
}

export default NewPost