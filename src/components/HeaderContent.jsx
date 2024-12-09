import React from 'react'

const HeaderContent = ( { title, desc, handleToggle, handleWorkToggle }) => {

  const toggle = () => {
    if(handleWorkToggle != null){
      handleWorkToggle();
    }else{
      handleToggle();
    }
  }

  return (
    <div className='m-2 select-none hover:cursor-pointer' onClick={toggle}>
        <div>
            <h1 className='text-white text-4xl text-bold drop-shadow-lg'> { title } </h1>
        </div>
        <div>
            <h1 className='text-white text-xl text-semibold ml-2'> { desc } </h1>
        </div>
    </div>
  )
}

export default HeaderContent