import {
  BookOpenText,
  CalendarDays,
  GraduationCap,
  House,
  NotebookPen,
  Users,
  UsersRound,
} from "lucide-react";

export const menuItems = [
  {
    icon: <House size={20} strokeWidth={0.75} />,
    label: "Home",
    href: "/dashboard",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: <GraduationCap size={20} strokeWidth={0.75} />,
    label: "Teachers",
    href: "/teachers",
    visible: ["admin", "teacher"],
  },
  {
    icon: <Users size={20} strokeWidth={0.75} />,
    label: "Students",
    href: "/students",
    visible: ["admin", "teacher"],
  },
  {
    icon: <UsersRound size={20} strokeWidth={0.75} />,
    label: "Parents",
    href: "/parents",
    visible: ["admin", "teacher"],
  },
  {
    icon: <BookOpenText size={20} strokeWidth={0.75} />,
    label: "Subjects",
    href: "/subjects",
    visible: ["admin"],
  },
  {
    icon: <BookOpenText size={20} strokeWidth={0.75} />,
    label: "Classes",
    href: "/classes",
    visible: ["admin", "teacher"],
  },
  {
    icon: <NotebookPen size={20} strokeWidth={0.75} />,
    label: "Lessons",
    href: "/lessons",
    visible: ["admin", "teacher"],
  },
  {
    icon: <CalendarDays size={20} strokeWidth={0.75} />,
    label: "Events",
    href: "events",
    visible: ["admin", "teacher", "student", "parent"],
  },
];

// {
//   icon: "/exam.png",
//   label: "Exams",
//   href: "exams",
//   visible: ["admin", "teacher", "student", "parent"],
// },
// {
//   icon: "/assignment.png",
//   label: "Assignments",
//   href: "assignments",
//   visible: ["admin", "teacher", "student", "parent"],
// },
// {
//   icon: "/result.png",
//   label: "Results",
//   href: "results",
//   visible: ["admin", "teacher", "student", "parent"],
// },
// {
//   icon: "/attendance.png",
//   label: "Attendance",
//   href: "attendance",
//   visible: ["admin", "teacher", "student", "parent"],
// },
