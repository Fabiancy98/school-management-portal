"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

interface TeacherData {
  id?: number;
  full_name: string;
  fullName?: string;
  staff_id: string;
  staffId?: string;
  gender: string;
  date_of_birth: string;
  dateOfBirth?: string;
  ppa: string;
  pupils: number;
  status: string;
  passport_photo?: string;
  submitted_at?: string;
  submittedAt?: string;
  [key: string]: string | number | undefined;
}

interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacher: TeacherData | null;
  mode: "view" | "edit" | "add";
  onSave?: (teacher: TeacherData) => void;
}

export function TeacherModal({ isOpen, onClose, teacher, mode, onSave }: TeacherModalProps) {
  const [formData, setFormData] = useState<TeacherData>({
    full_name: "",
    gender: "Male",
    date_of_birth: "",
    staff_id: "",
    ppa: "",
    pupils: 0,
    status: "pending",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (teacher) {
      setFormData({ ...teacher });
    } else {
      setFormData({
        full_name: "",
        gender: "Male",
        date_of_birth: "",
        staff_id: "",
        ppa: "",
        pupils: 0,
        status: "pending",
      });
    }
  }, [teacher]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: name === "pupils" ? parseInt(value) || 0 : value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.full_name?.trim()) {
      newErrors.full_name = "Full name is required";
    }
    
    if (!formData.staff_id?.trim()) {
      newErrors.staff_id = "Staff ID is required";
    }
    
    if (!formData.date_of_birth) {
      newErrors.date_of_birth = "Date of birth is required";
    }
    
    if (!formData.ppa?.trim()) {
      newErrors.ppa = "PPA is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Format the date of birth to match the expected format
    const dob = new Date(formData.date_of_birth);
    const formattedData = {
      ...formData,
      date_of_birth: dob.toUTCString(),
      dateOfBirth: dob.toUTCString(),
      full_name: formData.full_name,
      fullName: formData.full_name,
      staff_id: formData.staff_id,
      staffId: formData.staff_id,
      submitted_at: new Date().toUTCString(),
      submittedAt: new Date().toUTCString(),
    };
    
    if (onSave) {
      onSave(formattedData);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {mode === "view" ? "Teacher Details" : mode === "edit" ? "Edit Teacher" : "Add New Teacher"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {mode === "view" ? (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  {formData.passport_photo ? (
                    <div className="relative h-48 w-48 rounded-lg overflow-hidden">
                      <Image 
                        src={formData.passport_photo.replace('/public', '')} 
                        alt={formData.full_name || formData.fullName || "Teacher"} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-48 w-48 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">No Photo</span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-500">Full Name</h3>
                    <p className="font-medium">{formData.full_name || formData.fullName}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500">Staff ID</h3>
                    <p className="font-medium">{formData.staff_id || formData.staffId}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500">Gender</h3>
                    <p className="font-medium">{formData.gender}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500">Date of Birth</h3>
                    <p className="font-medium">
                      {formData.date_of_birth || formData.dateOfBirth ? 
                        new Date(formData.date_of_birth || formData.dateOfBirth as string).toLocaleDateString() : 
                        "Not specified"}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500">PPA</h3>
                    <p className="font-medium">{formData.ppa}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500">Pupils</h3>
                    <p className="font-medium">{formData.pupils}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500">Status</h3>
                    <p className="font-medium capitalize">{formData.status}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-500">Submitted At</h3>
                    <p className="font-medium">
                      {formData.submitted_at || formData.submittedAt ? 
                        new Date(formData.submitted_at || formData.submittedAt as string).toLocaleString() : 
                        "Not submitted yet"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name || ""}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.full_name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.full_name && (
                    <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Staff ID</label>
                  <input
                    type="text"
                    name="staff_id"
                    value={formData.staff_id || ""}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.staff_id ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.staff_id && (
                    <p className="text-red-500 text-xs mt-1">{errors.staff_id}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender || "Male"}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth ? new Date(formData.date_of_birth).toISOString().split('T')[0] : ""}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.date_of_birth ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.date_of_birth && (
                    <p className="text-red-500 text-xs mt-1">{errors.date_of_birth}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">PPA</label>
                  <input
                    type="text"
                    name="ppa"
                    value={formData.ppa || ""}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.ppa ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.ppa && (
                    <p className="text-red-500 text-xs mt-1">{errors.ppa}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pupils</label>
                  <input
                    type="number"
                    name="pupils"
                    value={formData.pupils || 0}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    name="status"
                    value={formData.status || "pending"}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {mode === "edit" ? "Update Teacher" : "Add Teacher"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
