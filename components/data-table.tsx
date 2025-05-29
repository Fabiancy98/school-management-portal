"use client";

import { useState, ReactNode } from "react";
import { Search, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";

type AccessorFunction<T> = (item: T) => ReactNode;

interface Column<T> {
  header: string;
  accessor: keyof T | AccessorFunction<T>;
  className?: string;
}

interface DataTableProps<T> {
  title: string;
  data: T[];
  columns: Column<T>[];
  searchPlaceholder?: string;
  itemsPerPage?: number;
}

export function DataTable<T extends object>({
  title,
  data,
  columns,
  searchPlaceholder = "Search from table...",
  itemsPerPage = 10,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data based on search term
  const filteredData = data.filter((item) => {
    if (!searchTerm) return true;
    
    // Convert item to a record for easier searching
    const record = item as Record<string, unknown>;
    return Object.entries(record).some(([, value]) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchTerm.toLowerCase());
      }
      if (typeof value === "number" || typeof value === "boolean") {
        return String(value).includes(searchTerm);
      }
      return false;
    });
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Handle pagination
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Function to render cell content safely
  const renderCellContent = (item: T, accessor: keyof T | AccessorFunction<T>): ReactNode => {
    if (typeof accessor === "function") {
      return accessor(item);
    }
    
    const value = item[accessor as keyof T];
    
    // Handle different value types
    if (value === null || value === undefined) {
      return "";
    }
    
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }
    
    if (typeof value === "object") {
      return JSON.stringify(value);
    }
    
    return String(value);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column, index) => (
                <TableHead 
                  key={index} 
                  className={column.className || ""}
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, rowIndex) => (
                <TableRow key={rowIndex} className="hover:bg-gray-50">
                  {columns.map((column, colIndex) => (
                    <TableCell key={colIndex} className={column.className || ""}>
                      {renderCellContent(item, column.accessor)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-8 text-gray-500">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="border-t px-4 py-2 flex items-center justify-between">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </button>
          <div className="flex items-center space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Show current page and surrounding pages
              let pageToShow: number;
              if (totalPages <= 5) {
                pageToShow = i + 1;
              } else if (currentPage <= 3) {
                pageToShow = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageToShow = totalPages - 4 + i;
              } else {
                pageToShow = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageToShow}
                  onClick={() => goToPage(pageToShow)}
                  className={`w-8 h-8 flex items-center justify-center rounded text-sm ${
                    currentPage === pageToShow
                      ? "bg-blue-100 text-blue-600 font-medium"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {pageToShow}
                </button>
              );
            })}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <span className="text-gray-500">...</span>
                <button
                  onClick={() => goToPage(totalPages)}
                  className="w-8 h-8 flex items-center justify-center rounded text-sm hover:bg-gray-100"
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      )}
    </div>
  );
}

interface AvatarProps {
  src?: string;
  alt: string;
  email?: string;
}

export function Avatar({ src, alt, email }: AvatarProps) {
  const initials = alt
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center space-x-3">
      <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-gray-600">
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover" />
        ) : (
          <span className="text-sm font-medium">{initials}</span>
        )}
      </div>
      <div>
        <div className="font-medium">{alt}</div>
        {email && <div className="text-xs text-gray-500">{email}</div>}
      </div>
    </div>
  );
}

export function ActionButton() {
  return (
    <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
      <MoreHorizontal className="h-4 w-4" />
    </button>
  );
}
