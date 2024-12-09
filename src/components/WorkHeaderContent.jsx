import React from 'react'

const WorkHeaderContent = ( { work, index, handleToggle} ) => {
  return (
    <a href={'#' + work.title + index}>
        <div className='ml-16 m-2 select-none hover:cursor-pointer' onClick={handleToggle}>
            <div>
                <h1 className='text-2xl text-semibold drop-shadow-lg title'> { work.title } </h1>
            </div>
            <div>
                <h1 className='ml-5 text-lg text-semibold drop-shadow-lg'> { work.shortdesc } </h1>
            </div>
        </div>
    </a>
  )
}

export default WorkHeaderContent