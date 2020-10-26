import React from 'react' ;
import './card.css'

const Card = ({name, email, id}) => {
    return(
        <div className= ' card tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?150x150`}  alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;