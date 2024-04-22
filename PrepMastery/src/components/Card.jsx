import React from 'react'
import { Link } from 'react-router-dom'

function Card({data}) {
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={data.image} alt={data.title} className="rounded-xl w-56 h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <Link to={`/${data.com_link.toLowerCase().replace(/ /g,'')}`}>
                    <button className="btn btn-primary">Join Now</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Card