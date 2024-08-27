import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const data = [
  {
    id: 1,
    message: "Send us Emails",
    info: "infoE-Mart.com",
    icon:  <FaEnvelope className='text-2xl'/>,
    
  },
  {
    id: 2,
    message: "Contact us",
    info: "+91 9909012996",
    icon:  <FaPhone className='text-2xl'/>,
  },
  {
    id: 3,
    message: "Find us here",
    info: "Siddhi Infosoft, C-407, Ganesh meridian, Opp. Amiraj Farm,Ahmedabad - 380013, INDIA",
    icon:  <FaMapMarkerAlt className='text-2xl'/>,
  },
];