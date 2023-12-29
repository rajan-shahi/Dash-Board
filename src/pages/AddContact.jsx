import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddContact = () => {
  const [creat, setcreat] = useState();
  const [EmergencyHotline, setEmergencyHotline] = useState();
  const [EmergencyAmbulanceHotline, setEmergencyAmbulanceHotline] = useState();
  const [hospitalNumber, sethospitalNumber] = useState();
  const [heliRescueNumber, setheliRescueNumber] = useState();
  const [location, setlocation] = useState();
  const [twentyfourHourAvailableNumber, settwentyfourHourAvailableNumber] =
    useState();
  const [email, setemail] = useState();
  const [administrationNumber, setadministrationNumber] = useState();
  const [appointmentNumber, setappointmentNumber] = useState();

  const createContacts = async () => {
    setcreat(true)
    toast.success("Created Success")
    const respones = await axios.post(
      "http://localhost:4000/api/contact-details",
      {
        emergencyHotline: EmergencyHotline,
        emergencyAmbulanceHotline: EmergencyAmbulanceHotline,
        hospitalNumber: hospitalNumber,
        heliRescueNumber: heliRescueNumber,
        location: location,
        twentyfourHourAvailableNumber: twentyfourHourAvailableNumber,
        email: email,
        administrationNumber: administrationNumber,
        appointmentNumber: appointmentNumber,
      }
    );
    setcreat(false)
    console.log(respones);
    setEmergencyHotline("");
    setEmergencyAmbulanceHotline("");
    sethospitalNumber("");
    setheliRescueNumber("");
    setlocation("");
    settwentyfourHourAvailableNumber("");
    setemail("");
    setadministrationNumber("");
    setappointmentNumber("");
  };

  return (
    <div className=" flex flex-col gap-4 py-10 px-10">
      <input
        value={EmergencyHotline}
        onChange={(e) => setEmergencyHotline(e.target.value)}
        className="  px-2 border  border-blue-400 py-3 "
        type="number"
        placeholder="Enter EmergencyHotline"
      />
      <input
        value={EmergencyAmbulanceHotline}
        onChange={(e) => setEmergencyAmbulanceHotline(e.target.value)}
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        placeholder="Enter EmergencyAmbulanceHotline"
      />
      <input
        value={hospitalNumber}
        onChange={(e) => sethospitalNumber(e.target.value)}
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        placeholder="Enter hospitalNumber"
      />
      <input
        value={heliRescueNumber}
        onChange={(e) => setheliRescueNumber(e.target.value)}
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        placeholder="Enter heliRescueNumber"
      />
      <input
        value={location}
        onChange={(e) => setlocation(e.target.value)}
        className="  px-2 border border-blue-400 py-3 "
        type="text"
        placeholder="Enter Location"
      />
      <input
        value={twentyfourHourAvailableNumber}
        onChange={(e) => settwentyfourHourAvailableNumber(e.target.value)}
        className="  px-2 border border-blue-400 py-3 "
        type="Number"
        placeholder="Enter twentyfourHourAvailableNumber"
      />
      <input
        value={email}
        onChange={(e) => setemail(e.target.value)}
        className="  px-2 border border-blue-400 py-3 "
        type="email"
        placeholder="Enter email"
      />
      <input
        value={administrationNumber}
        onChange={(e) => setadministrationNumber(e.target.value)}
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        placeholder="Enter administrationNumber"
      />
      <input
        value={appointmentNumber}
        onChange={(e) => setappointmentNumber(e.target.value)}
        className="  px-2 border border-blue-400 py-3 "
        type="number"
        placeholder="Enter administrationNumber"
      />

      <button onClick={createContacts} className=" bg-blue-500 text-white py-2">
        {creat ? "creating" : "create"}
      </button>
    </div>
  );
};

export default AddContact;
