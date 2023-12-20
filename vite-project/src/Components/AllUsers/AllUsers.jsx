import "../AllUsers/AllUsers.scss"
import { v4 as uuidv4 } from 'uuid';

export default function AllUsers({allUsers,handleOpenModal,addActiveUser}) {

  return (
  <div className="cards_burgers">
     
      {allUsers.map((item) =>(
      <div className="all_user" key={uuidv4()} onClick={()=>{handleOpenModal(item.id)}}>
     <img src={item.img} alt="" />
      <h2>{item.price}</h2>
      <p>{item.context}</p>
      <p>{item.kg}</p>
      <div onClick={(event)=>event.stopPropagation()}>
      <button className="btn_1" onClick={()=>addActiveUser(item)}>Добавить</button>
      </div>
      </div>
  ))}

  </div>
  );
}