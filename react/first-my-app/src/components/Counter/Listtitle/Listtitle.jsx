import './Listtitle.scss'
import React from 'react'
import { MdSmartDisplay } from 'react-icons/md'
        
const Listtitle = ({name,color}) => (
    <div>
        <h1 style={{color:color}} className="TitleName2">  Counter_Good/Bed {name}</h1>
    </div>
)

const Listtitle2 = () => (
    <div>
        <h1 /* onClick={} */ className="TitleName2 TitleName3">ToDo_List</h1>
    </div>
)

const Listtitle3 = () => (
    <div>
        <h1 /* onClick={} */ className="TitleName2 TitleName4">Calculator</h1>
    </div>
)

export {Listtitle, Listtitle2, Listtitle3};
