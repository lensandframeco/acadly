export interface UseCase {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroVariant: "light" | "gradient" | "dark";
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string; icon: string }[];
  stats: { value: string; label: string }[];
  testimonialIndex: number;
  ctaTitle: string;
  ctaDescription: string;
}

export const useCases: UseCase[] = [
  {
    slug: "in-person",
    title: "In-Person Classes",
    subtitle: "Seamless attendance for physical classrooms",
    description:
      "Automate attendance in lecture halls, labs, and seminar rooms. Students check in from their phones with geofencing verification — no hardware required.",
    heroVariant: "gradient",
    challenges: [
      {
        title: "Manual Roll Call Wastes Time",
        description:
          "Taking attendance by hand in a 200-person lecture wastes 10+ minutes every class session.",
      },
      {
        title: "Buddy Punching & Fraud",
        description:
          "Sign-in sheets and clickers make it easy for students to mark attendance for absent classmates.",
      },
      {
        title: "Data Entry Overhead",
        description:
          "Transferring paper records to spreadsheets creates hours of extra administrative work each week.",
      },
    ],
    solutions: [
      {
        title: "Geofenced Check-In",
        description:
          "Students can only mark attendance when physically inside the classroom geofence.",
        icon: "MapPin",
      },
      {
        title: "Device Verification",
        description:
          "Each student's device is uniquely fingerprinted to prevent proxy attendance.",
        icon: "Fingerprint",
      },
      {
        title: "Automatic Reports",
        description:
          "Attendance data is captured instantly and synced to your LMS — zero manual entry.",
        icon: "FileText",
      },
    ],
    stats: [
      { value: "99.5%", label: "Accuracy Rate" },
      { value: "< 3s", label: "Check-in Time" },
      { value: "10hrs", label: "Saved Per Week" },
      { value: "Zero", label: "Hardware Needed" },
    ],
    testimonialIndex: 0,
    ctaTitle: "Ready to automate in-person attendance?",
    ctaDescription:
      "Start your free trial and see results from your very first class.",
  },
  {
    slug: "online",
    title: "Online Learning",
    subtitle: "Verify presence in virtual classrooms",
    description:
      "Track attendance for synchronous online sessions with the same accuracy as in-person classes. Works with Zoom, Teams, and any video platform.",
    heroVariant: "gradient",
    challenges: [
      {
        title: "Can't Verify Virtual Presence",
        description:
          "Students join video calls and walk away. There's no way to confirm they're actually paying attention.",
      },
      {
        title: "Engagement Drops Online",
        description:
          "Without physical presence, students disengage and participation plummets in virtual sessions.",
      },
      {
        title: "Manual Tracking is Unreliable",
        description:
          "Relying on video platform participant lists misses late joiners and early leavers.",
      },
    ],
    solutions: [
      {
        title: "Periodic Check-Ins",
        description:
          "Random attendance prompts throughout the session verify students remain present.",
        icon: "Clock",
      },
      {
        title: "Engagement Tracking",
        description:
          "Monitor poll responses, quiz participation, and Q&A activity as engagement signals.",
        icon: "BarChart3",
      },
      {
        title: "Platform Agnostic",
        description:
          "Works alongside Zoom, Teams, Meet, or any video conferencing tool.",
        icon: "Monitor",
      },
    ],
    stats: [
      { value: "95%", label: "Engagement Rate" },
      { value: "3x", label: "More Participation" },
      { value: "100%", label: "Platform Compatible" },
      { value: "24/7", label: "Available" },
    ],
    testimonialIndex: 2,
    ctaTitle: "Make online learning accountable",
    ctaDescription:
      "Bring the same attendance standards to your virtual classroom.",
  },
  {
    slug: "hybrid",
    title: "Hybrid Classrooms",
    subtitle: "One platform for in-person and remote students",
    description:
      "Manage attendance seamlessly for classes where some students are in the room and others join remotely. One dashboard, unified records.",
    heroVariant: "gradient",
    challenges: [
      {
        title: "Two Systems, Double the Work",
        description:
          "Managing separate attendance for in-person and remote students creates inconsistent records.",
      },
      {
        title: "Equity Concerns",
        description:
          "Remote students often feel like second-class participants, leading to lower engagement and attendance.",
      },
      {
        title: "Complex Scheduling",
        description:
          "Rotating cohorts and flexible attendance modes make scheduling a nightmare.",
      },
    ],
    solutions: [
      {
        title: "Unified Dashboard",
        description:
          "One interface shows attendance for all students regardless of how they join class.",
        icon: "LayoutGrid",
      },
      {
        title: "Flexible Check-In",
        description:
          "Geofencing for in-person, periodic prompts for remote — both equally secure.",
        icon: "Shield",
      },
      {
        title: "Cohort Management",
        description:
          "Easily manage rotating groups and track which mode each student used.",
        icon: "Users",
      },
    ],
    stats: [
      { value: "100%", label: "Mode Coverage" },
      { value: "1", label: "Unified Dashboard" },
      { value: "50%", label: "Less Admin Work" },
      { value: "Equal", label: "Experience" },
    ],
    testimonialIndex: 3,
    ctaTitle: "Unify your hybrid classroom",
    ctaDescription:
      "Stop juggling two systems. One platform for every student.",
  },
  {
    slug: "attendance",
    title: "Attendance Tracking",
    subtitle: "Accurate, automated, anti-fraud",
    description:
      "Replace manual roll calls and sign-in sheets with secure, automated attendance tracking that works across every class format.",
    heroVariant: "gradient",
    challenges: [
      {
        title: "Inaccurate Records",
        description:
          "Manual methods lead to errors, missing data, and inconsistent records across sections.",
      },
      {
        title: "Student Fraud",
        description:
          "Buddy-punching, shared clicker codes, and forged sign-in sheets undermine attendance integrity.",
      },
      {
        title: "Compliance Requirements",
        description:
          "Institutions face regulatory requirements for attendance tracking that manual methods can't reliably meet.",
      },
    ],
    solutions: [
      {
        title: "Multi-Layer Verification",
        description:
          "Geofencing, device fingerprinting, and dynamic QR codes ensure only present students check in.",
        icon: "Shield",
      },
      {
        title: "Automated Records",
        description:
          "Every check-in is timestamped and stored automatically. No manual data entry needed.",
        icon: "Clock",
      },
      {
        title: "Compliance Ready",
        description:
          "FERPA-compliant records with audit trails that satisfy institutional and regulatory requirements.",
        icon: "FileCheck",
      },
    ],
    stats: [
      { value: "99.5%", label: "Accuracy" },
      { value: "Zero", label: "Fraud Cases" },
      { value: "100%", label: "FERPA Compliant" },
      { value: "< 3s", label: "Check-in" },
    ],
    testimonialIndex: 0,
    ctaTitle: "Upgrade your attendance tracking",
    ctaDescription:
      "See how Acadly eliminates attendance fraud and saves hours every week.",
  },
  {
    slug: "engagement",
    title: "Student Engagement",
    subtitle: "Turn passive lectures into active learning",
    description:
      "Use live polls, quizzes, Q&A, and discussion tools to keep every student engaged — whether your class has 20 students or 500.",
    heroVariant: "gradient",
    challenges: [
      {
        title: "Passive Learning",
        description:
          "Traditional lectures leave students as passive listeners, leading to low retention and poor outcomes.",
      },
      {
        title: "Large Class Barriers",
        description:
          "In lecture halls with hundreds of students, it's nearly impossible to gauge understanding or foster participation.",
      },
      {
        title: "Scattered Tools",
        description:
          "Using separate apps for polls, quizzes, and Q&A creates confusion and reduces adoption.",
      },
    ],
    solutions: [
      {
        title: "Live Polling",
        description:
          "Launch polls in seconds and see real-time results. Students respond from their phones.",
        icon: "BarChart3",
      },
      {
        title: "Interactive Q&A",
        description:
          "Students submit and upvote questions. Address the most important topics first.",
        icon: "MessageCircle",
      },
      {
        title: "All-in-One Platform",
        description:
          "Polls, quizzes, Q&A, and resources — all in the same app students use for attendance.",
        icon: "Smartphone",
      },
    ],
    stats: [
      { value: "40%", label: "More Participation" },
      { value: "3x", label: "More Questions" },
      { value: "92%", label: "Student Satisfaction" },
      { value: "1", label: "Platform" },
    ],
    testimonialIndex: 4,
    ctaTitle: "Boost student engagement today",
    ctaDescription:
      "Try Acadly Engage free and transform your next lecture.",
  },
  {
    slug: "lms",
    title: "LMS Integration",
    subtitle: "Connect Acadly to your existing tools",
    description:
      "Acadly integrates seamlessly with Canvas, Blackboard, Moodle, and other LMS platforms. Sync attendance data, grades, and rosters automatically.",
    heroVariant: "gradient",
    challenges: [
      {
        title: "Data Silos",
        description:
          "Attendance data in one system and grades in another creates fragmented student records.",
      },
      {
        title: "Manual Data Transfer",
        description:
          "Exporting CSVs and manually importing them into your LMS is tedious and error-prone.",
      },
      {
        title: "Inconsistent Records",
        description:
          "Manual syncing leads to discrepancies between what's in Acadly and what's in your LMS.",
      },
    ],
    solutions: [
      {
        title: "One-Click LMS Sync",
        description:
          "Attendance data flows automatically to Canvas, Blackboard, Moodle, and D2L.",
        icon: "RefreshCw",
      },
      {
        title: "Roster Import",
        description:
          "Import class rosters directly from your LMS. No manual student entry needed.",
        icon: "Upload",
      },
      {
        title: "Grade Passback",
        description:
          "Participation and attendance grades sync back to your LMS gradebook automatically.",
        icon: "ArrowRightLeft",
      },
    ],
    stats: [
      { value: "4+", label: "LMS Platforms" },
      { value: "Auto", label: "Sync" },
      { value: "Zero", label: "Manual Entry" },
      { value: "5min", label: "Setup Time" },
    ],
    testimonialIndex: 5,
    ctaTitle: "Connect Acadly to your LMS",
    ctaDescription:
      "Set up your integration in minutes and never manually export attendance again.",
  },
];
