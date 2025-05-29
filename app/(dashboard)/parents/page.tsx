"use client";

import { useState } from "react";
import { DataTable } from "@/components/data-table";
import { Eye, PenSquare, Plus } from "lucide-react";
import { ParentModal } from "@/components/parent-modal";
import parentRecordsData from "@/data/parent_records.json";

interface ParentRecord {
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

const ParentPage = () => {
  const [parentRecords, setParentRecords] = useState<ParentRecord[]>(parentRecordsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedParent, setSelectedParent] = useState<ParentRecord | null>(null);
  const [modalMode, setModalMode] = useState<"view" | "edit" | "add">("view");

  const handleViewParent = (parent: ParentRecord) => {
    setSelectedParent(parent);
    setModalMode("view");
    setIsModalOpen(true);
  };

  const handleEditParent = (parent: ParentRecord) => {
    setSelectedParent(parent);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const handleAddParent = () => {
    setSelectedParent(null);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleSaveParent = (parent: ParentRecord) => {
    if (modalMode === "edit") {
      // Update existing parent
      const updatedRecords = parentRecords.map((record) => 
        record.id === parent.id ? { ...record, ...parent } : record
      );
      setParentRecords(updatedRecords);
    } else if (modalMode === "add") {
      // Add new parent
      const newParent = {
        ...parent,
        id: Math.max(...parentRecords.map(r => r.id || 0), 0) + 1,
        submitted_at: new Date().toISOString(),
      };
      setParentRecords([newParent, ...parentRecords]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Parent Management</h1>
        <button
          onClick={handleAddParent}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2 hover:bg-indigo-700 transition-colors"
        >
          <Plus size={18} />
          Add New Parent
        </button>
      </div>

      <DataTable
        title="All Parents"
        data={parentRecords}
        columns={[
          {
            header: "Parent",
            accessor: (parent) => (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {parent.passport_photo ? (
                    <img 
                      src={`/images/${parent.passport_photo}`} 
                      alt={parent.full_name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-xs">{parent.full_name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <div className="font-medium">{parent.full_name}</div>
                  <div className="text-sm text-gray-500">{parent.email}</div>
                </div>
              </div>
            ),
            className: "min-w-[250px]",
          },
          {
            header: "Children",
            accessor: (parent) => (
              <div>
                {parent.children && parent.children.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {parent.children.map((child, index) => (
                      <li key={index} className="text-sm">{child}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-gray-500">No children</span>
                )}
              </div>
            ),
            className: "min-w-[150px]",
          },
          {
            header: "Occupation",
            accessor: "occupation",
          },
          {
            header: "Contact",
            accessor: "phone",
          },
          {
            header: "Status",
            accessor: (parent) => (
              <span
                className={`inline-block px-2 py-1 rounded text-xs ${
                  parent.status === "active" ? "bg-green-100 text-green-800" :
                  parent.status === "inactive" ? "bg-gray-100 text-gray-800" :
                  "bg-yellow-100 text-yellow-800"
                }`}
              >
                {parent.status}
              </span>
            ),
          },
          {
            header: "Actions",
            accessor: (parent) => (
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => handleViewParent(parent)}
                  className="p-1 text-blue-600 hover:text-blue-800"
                  title="View"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => handleEditParent(parent)}
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

      <ParentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        parent={selectedParent}
        mode={modalMode}
        onSave={handleSaveParent}
      />
    </div>
  );
};

export default ParentPage;