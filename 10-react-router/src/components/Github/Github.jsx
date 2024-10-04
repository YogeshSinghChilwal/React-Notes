import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then((res) => setData(res))

    // }, [])

  return (
    <div className='bg-gray-700 text-white p-5'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="profile" />
    </div>
  )
}

export default Github

//~ 5- react-router loader to fetch data from api we are using it because it fetch data when we hover and also cash its memory while useEffect only calls when page renders

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')

    return response.json()
}