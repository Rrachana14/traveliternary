import { useState } from 'react';
import {
  User,
  UserPlus,
  Users,
  UsersRound,
  MapPin,
  CalendarDays,
} from 'lucide-react';

function Onboarding() {
  const [darkMode, setDarkMode] = useState(false);
  const [destination, setDestination] = useState('');
  const [companions, setCompanions] = useState('');
  const [duration, setDuration] = useState('');

  const handleSelect = (type) => {
    setCompanions(type);
  };

  const iconMap = {
    Solo: <User className="w-5 h-5" />,
    Couple: <UserPlus className="w-5 h-5" />,
    Friends: <Users className="w-5 h-5" />,
    Family: <UsersRound className="w-5 h-5" />,
  };

  return (
    <div className={`${darkMode ? 'bg-[#0B0809] text-white' : 'bg-white text-black'} w-full min-h-screen flex justify-center py-10 relative px-3 transition-colors duration-300`}>
      
      <div className="absolute top-5 right-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-md shadow-md font-semibold transition ${
            darkMode
              ? 'bg-white text-gray-900 hover:bg-gray-200'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* form */}
      <div className={`${darkMode ? 'bg-[#0B0809]' : 'bg-white'} p-4 sm:p-6 rounded-2xl w-full max-w-md sm:max-w-sm text-center space-y-6 transition-colors duration-300 mt-[30px]`}>
        
        <div className="mb-6 space-y-2 text-left">
          <h2 className="font-mont font-extrabold text-xl xs:text-sm  leading-7">Plan Your Journey, Your Way!</h2>
          <h4 className="font-Montserrat text-sm sm:text-base  font-normal leading-5">Let’s create your personalised travel experience</h4>
        </div>

        {/* Destination input */}
        <div className="text-left space-y-1">
          <h3 className="font-Montserrat font-semibold text-base sm:text-lg leading-6">Where would you like to go?</h3>
          <div className={`flex items-center gap-2 border px-3 py-2 rounded-lg ${darkMode ? 'bg-[#333333] border-0' : 'border-gray-300'}`}>
            <MapPin className="w-5 h-5" />
            <input
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={`w-full text-sm outline-none bg-transparent ${darkMode ? 'text-white' : 'text-gray-800'}`}
            />
          </div>
        </div>

        {/* Duration select */}
        <div className="text-left space-y-1">
          <h3 className="font-Montserrat font-semibold text-base sm:text-lg leading-6">How long will you stay?</h3>
          <div className={`flex items-center gap-2 border px-3 py-2 rounded-lg ${darkMode ? 'bg-[#333333] border-0' : 'border-gray-300'}`}>
            <CalendarDays className="w-5 h-5" />
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className={`w-full text-sm outline-none bg-transparent ${darkMode ? 'text-white' : 'text-gray-800'}`}
            >
              <option value="">Select Duration</option>
              <option value="1-3 days">1–3 days</option>
              <option value="4-7 days">4–7 days</option>
              <option value="1-2 weeks">1–2 weeks</option>
              <option value="More than 2 weeks">More than 2 weeks</option>
            </select>
          </div>
        </div>

        {/* Companion buttons */}
        <div className="text-left space-y-2">
          <h3 className="font-Montserrat font-semibold text-base sm:text-lg">Who are you traveling with?</h3>
          <div className="grid grid-cols-2 gap-3 justify-center items-center">
            {['Solo', 'Couple', 'Friends', 'Family'].map((type) => (
              <button
                key={type}
                onClick={() => handleSelect(type)}
                className={`flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-md border transition-all duration-200 ${
                  companions === type
                    ? 'bg-blue-500 text-white border-blue-500'
                    : darkMode
                    ? 'bg-[#333333] border-0 text-white hover:bg-gray-600'
                    : 'bg-white text-gray-800 border-gray-400 hover:bg-blue-100'
                }`}
              >
                {iconMap[type]}
                <span className="truncate">{type}</span>
              </button>
            ))}
          </div>
        </div>
        <button className='bg-[#3643FB] font-md py-4 bottom-12 left-0 absolute w-11/12 mx-4 rounded-[10px]'>Continue</button>

      </div>
    </div>
  );
}

export default Onboarding;
