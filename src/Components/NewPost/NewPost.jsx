import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import './NewPost.css'

const NewPost = (props) => {
    
    let valNewPost='';

    const handleChange=(e)=>{
        valNewPost=e.target.value;
    }

    const addNewPost =(e)=>{
        if(e.target.previousElementSibling.value) {
            const NewPost=
            {
                id:(Math.floor(Math.random()*100)+(props.postsData.length+1)),
                title:'New Post',
                body:valNewPost
            }
            props.setPostsData([NewPost,...props.postsData]);
            e.target.previousElementSibling.value='';
        }
    }
    
    return (
        <div className='newPost'>
            <div className='input'>
                <label className='text-black-50'>add new post</label>
                <div className='inputField'>
                    <textarea type='text' className='inputText' onChange={handleChange}/>
                    <AiOutlineArrowRight className='iconInput' onClick={addNewPost}/>
                </div>
            </div>
        </div>
    )
}

export default NewPost