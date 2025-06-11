import React from 'react'

import Card1 from './components/Card1'
import Card from './components/Card'

const App = () => {

  const users = [
    
  {
    "name": "Arpit KM",
    "city": "Damanjodi",
    "age": 21,
    "profession": "Software Engineer",
    "profile_photo": "https://scontent.fvga5-1.fna.fbcdn.net/v/t39.30808-6/495571137_986600396980794_867957577859272317_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3on3m3Z9k2kQ7kNvwElYev_&_nc_oc=AdnKXmPQSaaJWq3RhtURANrYewSabars772_H3ntKWk1VIG8_Yxg5qNFYTsH3y8XzIQ&_nc_zt=23&_nc_ht=scontent.fvga5-1.fna&_nc_gid=OlyLGE8u-AGmRfNnrBZV9Q&oh=00_AfOkhNkGijFdZZngzZmNqAqbAUaF8prJhihdXpbRv6TbmQ&oe=684A3193"
  },
  {
    "name": "Ankit KM",
    "city": "Damanjodi",
    "age": 21,
    "profession": "Software Engineer",
    "profile_photo": "https://media.licdn.com/dms/image/v2/D5635AQHQYJgcMxwvfg/profile-framedphoto-shrink_800_800/B56Zbp8bp4GoAk-/0/1747681655800?e=1749751200&v=beta&t=fTTbpAWirQ0boDOpMetRNhn0eorfU-CQ0xwk1TJ3hZQ"
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
    
    <div className='bg-black m-5 h-screen '>
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

      <div className='p-10 '>
        {users.map(function(elem, idx) {
          return (
            <Card
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
