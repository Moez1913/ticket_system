


const Card = ({ticket,handleClick}) => {
    


  return ( <button onClick={() => handleClick(ticket.id)}>
<div  className="card  bg-base-100 w-96 shadow-xl p-4">
         
                
                <div className="flex justify-between items-center">
                    <h2 className="text-[20px] font-medium">{ticket.title}</h2>
                    {
                    ticket.status === "Open" && <div className="badge bg-[#B9F8CF] flex justify-between items-center"><div className="badge bg-[#0B5E06] badge-xs"></div><p className="text-[#0B5E06]">
                        
                        {ticket.status}
                        </p></div>
                    }
                    {
                    ticket.status === "In Progress" && <div className=" flex justify-between items-center badge bg-[#F8F3B9] "><div className="badge bg-[#FEBB0C] badge-xs"></div><p className="text-[#9C7700]">{ticket.status}</p></div>
                    }
                    {
                    ticket.status === "Closed" && <div className="badge bg-[#F8D7DA] "><div className="badge bg-[#DC3545] badge-xs"></div><p className="text-[#721C24]">{ticket.status}</p></div>
                    }

                </div>
                <div>
                <p>{ticket.description}</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <p>{ticket.id}</p>
                        <p>{ticket.priority}</p>

                    </div>
                    <div className="flex">
                        <p>{ticket.customerName}</p>
                         <p>{ticket.date}
                        </p>
                    </div>
                </div>
            </div>
  </button>
    
         
           
  
  )
}

export default Card