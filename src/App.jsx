import axios from "axios"
import Card from "./components/Card"
import { useEffect, useState } from "react"

const App = () => {
  const [data, setData] = useState([])
  const getData = async() =>{
    const res = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
    setData(res.data)
  }

  useEffect(()=>{
    getData()
  },[])
  
  return (
    <div style={{ height: '100vh', overflowX: 'scroll', whiteSpace: 'nowrap',overflowY: "hidden", scrollSnapType: "x mandatory" }}>
    {data.map(function(element,idx){
      return <Card key={idx} name={element.author} url={element.download_url}/>
    })}
    </div>
  )
}

export default App
