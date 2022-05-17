import Tabs from './Tabs/Tabs'
import './Skills.css'
import skillsImageLight from '../../Assets/light_skills.png'
import skillsImageDark from '../../Assets/dark_skills.png'
import React from "react";

const Skills = ({ openModal, setOpenModal, darkImages }) => {
    return (
        <div className='skills-section'>
            <div className="tabs-section">
                <Tabs
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            </div>
            <div className='image-section' >
                {
                    darkImages
                        ? <img src={skillsImageDark + '?' + new Date()} alt="" />
                        : <img src={skillsImageLight + '?' + new Date()} alt="" />
                }
            </div>
        </div>
    )
}

export default Skills