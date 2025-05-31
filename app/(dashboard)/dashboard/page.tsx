"use client";

import { ChevronRightIcon, GraduationCap } from "lucide-react";
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
} from "recharts";

const DashboardHomePage = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Main Content */}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Students"
          count={0}
          date="2024/05"
          className="bg-gradient-to-br from-[var(--base-color)] to-[var(--base-color-light)] text-white shadow-lg hover:shadow-xl"
          dateClassName="bg-white/20 text-white"
          icon={
            <GraduationCap />
          }
        />
        <StatsCard
          title="Teachers"
          count={32}
          date="2024/05"
          className="bg-gradient-to-br from-[var(--accent-4)] to-[var(--accent-4-light)] text-white shadow-lg hover:shadow-xl"
          dateClassName="bg-white/20 text-white"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          }
        />
        <StatsCard
          title="Parents"
          count={0}
          date="2024/05"
          className="bg-gradient-to-br from-[var(--base-color)] to-[var(--base-color-light)] text-white shadow-lg hover:shadow-xl"
          dateClassName="bg-white/20 text-white"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
          }
        />
        <StatsCard
          title="Staffs"
          count={0}
          date="2024/05"
          className="bg-gradient-to-br from-[var(--accent-4)] to-[var(--accent-4-light)] text-white shadow-lg hover:shadow-xl"
          dateClassName="bg-white/20 text-white"
          icon={
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          }
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        {/* <div className="space-y-6"> */}
        {/* Students Section */}
        <Card title="Students">
          <div className="flex items-center justify-center p-6">
            <div className="relative w-48 h-48">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--base-color-ultra-light)] to-gray-100 flex items-center justify-center shadow-inner">
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <div className="flex space-x-2">
                    <div className="text-[var(--base-color)]">
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
                    <div className="text-[var(--accent-4)]">
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
                    stroke="#f1f5f9"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="var(--base-color)"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="100"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    className="drop-shadow-sm"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="var(--accent-4)"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="180"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    className="drop-shadow-sm"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-12 pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[var(--base-color)] shadow-sm"></div>
              <div>
                <div className="font-bold text-lg">0</div>
                <div className="text-sm text-gray-600">Boys</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[var(--accent-4)] shadow-sm"></div>
              <div>
                <div className="font-bold text-lg">0</div>
                <div className="text-sm text-gray-600">Girls</div>
              </div>
            </div>
          </div>
        </Card>
        {/* Teachers Section */}
        <Card title="Teachers">
          <div className="flex items-center justify-center p-6">
            <div className="relative w-48 h-48">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center shadow-inner">
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <div className="flex space-x-2">
                    <div className="text-[var(--base-color)]">
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
                    <div className="text-[var(--accent-4)]">
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
                    stroke="#f1f5f9"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="var(--base-color)"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="130"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    className="drop-shadow-sm"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="var(--accent-4)"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="200"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    className="drop-shadow-sm"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-12 pb-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[var(--base-color)] shadow-sm"></div>
              <div>
                <div className="font-bold text-lg">13</div>
                <div className="text-sm text-gray-600">Male</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[var(--accent-4)] shadow-sm"></div>
              <div>
                <div className="font-bold text-lg">19</div>
                <div className="text-sm text-gray-600">Female</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Calendar */}
        <Card>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <button
                className="text-gray-500 hover:text-[var(--base-color)] transition-colors"
                onClick={() => {}}
              >
                <ChevronRightIcon className="w-4 h-4 rotate-180" />
              </button>
              <h3 className="font-semibold text-[var(--base-color)]">
                {new Date().toLocaleString("default", { month: "long" })}{" "}
                {new Date().getFullYear()}
              </h3>
              <button
                className="text-gray-500 hover:text-[var(--base-color)] transition-colors"
                onClick={() => {}}
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                <div
                  key={day}
                  className="text-xs text-center font-medium py-2 text-gray-600"
                >
                  {day}
                </div>
              ))}
              {(() => {
                const today = new Date();
                const currentYear = today.getFullYear();
                const currentMonth = today.getMonth();
                const currentDay = today.getDate();

                // Get first day of month (0 = Sunday, 1 = Monday, etc.)
                const firstDay = new Date(
                  currentYear,
                  currentMonth,
                  1
                ).getDay();
                // Get number of days in current month
                const daysInMonth = new Date(
                  currentYear,
                  currentMonth + 1,
                  0
                ).getDate();
                // Get number of days in previous month
                const daysInPrevMonth = new Date(
                  currentYear,
                  currentMonth,
                  0
                ).getDate();

                const days = [];

                // Add days from previous month
                for (let i = firstDay - 1; i >= 0; i--) {
                  days.push({
                    day: daysInPrevMonth - i,
                    isCurrentMonth: false,
                    isToday: false,
                  });
                }

                // Add days from current month
                for (let i = 1; i <= daysInMonth; i++) {
                  days.push({
                    day: i,
                    isCurrentMonth: true,
                    isToday: i === currentDay,
                  });
                }

                // Add days from next month to complete the grid
                const remainingCells = 42 - days.length; // 6 rows x 7 days
                for (let i = 1; i <= remainingCells; i++) {
                  days.push({
                    day: i,
                    isCurrentMonth: false,
                    isToday: false,
                  });
                }

                return days.map(({ day, isCurrentMonth, isToday }, index) => {
                  const isWeekend = index % 7 === 0 || index % 7 === 6; // Sunday (0) or Saturday (6)
                  return (
                    <div
                      key={`${day}-${index}`}
                      className={`text-sm text-center py-2 rounded-lg transition-colors ${
                        !isCurrentMonth
                          ? "text-gray-300"
                          : isToday
                            ? "bg-gradient-to-r from-[var(--base-color)] to-[var(--base-color-light)] text-white shadow-md"
                            : isWeekend
                              ? "text-red-500 hover:bg-red-50"
                              : "hover:bg-[var(--base-color-ultra-light)]"
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

        {/* Attendance Section */}
        <Card title="Attendance">
          <div className="p-1">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-sm bg-[var(--base-color)]"></div>
                  <span className="text-xs text-gray-600">Total Present</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-sm bg-[var(--accent-4)]"></div>
                  <span className="text-xs text-gray-600">Total Absent</span>
                </div>
              </div>
            </div>
            <div className="h-48 mt-2">
              <div className="w-full h-full overflow-hidden">
                <ChartContainer
                  config={{
                    present: { color: "var(--base-color)" },
                    absent: { color: "var(--accent-4)" },
                  }}
                  className="h-full">
                  <BarChart
                    data={[
                      { name: "Mon", present: 250, absent: 70 },
                      { name: "Tue", present: 200, absent: 30 },
                      { name: "Wed", present: 220, absent: 55 },
                      { name: "Thu", present: 150, absent: 45 },
                      { name: "Fri", present: 200, absent: 50 },
                      { name: "Sat", present: 250, absent: 20 }
                    ]}
                    margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
                    barGap={2}
                    barSize={14}
                  >
                    <CartesianGrid 
                      strokeDasharray="3 3" 
                      horizontal={true}
                      vertical={false}
                      stroke="#e5e7eb"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10, fill: "#64748b" }}
                      dy={5}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10, fill: "#64748b" }}
                      domain={[0, 300]}
                      tickCount={4}
                      width={30}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={
                        <ChartTooltipContent
                          indicator="dot"
                          labelClassName="text-xs font-medium"
                          className="bg-white shadow-lg border border-gray-200 rounded-lg"
                          formatter={(value: unknown, name: unknown) => {
                            const nameStr = String(name);
                            const displayName = nameStr === "present" ? "Total Present" : "Total Absent";
                            return [`${value} ${displayName}`, null] as [string, null];
                          }}
                        />
                      }
                    />
                    <Bar
                      dataKey="present"
                      name="present"
                      radius={[4, 4, 0, 0]}
                      fill="var(--base-color)"
                    />
                    <Bar
                      dataKey="absent"
                      name="absent"
                      radius={[4, 4, 0, 0]}
                      fill="var(--accent-4)"
                    />
                  </BarChart>
                </ChartContainer>
              </div>
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
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquam
                corporis recusanda aliquam minus...
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
  className?: string;
  dateClassName?: string;
  icon?: React.ReactNode;
}

const StatsCard = ({
  title,
  count,
  date,
  className = "",
  dateClassName = "",
  icon,
}: StatsCardProps) => {
  return (
    <div
      className={`relative rounded-xl p-6 overflow-hidden transition-all duration-300 ${className}`}
    >
      <div className={`absolute top-4 right-4 text-xs font-bold  px-3 py-1 rounded-full backdrop-blur-sm ${dateClassName}`}>
        {date}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider opacity-90">
            {title}
          </h2>
          <h1 className="text-3xl font-bold mt-1">{count.toLocaleString()}</h1>
        </div>
        {icon && <div className="bg-white/20 p-2 rounded-lg mt-6">{icon}</div>}
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/10"></div>
      <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full bg-white/20"></div>
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
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
      {title && (
        <div className="border-b border-gray-100 px-6 py-4 flex justify-between items-center bg-white">
          <h3 className="font-medium text-black/90 text-lg">{title}</h3>
          <div className="flex items-center space-x-2">
            {action && (
              <div className="text-black/80 hover:text-black transition-colors">
                {action}
              </div>
            )}
            <button className="text-black/70 hover:text-black transition-colors p-1 -mr-2">
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
            </button>
          </div>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default DashboardHomePage;
