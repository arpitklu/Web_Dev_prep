import React from 'react'

const Card1 = (props) => {
    console.log(props.profile_photo)
  return (
    <>
        <div className='h-70 r-5 bg-white text-amber-700 ml-4 rounded inline-block text-center p-4'>
        <img className='mx-auto h-20 w-20 rounded-full mb-3 object-cover' src={props.profile_photo} alt="" />
        <h1 className='text-2xl font-semibold mb-2'>{props.name}</h1>
        <h2 className='mb-2'>{props.city}, {props.age}</h2>
        <h3 className='mb-4'>{props.profession}</h3>
        <h3 className='mb-4'>Ready to Help!!</h3>
        <button className= 'hover:cursor-pointer bg-emerald-700 text-white px-4 py-2 rounded text-medium active:scale-90'>Add User</button>
        </div>
    </>
  )
}

export default Card1
