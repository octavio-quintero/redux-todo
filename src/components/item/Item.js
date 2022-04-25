import React from 'react'
import { Checkbox } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setCheck } from '../../features/todoSlice'
import './Item.css'


const Item = ({name, done, id}) =>{
  const dispatch = useDispatch()

  const handleCheck = () => {
     dispatch(setCheck(id))
  };

  return (
    <div className='todoItem'>
        <Checkbox  
            checked={done}
            color='primary'
            onChange={handleCheck}  
            inputProps={{'aria-label':'secondary checkbox'}}/>
        <p className={done && 'todoItem--done'} >{name}</p>
    </div>
  )
}

export default Item