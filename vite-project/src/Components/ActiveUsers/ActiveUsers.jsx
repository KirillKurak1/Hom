import "../ActiveUsers/ActiveUsers.scss"
import { v4 as uuidv4 } from 'uuid';
 
 export default function ActiveUsers({setActiveUsers,activeUsers}) {
    return (
        
    <div>
        {activeUsers.map((item) =>(
        <div className="act_user" key={uuidv4()}>
        <img className="ingg" src={item.img} alt="" />
        <h2>{item.context}</h2>
        <p>{item.kg}</p>
        <p>{item.price}</p>
        </div>
    ))}

    </div>
    );
 }
