import { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {
    const [dataUniv, setDataUniv] = useState([])

    const getData = async () => {
        try{
        const response = await axios.get('http://universities.hipolabs.com/search?country=United+Kingdom')
        console.log(response.data)
       setDataUniv(response.data)
    }catch{
        console.log('error')
    }
    }
    useEffect(() => {
        getData()
    },[])

    return (
               <div className="overflow-x-auto">
               <table className="table table-zebra">
                 {/* head */}
                 <thead>
                   <tr>
                     <th>Name</th>
                     <th>Country</th>
                     <th>Domain</th>
                     <th>Web Pages</th>
                   </tr>
                 </thead>
                 <tbody>
                   {/* row 1 */}
                   {dataUniv.map((univ) => (
                         <tr key={univ.name}>
                         <td>{univ.name}</td>
                         <td>{univ.country}</td>
                         <td>{univ.domains}</td>
                         <td>{univ.web_pages}</td>
                       </tr>
                   ))}
                 </tbody>
               </table>
             </div>
    )
}

export default Home