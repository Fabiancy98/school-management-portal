"use client";

import { ChevronRightIcon, Ellipsis } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";

const DashboardHomePage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Main Content */}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Students" count={0} date="2024/05" />
        <StatsCard title="Teachers" count={32} date="2024/05" />
        <StatsCard title="Parents" count={0} date="2024/05" />
        <StatsCard title="Staffs" count={0} date="2024/05" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        {/* <div className="space-y-6"> */}
          {/* Students Section */}
          <Card title="Students">
            <div className="flex items-center justify-center p-6">
              <div className="relative w-48 h-48">
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                    <div className="flex space-x-2">
                      <div className="text-[#1f1f64]">
                        <svg
                          width="24"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 18C7.58172 18 4 21.5817 4 26H20C20 21.5817 16.4183 18 12 18Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="text-[#4a4a8a]">
                        <svg
                          width="24"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 18C7.58172 18 4 21.5817 4 26H20C20 21.5817 16.4183 18 12 18Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Circular Progress */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#EDF2F7"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#1f1f64"
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset="100"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#4a4a8a"
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset="180"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-12 pb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#1f1f64]"></div>
                <div>
                  <div className="font-bold">1,234</div>
                  <div className="text-xs text-gray-500">Boys</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#4a4a8a]"></div>
                <div>
                  <div className="font-bold">1,134</div>
                  <div className="text-xs text-gray-500">Girls</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Attendance Section */}
          <Card title="Attendance">
            <div className="p-4">
              <div className="h-64">
                <div className="w-full h-full">
                  <ChartContainer
                    config={{
                      present: { color: "#4a4a8a" },  // Lighter shade of base color
                      absent: { color: "#1f1f64" },    // Base color
                    }}
                    className="h-full"
                  >
                    <BarChart
                      data={[
                        { name: "Mon", present: 60, absent: 50 },
                        { name: "Tue", present: 70, absent: 60 },
                        { name: "Wed", present: 85, absent: 75 },
                        { name: "Thu", present: 65, absent: 70 },
                        { name: "Fri", present: 75, absent: 60 },
                      ]}
                      margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#e5e7eb"
                      />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                        domain={[0, 100]}
                        tickFormatter={(value: number) => `${value}%`}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            indicator="dot"
                            labelClassName="text-xs"
                            formatter={(value: unknown) => {
                              const numValue = Number(value);
                              const displayName = [60, 70, 85, 65, 75].includes(
                                numValue
                              )
                                ? "Present"
                                : "Absent";
                              return [`${numValue}% ${displayName}`, null] as [
                                string,
                                null,
                              ];
                            }}
                          />
                        }
                      />
                      <Bar
                        dataKey="present"
                        name="Present"
                        radius={[4, 4, 0, 0]}
                        barSize={16}
                        fill="#4a4a8a"
                      >
                        <LabelList
                          dataKey="present"
                          position="top"
                          formatter={(value: unknown) => `${value}%`}
                          className="text-xs fill-muted-foreground"
                        />
                      </Bar>
                      <Bar
                        dataKey="absent"
                        name="Absent"
                        radius={[4, 4, 0, 0]}
                        barSize={16}
                        fill="#1f1f64"
                      >
                        <LabelList
                          dataKey="absent"
                          position="top"
                          formatter={(value: unknown) => `${value}%`}
                          className="text-xs fill-muted-foreground"
                        />
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#4a4a8a] mr-1"></div>
                  <span className="text-xs">Present</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#1f1f64] mr-1"></div>
                  <span className="text-xs">Absent</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Calendar */}
          <Card>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {}}
                >
                  <ChevronRightIcon className="w-4 h-4 rotate-180" />
                </button>
                <h3 className="font-semibold">
                  {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}
                </h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {}}
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-xs text-center font-medium py-1 text-gray-500"
                    >
                      {day}
                    </div>
                  )
                )}
                {(() => {
                  const today = new Date();
                  const currentYear = today.getFullYear();
                  const currentMonth = today.getMonth();
                  const currentDay = today.getDate();
                  
                  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
                  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
                  // Get number of days in current month
                  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
                  // Get number of days in previous month
                  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
                  
                  const days = [];
                  
                  // Add days from previous month
                  for (let i = firstDay - 1; i >= 0; i--) {
                    days.push({
                      day: daysInPrevMonth - i,
                      isCurrentMonth: false,
                      isToday: false
                    });
                  }
                  
                  // Add days from current month
                  for (let i = 1; i <= daysInMonth; i++) {
                    days.push({
                      day: i,
                      isCurrentMonth: true,
                      isToday: i === currentDay
                    });
                  }
                  
                  // Add days from next month to complete the grid
                  const remainingCells = 42 - days.length; // 6 rows x 7 days
                  for (let i = 1; i <= remainingCells; i++) {
                    days.push({
                      day: i,
                      isCurrentMonth: false,
                      isToday: false
                    });
                  }
                  
                  return days.map(({ day, isCurrentMonth, isToday }, index) => {
                    const isWeekend = index % 7 === 0 || index % 7 === 6; // Sunday (0) or Saturday (6)
                    return (
                      <div
                        key={`${day}-${index}`}
                        className={`text-xs text-center py-1 rounded-md ${
                          !isCurrentMonth ? 'text-gray-300' : 
                          isToday ? 'bg-[#1f1f64] text-white' : 
                          isWeekend ? 'text-red-500' : ''
                        }`}
                      >
                        {day}
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          </Card>

          {/* Events */}
          <Card title="Events">
            <div className="space-y-4 p-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between text-sm">
                    <div className="font-medium">Lorem ipsum dolor</div>
                    <div className="text-gray-500">12:00 PM - 2:00 PM</div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Announcements */}
          <Card
            title="Announcements"
            action={<span className="text-xs text-blue-500">View All</span>}
          >
            <div className="p-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-sm">Lorem ipsum dolor sit</h4>
                  <span className="text-xs text-gray-500">2025-01-01</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisquam corporis recusanda aliquam minus...
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    // </div>
  );
};

interface StatsCardProps {
  title: string;
  count: number;
  date: string;
}

const StatsCard = ({ title, count, date }: StatsCardProps) => {
  return (
    <div className="bg-[#1f1f64] rounded-lg p-4 relative overflow-hidden text-white">
      <div className="absolute top-4 left-4 text-[10px] text-white/70 bg-white/10 px-2 py-1 rounded-full">
        {date}
      </div>
      <Ellipsis
        size={28}
        strokeWidth={4}
        className="absolute top-4 right-4 text-white/70"
      />
      <br />
      <h1 className="text-2xl font-semibold my-4">{count.toLocaleString()}</h1>
      <h2 className="capitalize text-sm font-medium text-white/80">{title}</h2>
    </div>
  );
};

interface CardProps {
  title?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}

const Card = ({ title, children, action }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
      {title && (
        <div className="border-b border-gray-100 px-4 py-3 flex justify-between items-center bg-[#1f1f64]">
          <h3 className="font-medium text-white">{title}</h3>
          {action && <div>{action}</div>}
          <div className="text-white/70">
            <svg
              width="16"
              height="4"
              viewBox="0 0 16 4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="currentColor" />
              <circle cx="8" cy="2" r="2" fill="currentColor" />
              <circle cx="14" cy="2" r="2" fill="currentColor" />
            </svg>
          </div>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default DashboardHomePage;
