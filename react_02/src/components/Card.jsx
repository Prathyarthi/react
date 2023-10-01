import React from 'react'

function Card(props) {
    return (
        <div><img src="https://images.pexels.com/photos/18057909/pexels-photo-18057909/free-photo-of-three-parakeets-perching-on-a-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <h1 className='text-2xl bg-green-500 p-3 rounded'>Photos!</h1>
            <p>Hello, I am { props.name}</p>
        </div>
    )
}

export default Card;