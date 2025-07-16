
import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newUser: UserData = {
      id: Math.floor(Math.random() * 10000),
      name: form.name,
      username: form.username,
      email: form.email,
      phone: form.phone,
      website: form.website,
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    };

    onSubmit(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <div className="flex flex-col gap-3">
          {["name", "username", "email", "phone", "website"].map((field) => (
            <input
              key={field}
              name={field}
              value={form[field as keyof typeof form]}
              onChange={handleChange}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              className="border px-3 py-2 rounded-md"
            />
          ))}
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button className="text-gray-600" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
