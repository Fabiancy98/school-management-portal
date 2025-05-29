"use client";

import { useState } from "react";
import { DataTable } from "@/components/data-table";
import { Eye, PenSquare, Plus } from "lucide-react";
import { StudentModal } from "@/components/student-modal";
import studentRecordsData from "@/data/student_records.json";

interface StudentRecord {
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

const StudentPage = () => {
  const [studentRecords, setStudentRecords] = useState<StudentRecord[]>(studentRecordsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null);
  const [modalMode, setModalMode] = useState<"view" | "edit" | "add">("view");

  const handleViewStudent = (student: StudentRecord) => {
    setSelectedStudent(student);
    setModalMode("view");
    setIsModalOpen(true);
  };

  const handleEditStudent = (student: StudentRecord) => {
    setSelectedStudent(student);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const handleAddStudent = () => {
    setSelectedStudent(null);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleSaveStudent = (student: StudentRecord) => {
    if (modalMode === "edit") {
      // Update existing student
      const updatedRecords = studentRecords.map((record) => 
        record.id === student.id ? { ...record, ...student } : record
      );
      setStudentRecords(updatedRecords);
    } else if (modalMode === "add") {
      // Add new student
      const newStudent = {
        ...student,
        id: Math.max(...studentRecords.map(r => r.id || 0), 0) + 1,
        submitted_at: new Date().toISOString(),
      };
      setStudentRecords([newStudent, ...studentRecords]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Student Management</h1>
        <button
          onClick={handleAddStudent}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2 hover:bg-indigo-700 transition-colors"
        >
          <Plus size={18} />
          Add New Student
        </button>
      </div>

      <DataTable
        title="All Students"
        data={studentRecords}
        columns={[
          {
            header: "Student",
            accessor: (student) => (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {student.passport_photo ? (
                    <img 
                      src={`/images/${student.passport_photo}`} 
                      alt={student.full_name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs">{student.full_name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <div className="font-medium">{student.full_name}</div>
                  <div className="text-sm text-gray-500">{student.admission_number}</div>
                </div>
              </div>
            ),
            className: "min-w-[250px]",
          },
          {
            header: "Class",
            accessor: "class",
          },
          {
            header: "Gender",
            accessor: "gender",
          },
          {
            header: "Parent",
            accessor: "parent_name",
          },
          {
            header: "Contact",
            accessor: "parent_phone",
          },
          {
            header: "Status",
            accessor: (student) => (
              <span
                className={`inline-block px-2 py-1 rounded text-xs ${
                  student.status === "active" ? "bg-green-100 text-green-800" :
                  student.status === "inactive" ? "bg-gray-100 text-gray-800" :
                  student.status === "suspended" ? "bg-red-100 text-red-800" :
                  "bg-yellow-100 text-yellow-800"
                }`}
              >
                {student.status}
              </span>
            ),
          },
          {
            header: "Actions",
            accessor: (student) => (
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => handleViewStudent(student)}
                  className="p-1 text-blue-600 hover:text-blue-800"
                  title="View"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => handleEditStudent(student)}
                  className="p-1 text-amber-600 hover:text-amber-800"
                  title="Edit"
                >
                  <PenSquare size={18} />
                </button>
              </div>
            ),
            className: "w-24 text-right",
          },
        ]}
      />

      <StudentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        student={selectedStudent}
        mode={modalMode}
        onSave={handleSaveStudent}
      />
    </div>
  );
};

export default StudentPage;