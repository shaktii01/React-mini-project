import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'
function App() {
  const jobOpenings = [
    {
      id: 1,
      companyName: "Google",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
      postedTime: "1 day ago",
      post: "Senior UI/UX Developer",
      salary: "$120/hr",
      location: "Mumbai, India"
    },
    {
      id: 2,
      companyName: "Microsoft",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      postedTime: "3 days ago",
      post: "Frontend React Engineer",
      salary: "$180/yr",
      location: "Bangalore, India"
    },
    {
      id: 3,
      companyName: "Adobe",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1200px-Adobe_Corporate_Logo.png",
      postedTime: "5 hours ago",
      post: "Product Designer",
      salary: "$90/hr",
      location: "Remote"
    },
    {
      id: 4,
      companyName: "Amazon",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      postedTime: "1 week ago",
      post: "Full Stack Developer",
      salary: "$50/hr",
      location: "Hyderabad, India"
    },
    {
      id: 5,
      companyName: "Netflix",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
      postedTime: "2 weeks ago",
      post: "Junior Web Developer",
      salary: "$40/hr",
      location: "Pune, India"
    },
    {
      id: 6,
      companyName: "Spotify",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
      postedTime: "2 days ago",
      post: "React Native Developer",
      salary: "$200/yr",
      location: "Gurugram, India"
    },
    {
      id: 7,
      companyName: "Airbnb",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
      postedTime: "4 days ago",
      post: "UX Researcher",
      salary: "$110/hr",
      location: "Remote"
    },
    {
      id: 8,
      companyName: "Meta",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
      postedTime: "Just now",
      post: "Software Engineer III",
      salary: "$145/hr",
      location: "Noida, India"
    },
    {
      id: 9,
      companyName: "Tesla",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
      postedTime: "3 weeks ago",
      post: "Front-End Architect",
      salary: "$160/hr",
      location: "Bangalore, India"
    },
    {
      id: 10,
      companyName: "Apple",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
      postedTime: "1 month ago",
      post: "iOS Developer",
      salary: "$2500/yr",
      location: "Chennai, India"
    }

  ];




  return (
    <>
      <div className="parent">

        {
          jobOpenings.map((e) => {
            return <Card comp={e.companyName} complogo={e.companyLogo} postedTime={e.postedTime} post={e.post} salary={e.salary} location={e.location} />
          })
        }




      </div>
    </>
  )
}

export default App
