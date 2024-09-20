import React from 'react'
import { Link } from 'react-router-dom';


const InfoBox = ({text, link, btntext}) => (
    <div className='info-box'>
        <p className=' font-medium sm:text-xl text-center text-sm'>{text}</p>
        <Link to={link} className=' neo-brutalism-white neo-btn' >
            {btntext} 
        </Link>
    </div>
)


const renderInfo = {
    1: (
        <h1 className=' sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className=' font-semibold'> Bhakti </span>! 👋 <br /> A Software Engineer.
        </h1>
    ),
    2: (
        <InfoBox 
            text = " Consistently enhancing my skills to develop innovative digital solutions that address real-world challenges "
            link= "/about"
            btntext = "Learn More"
        />
    ),
    3: (
        <InfoBox 
            text = " Experimenting with multiple projects. Curious to view the adventure? "
            link= "/projects"
            btntext = "visit My Portfolio"
        />
    ),
    4: (
        <InfoBox 
            text = " Need a project Done or looking for a Dev? "
            link= "/contact"
            btntext = "Let's Talk"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderInfo[currentStage] || null;
}

export default HomeInfo