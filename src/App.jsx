import Navbar from "./components/Navbar"
import Banner from './Components/Banner';
import AllTickets from "./Components/AllTickets";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";


function App() {
  const [ticketLength, setTicketLength] = useState(0);
  const[resolvedLength, setResolvedLength] = useState(0);


  return (
    <>
       <section className="bg-[#62738210] max-w-7xl mx-auto">
       <Navbar></Navbar>
       <Banner ticketLength={ticketLength} resolvedLength={resolvedLength}></Banner>
       <AllTickets setTicketLength={setTicketLength} setResolvedLength={setResolvedLength}></AllTickets>

       <Footer></Footer>
       </section>
       <ToastContainer/>
    </>
  )
}

export default App
