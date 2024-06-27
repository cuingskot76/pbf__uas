"use client";

import React, { useState } from "react";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleRegisterPopup = () => {
    setRegisterVisible(!isRegisterVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isRegisterVisible ? "/api/register" : "/api/login";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Success!");
      onClose();
    } else {
      alert(result.error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-8 items-center justify-center rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">
          {isRegisterVisible ? "Daftar" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isRegisterVisible && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-black text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 text-black border border-gray-300 rounded-md"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-black text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 text-black border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-black text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 text-black border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-20 rounded-full"
            >
              {isRegisterVisible ? "Daftar" : "Login"}
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-4">
          <p className="text-black">
            {isRegisterVisible ? "Sudah punya akun?" : "Belum punya akun?"}
            <span
              className="text-blue-500 cursor-pointer ml-1"
              onClick={toggleRegisterPopup}
            >
              {isRegisterVisible ? "Login" : "Daftar"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
