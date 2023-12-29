import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const [deleting, setdeleting] = useState(false);
  const [contacts, setcontacts] = useState([]);

  useEffect(() => {
    const FetchAllContacts = async () => {
      const respones = await axios.get(
        "http://localhost:4000/api/contact-details"
      );

      setcontacts(respones.data.data);
    };

    FetchAllContacts();
  }, []);

  const DeleteContacts = async (_id) => {
    setdeleting(true);
    const respones = await axios.delete(
      `http://localhost:4000/api/contact-details/${_id}`
    );
    console.log(respones);
    toast.success("Delete Success");
    setdeleting(false);
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Contacts
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 ">
          <Link
            to={"/addcontact"}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add Contact
          </Link>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6"> EmrHotline</th>
              <th className="py-3 px-6">EmrAmbHotline</th>
              <th className="py-3 px-6">HopN</th>
              <th className="py-3 px-6"> HelN</th>
              <th className="py-3 px-6"> location</th>
              <th className="py-3 px-6">24H</th>
              <th className="py-3 px-6">email</th>
              <th className="py-3 px-6"> admN</th>
              <th className="py-3 px-6"> apN</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y  overflow-x-hidden">
            {contacts.map((contact, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.emergencyHotline}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.emergencyAmbulanceHotline}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.hospitalNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.heliRescueNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.twentyfourHourAvailableNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.administrationNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {contact.appointmentNumber}
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="/"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    onClick={() => DeleteContacts(contact._id)}
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    {deleting ? "Deleting" : "delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
