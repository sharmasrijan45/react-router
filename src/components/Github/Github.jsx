
import { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
 const data = useLoaderData()
//    const [data , setdata] = useState([])

//     useEffect (()=>{
//      fetch('https://api.github.com/users/sharmasrijan45').then
//      ((res)=> res.json()).then( (data)=> {
//         setdata(data)
//      })

//     } , [])
    return (
       <>
       <div className=' text-center m-8 bg-gray-300 text-white'>
        
                Github followers : {data.followers}
                <img  src={data.avatar_url}
                alt=' my img '
              width={300} />

       </div>
       </> 
    )
}

export default Github

export const  githubloader = async ()=>
{
     const response = await fetch ("https://api.github.com/users/sharmasrijan45")
     const data = await response.json()
     return data
}
