import React from 'react'

const Packages = () => {
  const Packages =[
    {id:1, name:"HAJJ",description:'Essential Packing Tips For Your Hajj',Image:'/img3.jpeg'},
    {id:2, name:"UMRAH",description:'The Ultimate Guide to Performing Umrah',Image:'/img.jpeg'},
    {id:3, name:"PRAY",description:'Personal Stories fro the Scared Journey',Image:'/img1.jpeg'},
    {id:4, name:"MANASIK",description:'Manasik',Image:'/img4.jpeg'},
    {id:5, name:"TRANSPORTATION",description:'Our best transportation',Image:'/img5.jpeg'},
    {id:6, name:"TOUR",description:'Haram Shariff,Masjid-e-Nabvi,and other places',Image:'/img6.jpeg'},
  ]
  return (
    <div>
  <h1>Packages</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda eerendis soluta laudantium dolores nesciunt tenetur rem.</p>
      <div className='package'>
        {Packages.map((Packages)=>(
          <div key={Packages.id} className='package-cart'>
            <img src={Packages.Image }  alt={Packages.name}/>
            <h3>{Packages.name}</h3>
            <p>{Packages.description}</p>
           <button>BOOK NOW</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Packages

