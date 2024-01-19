import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ContactEdit = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [contact, setcontact] = useState([]);

  useEffect(() => {
    const FeatchContactData = async () => {
      const respones = await axios.get(
        `http://localhost:4000/api/contact-details/${id}`
      );
      setcontact(respones.data.data);
    };
    FeatchContactData();
  }, [id]);

  console.log(contact);

  return (
    <form className=" flex flex-col gap-4 py-10 px-10">
      <input
        className="  px-2 border  border-blue-400 py-3 "
        type="number"
        defaultValue={contact.emergencyHotline}
        placeholder="Enter EmergencyHotline"
        required
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        defaultValue={contact.emergencyAmbulanceHotline}
        placeholder="Enter EmergencyAmbulanceHotline"
        required
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        defaultValue={contact.hospitalNumber}
        placeholder="Enter hospitalNumber"
        required
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        defaultValue={contact.heliRescueNumber}
        placeholder="Enter heliRescueNumber"
        required
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="text"
        defaultValue={contact.location}
        placeholder="Enter Location"
        required
      />

      <input
        className="  px-2 border border-blue-400 py-3 "
        type="email"
        name="email"
        defaultValue={contact.email}
        placeholder="Enter email"
        required
      />

      <input
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        defaultValue={contact.administrationNumber}
        placeholder="Enter administrationNumber"
        required
      />
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        defaultValue={contact.appointmentNumber}
        placeholder="Enter appointmentNumber"
        required
      />
  
      <input
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        defaultValue={contact.twentyfourHourAvailableNumber}
        placeholder="Enter twentyfourHourAvailableNumber"
        required
      />
      <button type="submit" className=" bg-blue-500 text-white py-2">
        create
      </button>
      <p>{contact.createdAt}</p>
      <p>{contact.updatedAt}</p>
    </form>
  );
};

export default ContactEdit;
