import dummy from "../db/data.json"
import './Dummy.scss'

export default function Dummy(){
    console.log(dummy)
    return <div>
        <div>
            {dummy.map(dummy => (
                <ul  className="ListDummy" key={(dummy.name)}>  
                    <li> Name: {dummy.name}</li>
                    <li> Email: {dummy.email}</li>
                    <li> Body: {dummy.body}</li>
                </ul> 
            ))} 
        </div>
    </div>
}