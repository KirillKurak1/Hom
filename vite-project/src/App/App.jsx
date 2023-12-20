import { useState } from "react";
import dt from "../dtUser/dt.json"
import "../style/App.css";
 import AllUsers from "../Components/AllUsers/AllUsers";
import ActiveUsers from "../Components/ActiveUsers/ActiveUsers";
import ModalUser from "../Components/ModalUser/ModalUser";
import Header from "../Components/Header/Header";




function App(){
  const [allUsers,setAllUsers] = useState(dt.allUsers)
  const [activeUsers,setActiveUsers] =useState(dt.activeUser)
  const [showModal,setShowModal] = useState(false);
  const [indexUserModal,setIndexUserModal] = useState(0);
  const [modalinfo,setModalInfo] = useState(dt.modal)
  
  

  function addActiveUser(user){
    const truUser= activeUsers.find(item => item.context ===  user.context)
    if(truUser) return 
  const lastid = [activeUsers.length-1].id

    user.id = lastid +1
    setActiveUsers(prevState => [...prevState,user])

   

    
  }






  function handleOpenModal(id){
    setShowModal(true);
    setIndexUserModal(id -1)
  }

  return (
  <div className="container">
  

   
   <Header/>

   
  
   {showModal && <ModalUser item={allUsers[indexUserModal]} setShowModal={setShowModal}/>}
    <div className="cont__allUsers">
   
    
       <AllUsers allUsers={allUsers} setAllUsers={setAllUsers}
         handleOpenModal={handleOpenModal}
         addActiveUser={addActiveUser} /> 
    </div>
    <div className="cont__activeUsers">
    <ActiveUsers activeUsers={activeUsers} setActiveUsers={setActiveUsers} />
    </div>
  </div>




  )
  
}

export default App;