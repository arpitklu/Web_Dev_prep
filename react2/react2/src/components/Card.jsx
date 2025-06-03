import React from 'react'

const Card = (user) => {
    console.log(user.userN)

  return (
    <div>
        <h1 className='text-xl font-extrabold text-black'>UserName is {user.userN}</h1>
    </div>
  )
}

export default Card
