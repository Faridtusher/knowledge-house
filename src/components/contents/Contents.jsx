import { useEffect } from "react";
import { useState } from "react";
import Content from "../Content/Content";
import PropTypes from 'prop-types'


const Contents = ({handelAddToCarts, handelTimes}) =>{

   const [contents, setContents] = useState([]);
   useEffect( () =>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => setContents(data))
   } , []) 


   return(
      <div className="md:w-2/3">
         {
            contents.map(content => <Content
               key={content.id} 
               content = {content}
               handelAddToCarts = {handelAddToCarts}
               handelTimes={handelTimes}
            ></Content>)
         }
      </div>
   )
}

Contents.propTypes = {
   handelAddToCarts : PropTypes.func,
   handelTimes : PropTypes.func
}

export default Contents;