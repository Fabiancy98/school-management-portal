"use client";

import { ChevronRightIcon, Ellipsis } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Students"
              count={0}
              date="2024/05"
              color="bg-[#CFCEFF]"
              // textColor="text-purple-600"
            />
            <StatsCard
              title="Teachers"
              count={32}
              date="2024/05"
              color="bg-[#FAE27C]"
              // textColor="text-yellow-600"
            />
            <StatsCard
              title="Parents"
              count={0}
              date="2024/05"
              color="bg-[#CFCEFF]"
              // textColor="text-purple-600"
            />
            <StatsCard
              title="Staffs"
              count={0}
              date="2024/05"
              color="bg-[#FAE27C]"
              // textColor="text-yellow-600"
            />
          </div>
          {/* Students Section */}
          <Card title="Students">
            <div className="flex items-center justify-center p-6">
              <div className="relative w-48 h-48">
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                    <div className="flex space-x-2">
                      <div className="text-blue-300">
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
                      <div className="text-yellow-300">
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
                      stroke="#76A9FA"
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
                      stroke="#FACA15"
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
                <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                <div>
                  <div className="font-bold">1,234</div>
                  <div className="text-xs text-gray-500">Boys</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
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
                      present: { color: "#f59e0b" },
                      absent: { color: "#93c5fd" },
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
                            const displayName = [60, 70, 85, 65, 75].includes(numValue) ? "Present" : "Absent";
                            return [`${numValue}% ${displayName}`, null] as [string, null];
                          }}
                        />
                      }
                    />
                    <Bar
                      dataKey="present"
                      name="Present"
                      radius={[4, 4, 0, 0]}
                      barSize={16}
                      fill="#f59e0b"
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
                      fill="#93c5fd"
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
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b] mr-1"></div>
                  <span className="text-xs">Present</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#93c5fd] mr-1"></div>
                  <span className="text-xs">Absent</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Finance Section */}
          {/* <Card title="Finance">
            <div className="p-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                  <span className="text-xs text-gray-500">income</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                  <span className="text-xs text-gray-500">expense</span>
                </div>
              </div>
              <div className="relative h-64"> */}
          {/* SVG for finance chart */}
          {/* <svg
                  className="w-full h-full"
                  viewBox="0 0 400 200"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,100 C50,80 100,120 150,60 C200,20 250,80 300,60 C350,40 400,60 400,40"
                    fill="none"
                    stroke="#76A9FA"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,140 C50,160 100,120 150,140 C200,160 250,100 300,120 C350,140 400,120 400,140"
                    fill="none"
                    stroke="#B794F4"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute left-0 bottom-0 w-full flex justify-between text-xs text-gray-500">
                  <div>$2600</div>
                  <div>$2700</div>
                </div>
              </div>
            </div>
          </Card> */}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Calendar */}
          <Card>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <button className="text-gray-500">
                  <ChevronRightIcon className="w-4 h-4 rotate-180" />
                </button>
                <h3 className="font-semibold">August 2024</h3>
                <button className="text-gray-500">
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-xs text-center font-medium py-1"
                    >
                      {day}
                    </div>
                  )
                )}
                {[
                  29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                  31, 1,
                ].map((day, i) => {
                  const isCurrentMonth = day >= 1 && day <= 31;
                  const isToday = day === 9;
                  const isWeekend = i % 7 === 5 || i % 7 === 6;
                  return (
                    <div
                      key={`${day}-${i}`}
                      className={`text-xs text-center py-1 ${isCurrentMonth ? "" : "text-gray-400"} ${
                        isToday ? "bg-blue-100 text-blue-800 rounded" : ""
                      } ${isWeekend && isCurrentMonth ? "text-red-500" : ""}`}
                    >
                      {day}
                    </div>
                  );
                })}
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
    </div>
  );
};

interface StatsCardProps {
  title: string;
  count: number;
  date: string;
  color: string;
  textColor?: string;
}

const StatsCard = ({
  title,
  count,
  date,
  color,
  textColor,
}: StatsCardProps) => {
  return (
    <div className={`${color} rounded-lg p-4 relative overflow-hidden`}>
      <div className="absolute top-4 left-4 text-[10px] text-gray-500 bg-white px-2 py-1 rounded-full">
        {date}
      </div>
      <Ellipsis
        size={28}
        strokeWidth={4}
        className="absolute top-4 right-4 text-white"
      />
      <br />
      <h1 className={`text-2xl font-semibold my-4 ${textColor}`}>
        {count.toLocaleString()}
      </h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{title}</h2>
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
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {title && (
        <div className="border-b px-4 py-3 flex justify-between items-center">
          <h3 className="font-medium">{title}</h3>
          {action && <div>{action}</div>}
          <div className="text-gray-400">
            <svg
              width="16"
              height="4"
              viewBox="0 0 16 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="currentColor" />
              <circle cx="8" cy="2" r="2" fill="currentColor" />
              <circle cx="14" cy="2" r="2" fill="currentColor" />
            </svg>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default DashboardHomePage;
