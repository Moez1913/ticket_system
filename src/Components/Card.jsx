import { HiOutlineCalendarDateRange } from "react-icons/hi2"



const Card = ({ticket,handleClick}) => {
    


  return ( <button onClick={() => handleClick(ticket.id)}>
<div  className="card  bg-base-100 w-full shadow-xl p-4 md:ml-4">
         
                
                <div className="flex justify-between items-center">
                    <h2 className="text-[20px] font-medium">{ticket.title}</h2>
                    {
                    ticket.status === "Open" && <div className="badge bg-[#B9F8CF] flex justify-between items-center"><div className="badge bg-[#0B5E06] badge-xs"></div><p className="text-[#0B5E06]">
                        
                        {ticket.status}
                        </p></div>
                    }
                    {
                    ticket.status === "In Progress" && <div className=" flex justify-between item-center badge bg-[#F8F3B9] "><div className="badge bg-[#FEBB0C] badge-xs"></div><p className="text-[#9C7700]">{ticket.status}</p></div>
                    }
                    {
                    ticket.status === "Closed" && <div className=" flex justify-between item-center badge bg-[#F8D7DA] "><div className="badge bg-[#DC3545] badge-xs"></div><p className="text-[#721C24]">{ticket.status}</p></div>
                    }

                </div>
                <div className="text-left ">
                <p className="text-md text-olive-500">{ticket.description}</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <p className="text-md font-medium text-[#627382]">#{ticket.id}</p>
                        {
                            ticket.priority === "HIGH PRIORITY" && <p className="text-[#FF0000]">{ticket.priority}</p>
                        }
                        {
                            ticket.priority === "MEDIUM PRIORITY" && <p className="text-[#FFA500]">{ticket.priority}</p>
                        }
                        {
                            ticket.priority === "LOW PRIORITY" && <p className="text-[#008000]">{ticket.priority}</p>
                        }

                    </div>
                    <div className="flex gap-2">
                        <p>{ticket.customerName}</p>
                        <div className="flex items-center justify-center gap-2">
                            <HiOutlineCalendarDateRange/>
                          <span>
                            {ticket.date}
                          </span>
                        </div>
                        
                     
                    </div>
                </div>
            </div>
  </button>
    
         
           
  
  )
}

export default Card