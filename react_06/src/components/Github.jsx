import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudary')
    //         .then((response) => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <h2>Profile : {data.login}</h2>
            Github_public_repositories : {data.public_repos}
            <img src={data.avatar_url} width={300} alt="" />
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/prathyarthi')
    return response.json()
}
