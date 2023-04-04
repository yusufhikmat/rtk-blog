import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './PostSlice';
import { selectAllUsers } from '../users/UsersSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(title && content){
            dispatch(
                postAdded(title, content,userId)
            )
        }
        setTitle('');
        setContent("")
    }
    const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
            {user.name}
        </option>)
    )
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='title'>Title</label>
                <input 
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div>
            <label htmlFor='userId'>User</label>
                <select 
                    id="userId"
                    value={userId}
                    onChange={(e)=>setUserId(e.target.value)}>
                        <option value=""></option>
                        {usersOptions}
                    </select>
                
            </div>
            <div>
            <label htmlFor='content'>Content</label>
            <textarea 
                type="text"
                id="content"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />
            
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddPostForm