import "../ModalUser/ModalUser.scss"

export default function ModalUser ({item,setShowModal}) {
  return (
    <div className="modal" onClick={()=>{setShowModal(false)}}>
        <div className="contentModal" onClick={(e)=>{e.stopPropagation()}}>
        <h2>{item.context}</h2>
        <img src={item.img} alt="" />
     <h2>{item.text}</h2>
      <p>{item.infburg}</p>
      <p>{item.infburg_1}</p>
      <p>{item.infburg_2}</p>
      <p>{item.infburg_3}</p>
      <p>{item.infburg_4}</p>
      <p>{item.infburg_5}</p>
        </div>

    </div>
  )
}