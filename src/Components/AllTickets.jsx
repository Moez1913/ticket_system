import { toast } from "react-toastify";
import Card from "./Card";
import {useEffect, useState } from "react";



const AllTickets = ( {setTicketLength,setResolvedLength} ) => {
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState([]);
    const [resolvedTicket, setResolvedTicket] = useState([]);

    const handleClick=(id)=>{
        console.log(id)
        const ticket = tickets.find(ticket => ticket.id === id);
        
        setSelectedTicket(prev=>[...prev,ticket]);
        const remainingTickets = tickets.filter(ticket => ticket.id !== id);
        setTickets(remainingTickets);
        setTicketLength(selectedTicket.length+1)
        toast.success("Ticket added successfully!")
    }

    const handleResolved=(id)=>{
      const ticket = selectedTicket.find(ticket => ticket.id === id);
      setResolvedTicket(prev=>[...prev,ticket]);
      const remainingTickets = selectedTicket.filter(ticket => ticket.id !== id);
      setSelectedTicket(remainingTickets);
      setTicketLength(selectedTicket.length-1)
      setResolvedLength(resolvedTicket.length+1)
        toast.success("Ticket resolved successfully!")
    }

    useEffect(()=>{
        fetch('/JsonData/ticket.json')
        .then(res => res.json())
        .then(data => setTickets(data))
    },[])

  return (
   <div className=" grid grid-cols-1  lg:grid-cols-7 gap-6">
    
     <div className=" mx-2 grid order-2 lg:order-1 lg:col-span-5  md:mx-auto gap-4">
      <h2 className="text-xl font-bold ml-5">All Tickets</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 mx-auto gap-4">
     {
        tickets.map(ticket => <Card key={ticket.id} ticket={ticket} handleClick={handleClick}></Card>)
     }
    </div>
     </div>
    <div className="mx-4 gird grid-cols-2 md:grid-cols-1  order-1 lg:order-2 md:col-span-2 gap-6 mr-4 ">
      
      <div className=" flex flex-col mx-auto gap-1 ">
        <h className="text-lg font-bold">Task Status :</h>
        {
          selectedTicket.length === 0 && <p className="text-[#627382]">Select a ticket to add to Task Status</p>
        }
          {
            selectedTicket.map(ticket => <div className="card gap-1 p-4 bg-white shadow-2xl ">
              <h2 className="text-lg font-bold">{ticket.title}</h2>
              <button  onClick={()=>handleResolved(ticket.id)} className="bg-[#02A53B] mx-1 py-1 text-white border border-none rounded-md">Resolved</button>
            </div>)
          }
      </div>
      <div className=" gap-1 flex flex-col md:mx-auto">
        <h2 className="text-lg  font-bold">Resolved tasks:</h2>
        {
          resolvedTicket.length === 0 && <p className="text-[#627382]">No task resolved yet</p>
        }
          {
            resolvedTicket.map(ticket => <div className="card bg-white shadow-2xl p-4 ">
              <h2>{ticket.title}</h2>
            </div>)
          }
      </div>
    </div>
   </div>
  )
}

export default AllTickets