"use client";

import { useState, useEffect } from "react";
import { DataTable, Avatar } from "@/components/data-table";
import { TeacherModal } from "@/components/teacher-modal";
import { Eye, Edit, Plus } from "lucide-react";
import staffRecordsData from "@/data/staff_records.json";

interface StaffRecord {
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

const TeacherPage = () => {
  const [staffRecords, setStaffRecords] = useState<StaffRecord[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<StaffRecord | null>(null);
  const [modalMode, setModalMode] = useState<"view" | "edit" | "add">("view");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load staff records from the JSON file
    setStaffRecords(staffRecordsData as StaffRecord[]);
  }, []);

  const handleViewTeacher = (teacher: StaffRecord) => {
    setSelectedTeacher(teacher);
    setModalMode("view");
    setIsModalOpen(true);
  };

  const handleEditTeacher = (teacher: StaffRecord) => {
    setSelectedTeacher(teacher);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const handleAddTeacher = () => {
    setSelectedTeacher(null);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleSaveTeacher = (teacher: StaffRecord) => {
    if (modalMode === "edit") {
      // Update existing teacher
      const updatedRecords = staffRecords.map((record) => 
        record.id === teacher.id ? { ...record, ...teacher } : record
      );
      setStaffRecords(updatedRecords);
    } else if (modalMode === "add") {
      // Add new teacher
      const newTeacher = {
        ...teacher,
        id: Math.max(...staffRecords.map(r => r.id || 0), 0) + 1,
      };
      setStaffRecords([newTeacher, ...staffRecords]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Teacher Management</h1>
        <button
          onClick={handleAddTeacher}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus size={16} />
          Add New Teacher
        </button>
      </div>
      
      <DataTable
        title="All Teachers"
        data={staffRecords}
        columns={[
          {
            header: "Info",
            accessor: (teacher) => (
              <Avatar
                src={teacher.passport_photo ? teacher.passport_photo.replace('/public', '') : undefined}
                alt={teacher.full_name || teacher.fullName || ""}
                email={teacher.ppa}
              />
            ),
            className: "min-w-[250px]",
          },
          {
            header: "Teacher ID",
            accessor: (teacher) => teacher.staff_id || teacher.staffId,
          },
          {
            header: "Gender",
            accessor: "gender",
          },
          {
            header: "PPA",
            accessor: "ppa",
            className: "max-w-[200px] truncate",
          },
          {
            header: "Pupils",
            accessor: "pupils",
          },
          {
            header: "Status",
            accessor: (teacher) => (
              <span className={`px-2 py-1 rounded-full text-xs ${teacher.status === "active" ? "bg-green-100 text-green-800" : teacher.status === "inactive" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
                {teacher.status}
              </span>
            ),
          },
          {
            header: "Actions",
            accessor: (teacher) => (
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleViewTeacher(teacher)}
                  className="p-1 text-blue-600 hover:text-blue-800"
                  title="View"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => handleEditTeacher(teacher)}
                  className="p-1 text-amber-600 hover:text-amber-800"
                  title="Edit"
                >
                  <Edit size={18} />
                </button>
              </div>
            ),
            className: "w-24 text-right",
          },
        ]}
      />

      <TeacherModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        teacher={selectedTeacher}
        mode={modalMode}
        onSave={handleSaveTeacher}
      />
    </div>
  );
};

export default TeacherPage;