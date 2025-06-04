import React from 'react'

import Card1 from './components/Card1'

const App = () => {

  const users = [
    
  {
    "name": "Aarav Mehta",
    "city": "Mumbai",
    "age": 29,
    "profession": "Software Engineer",
    "profile_photo": "https://images.unsplash.com/photo-1638148870156-b67e32b90938?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwaW5kaXZpZHVhbCUyMHBob3RvJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Diya Sharma",
    "city": "Bengaluru",
    "age": 24,
    "profession": "UX Designer",
    "profile_photo": "https://images.unsplash.com/photo-1649894222986-bffa08903bdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZSUyMGluZGl2aWR1YWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Rohan Verma",
    "city": "Delhi",
    "age": 32,
    "profession": "Data Analyst",
    "profile_photo": "https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=JepBOGOGiPwRF2z0pwiADeUZhsk6eFt4eKliWjzDGHo="
  },
  {
    "name": "Sneha Iyer",
    "city": "Chennai",
    "age": 27,
    "profession": "Marketing Manager",
    "profile_photo": "https://images.unsplash.com/photo-1652278863005-82ada0407039?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlb3BsZSUyMGluZGl2aWR1YWwlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Kabir Khan",
    "city": "Hyderabad",
    "age": 35,
    "profession": "Cybersecurity Consultant",
    "profile_photo": "https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.webp?a=1&b=1&s=612x612&w=0&k=20&c=WDut88fKkZMl0aqIC7s7GmZuvnv4xN9xsqdhXtYqpqE="
  }


  ]

  

  return (
    
    <div className='bg-black h-screen'>
      <div className='p-10 '>
        {users.map(function(elem, idx) {
          return (
            <Card1
              key={idx}
              name={elem.name}
              city={elem.city}
              age={elem.age}
              profession={elem.profession}
              profile_photo={elem.profile_photo}
            />
          );
        })}
      </div>
      
    </div>
  )
}

export default App
