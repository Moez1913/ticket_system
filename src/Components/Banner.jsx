import bg from "../assets/vector1.png";
import bg2 from "../assets/vector2.png";


const Banner = ({ticketLength, resolvedLength}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
    {/* Card 1 */}
    <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-xl
                    bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-500 text-white">

      {/* LEFT Vector */}
      <img
        src={bg}
        alt="vector-left"
        className="absolute top-0 left-0 w-40 sm:w-56 lg:w-64 opacity-30"
      />

      {/* RIGHT Vector */}
      <img
        src={bg}
        alt="vector-right"
        className="absolute top-0 right-0 w-40 sm:w-56 lg:w-64 opacity-30 rotate-180"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <p className="text-base sm:text-lg opacity-90">In-Progress</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">{ticketLength}</h2>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-xl
                    bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-500 text-white">

      <img
        src={bg}
        alt="vector-left"
        className="absolute top-0 left-0 w-40 sm:w-56 lg:w-64 opacity-30"
      />

      <img
        src={bg}
        alt="vector-right"
        className="absolute top-0 right-0 w-40 sm:w-56 lg:w-64 opacity-30 rotate-180"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <p className="text-base sm:text-lg opacity-90">Completed</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">{resolvedLength}</h2>
      </div>
    </div>

  </div>
</div>
   
  );
}



export default Banner;
