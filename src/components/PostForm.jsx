import React, { useState } from "react";
import MyButton from "./UI/button/myButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
      }

    return (
        <div>
            {/* Управляемый компонент */}
            <form className="bebe">
                <MyInput 
                value={post.title} 
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Название поста"
                />
                <br/>
                <MyInput 
                value={post.body} 
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="Описание поста"
                />
                <br/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
        </div>
    )
}

export default PostForm;