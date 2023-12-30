import React from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Doctors
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3">
          <Link
            to={"/adddoctors"}
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add Doctors
          </Link>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Phone</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y ">
            {tableItems.map((item, idx) => (
              <tr key={idx} className="">
                <div className=" flex  px-2 gap-2 items-center">
                  <img
                    alt=""
                    src={item.avatar}
                    className="w-10 h-10 rounded-full"
                  />
                  <td className="py-4 whitespace-nowrap">{item.name}</td>
                </div>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="/"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Delete
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

export default Doctors;

const tableItems = [
  {
    avatar:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Liam James",
    email: "liamjames@example.com",
    position: "Doctor",
    phone: "+9779866554102",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Olivia Emma",
    email: "oliviaemma@example.com",
    position: "Doctor",
    phone: "+9779866554102",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "William Benjamin",
    email: "william.benjamin@example.com",
    position: "Doctor",
    phone: "+9779866554102",
  },
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Henry Theodore",
    email: "henrytheodore@example.com",
    position: "Doctor",
    phone: "+9779866554102",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Liam James",
    email: "liamjames@example.com",
    position: "Doctor",
    phone: "+9779866554102",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Olivia Emma",
    email: "oliviaemma@example.com",
    position: "Doctor",
    phone: "+9779866554102",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "William Benjamin",
    email: "william.benjamin@example.com",
    position: "Doctor",
    phone: "+9779866554102",
  },
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Henry Theodore",
    email: "henrytheodore@example.com",
    position: "Doctor",
    phone: "+9779866554102",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Amelia Elijah",
    email: "amelia.elijah@example.com",
    position: "Doctor",
    phone: "+9779866554102",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Amelia Elijah",
    email: "amelia.elijah@example.com",
    position: "Doctor",
    phone: "+9779866554102",
  },
];
