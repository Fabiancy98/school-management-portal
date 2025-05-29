"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface StudentData {
  id?: number;
  full_name: string;
  gender: string;
  date_of_birth: string;
  admission_number: string;
  class: string;
  parent_name: string;
  parent_phone: string;
  address: string;
  status: string;
  passport_photo?: string;
  submitted_at?: string;
  [key: string]: string | number | undefined;
}

interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentData | null;
  mode: "view" | "edit" | "add";
  onSave?: (student: StudentData) => void;
}

export function StudentModal({ isOpen, onClose, student, mode, onSave }: StudentModalProps) {
  const [formData, setFormData] = useState<StudentData>({
    full_name: "",
    gender: "Male",
    date_of_birth: "",
    admission_number: "",
    class: "",
    parent_name: "",
    parent_phone: "",
    address: "",
    status: "active",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (student && (mode === "view" || mode === "edit")) {
      setFormData(student);
    } else {
      setFormData({
        full_name: "",
        gender: "Male",
        date_of_birth: "",
        admission_number: "",
        class: "",
        parent_name: "",
        parent_phone: "",
        address: "",
        status: "active",
      });
    }
  }, [student, mode]);

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    }
    
    if (!formData.admission_number.trim()) {
      newErrors.admission_number = "Admission number is required";
    }
    
    if (!formData.class.trim()) {
      newErrors.class = "Class is required";
    }
    
    if (!formData.date_of_birth.trim()) {
      newErrors.date_of_birth = "Date of birth is required";
    }
    
    if (!formData.parent_name.trim()) {
      newErrors.parent_name = "Parent name is required";
    }
    
    if (!formData.parent_phone.trim()) {
      newErrors.parent_phone = "Parent phone is required";
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {mode === "view" ? "Student Details" : mode === "edit" ? "Edit Student" : "Add New Student"}
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
                      <h3 className="text-sm text-gray-500">Date of Birth</h3>
                      <p className="font-medium">
                        {formData.date_of_birth ? 
                          new Date(formData.date_of_birth as string).toLocaleDateString() : 
                          "Not specified"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Admission Number</h3>
                      <p className="font-medium">{formData.admission_number}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Class</h3>
                      <p className="font-medium">{formData.class}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Status</h3>
                      <p className="font-medium">
                        <span className={`inline-block px-2 py-1 rounded text-xs ${
                          formData.status === "active" ? "bg-green-100 text-green-800" :
                          formData.status === "inactive" ? "bg-gray-100 text-gray-800" :
                          formData.status === "suspended" ? "bg-red-100 text-red-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {formData.status}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm text-gray-500">Parent Name</h3>
                      <p className="font-medium">{formData.parent_name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Parent Phone</h3>
                      <p className="font-medium">{formData.parent_phone}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-sm text-gray-500">Address</h3>
                      <p className="font-medium">{formData.address}</p>
                    </div>
                  </div>
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
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date_of_birth"
                      value={formData.date_of_birth ? new Date(formData.date_of_birth).toISOString().split('T')[0] : ''}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.date_of_birth ? "border-red-500" : ""
                      }`}
                    />
                    {errors.date_of_birth && (
                      <p className="mt-1 text-sm text-red-500">{errors.date_of_birth}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Admission Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="admission_number"
                      value={formData.admission_number}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.admission_number ? "border-red-500" : ""
                      }`}
                    />
                    {errors.admission_number && (
                      <p className="mt-1 text-sm text-red-500">{errors.admission_number}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Class <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                        errors.class ? "border-red-500" : ""
                      }`}
                    />
                    {errors.class && (
                      <p className="mt-1 text-sm text-red-500">{errors.class}</p>
                    )}
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
                      <option value="suspended">Suspended</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Parent Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="parent_name"
                        value={formData.parent_name}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                          errors.parent_name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.parent_name && (
                        <p className="mt-1 text-sm text-red-500">{errors.parent_name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Parent Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="parent_phone"
                        value={formData.parent_phone}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                          errors.parent_phone ? "border-red-500" : ""
                        }`}
                      />
                      {errors.parent_phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.parent_phone}</p>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
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
