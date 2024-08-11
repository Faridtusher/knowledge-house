import { useEffect } from "react";
import { useState } from "react";
import Content from "../Content/Content";

const Contents = () =>{

   const [contents, setContents] = useState([]);
   useEffect( () =>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => setContents(data))
   } , []) 


   return(
      <div className="md:w-2/3 bg-slate-50">
         <h2>Hello : {contents.length}</h2>
         {
            contents.map(content => <Content
               key={content.id} content = {content}
            ></Content>)
         }
      </div>
   )
}

export default Contents;