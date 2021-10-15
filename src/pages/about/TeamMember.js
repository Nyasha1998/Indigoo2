import React from 'react'


const TeamMember = ({ handlePointerEvent, name, role, press, img, cardStyle}) => {

    const style = {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        marginBottom: '0.5rem'
    } 

    return (
        <article className={cardStyle}>
        <div 
        className="card"
        onMouseDown={handlePointerEvent}
        onTouchStart={handlePointerEvent}  
         >
            <img  src={img} alt={name} />
            <h2 style={style}>{name}</h2>
            <h2 style={style}>{role}</h2>
            <p style={style}>{press}</p>
        </div>
        </article>        
    )
}

export default TeamMember
