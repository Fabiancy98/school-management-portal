"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface ParentData {
  id?: number;
  full_name: string;
  gender: string;
  email: string;
  phone: string;
  occupation: string;
  address: string;
  children: string[];
  status: string;
  passport_photo?: string;
  submitted_at?: string;
  [key: string]: string | number | string[] | undefined;
}

interface ParentModalProps {
  isOpen: boolean;
  onClose: () => void;
  parent: ParentData | null;
  mode: "view" | "edit" | "add";
  onSave?: (parent: ParentData) => void;
}

export function ParentModal({ isOpen, onClose, parent, mode, onSave }: ParentModalProps) {
  const [formData, setFormData] = useState<ParentData>({
    full_name: "",
    gender: "Male",
    email: "",
    phone: "",
    occupation: "",
    address: "",
    children: [],
    status: "active",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [childName, setChildName] = useState("");

  useEffect(() => {
    if (parent && (mode === "view" || mode === "edit")) {
      setFormData(parent);
    } else {
      setFormData({
        full_name: "",
        gender: "Male",
        email: "",
        phone: "",
        occupation: "",
        address: "",
        children: [],
        status: "active",
      });
    }
  }, [parent, mode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is filled
    if (errors[name] && value.trim() !== "") {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleAddChild = () => {
    if (childName.trim()) {
      setFormData(prev => ({
        ...prev,
        children: [...prev.children, childName.trim()]
      }));
      setChildName("");
    }
  };

  const handleRemoveChild = (index: number) => {
    setFormData(prev => ({
      ...prev,
      children: prev.children.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === "view") {
      onClose();
      return;
    }
    
    if (validateForm()) {
      onSave?.(formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {mode === "view" ? "Parent Details" : mode === "edit" ? "Edit Parent" : "Add New Parent"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {mode === "view" ? (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    {formData.passport_photo ? (
                      <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                        <Image
                          src={`/images/${formData.passport_photo}`}
                          alt={formData.full_name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">No Photo</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm text-gray-500">Full Name</h3>
                      <p className="font-medium">{formData.full_name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Gender</h3>
                      <p className="font-medium">{formData.gender}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Email</h3>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Phone</h3>
                      <p className="font-medium">{formData.phone}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Occupation</h3>
                      <p className="font-medium">{formData.occupation}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Status</h3>
                      <p className="font-medium">
                        <span className={`inline-block px-2 py-1 rounded text-xs ${
                          formData.status === "active" ? "bg-green-100 text-green-800" :
                          formData.status === "inactive" ? "bg-gray-100 text-gray-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {formData.status}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Children</h3>
                  {formData.children && formData.children.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {formData.children.map((child, index) => (
                        <li key={index}>{child}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No children registered</p>
                  )}
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Address</h3>
                  <p>{formData.address}</p>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Submission Information</h3>
                  <div>
                    <h3 className="text-sm text-gray-500">Submitted At</h3>
                    <p className="font-medium">
                      {formData.submitted_at ? 
                        new Date(formData.submitted_at as string).toLocaleString() : 
                        "Not submitted yet"}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.full_name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.full_name && (
                      <p className="mt-1 text-sm text-red-500">{errors.full_name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Occupation
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Children</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="Child's name"
                      className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={handleAddChild}
                      className="px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add
                    </button>
                  </div>
                  
                  {formData.children && formData.children.length > 0 ? (
                    <ul className="space-y-2">
                      {formData.children.map((child, index) => (
                        <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                          <span>{child}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveChild(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X size={16} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No children added</p>
                  )}
                </div>
                
                <div className="border-t pt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            )}
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              {mode !== "view" && (
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {mode === "edit" ? "Update" : "Add"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
