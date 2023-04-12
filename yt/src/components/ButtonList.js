import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const List = ["All","Virat Kohli","Gaming","songs","Live","Soccer","Cricket","Cooking","Valentines","Football"]
  return (
    <div className='flex'>
      {List.map(list=>{
        return <Button name={list}/>
      })}
     
    </div>
  )
}

export default ButtonList