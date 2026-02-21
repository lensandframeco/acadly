export interface Feature {
  icon: string;
  title: string;
  description: string;
  category: "attendance" | "engagement" | "analytics" | "integration";
}

export const acadlyFeatures: Feature[] = [
  {
    icon: "Shield",
    title: "Anti-Fraud Protection",
    description:
      "Location verification, device fingerprinting, and liveness checks prevent buddy-punching and spoofing.",
    category: "attendance",
  },
  {
    icon: "BarChart3",
    title: "Real-Time Analytics",
    description:
      "Track attendance trends, identify at-risk students, and export reports instantly from your dashboard.",
    category: "analytics",
  },
  {
    icon: "Smartphone",
    title: "Mobile-First",
    description:
      "Students check in from their phones in under 3 seconds. No extra hardware or apps required.",
    category: "attendance",
  },
  {
    icon: "Clock",
    title: "Automated Scheduling",
    description:
      "Set up recurring class schedules and let Acadly handle the rest. Attendance windows open and close automatically.",
    category: "attendance",
  },
  {
    icon: "Lock",
    title: "Privacy-First",
    description:
      "FERPA-compliant with end-to-end encryption. Student data is never shared with third parties.",
    category: "integration",
  },
  {
    icon: "LayoutGrid",
    title: "LMS Integration",
    description:
      "Seamlessly connects with Canvas, Blackboard, Moodle, and more. Sync attendance data automatically.",
    category: "integration",
  },
  {
    icon: "MessageCircle",
    title: "Live Polls & Quizzes",
    description:
      "Launch real-time polls and quick quizzes to check understanding and keep students engaged.",
    category: "engagement",
  },
  {
    icon: "Hand",
    title: "Digital Hand Raise",
    description:
      "Students can raise their hand digitally, making it easy to manage questions in large lectures.",
    category: "engagement",
  },
  {
    icon: "FileText",
    title: "In-Class Resources",
    description:
      "Share slides, documents, and links during class. Students access everything from one place.",
    category: "engagement",
  },
  {
    icon: "Users",
    title: "Discussion Boards",
    description:
      "Foster peer-to-peer learning with threaded discussions tied to each class session.",
    category: "engagement",
  },
  {
    icon: "Download",
    title: "Export & Reports",
    description:
      "Export attendance data in CSV, PDF, or sync directly with your LMS. Generate custom reports.",
    category: "analytics",
  },
  {
    icon: "Bell",
    title: "Smart Notifications",
    description:
      "Automated reminders for students about upcoming classes, assignments, and attendance alerts.",
    category: "analytics",
  },
];

export const hereFeatures: Feature[] = [
  {
    icon: "MapPin",
    title: "Geofenced Check-In",
    description:
      "Students can only check in when physically present within the classroom geofence.",
    category: "attendance",
  },
  {
    icon: "Wifi",
    title: "Bluetooth Beacons",
    description:
      "Optional Bluetooth beacon support for precise indoor positioning and verification.",
    category: "attendance",
  },
  {
    icon: "QrCode",
    title: "Dynamic QR Codes",
    description:
      "Time-rotating QR codes displayed in class that prevent screenshot sharing.",
    category: "attendance",
  },
  {
    icon: "Fingerprint",
    title: "Device Verification",
    description:
      "Each device is uniquely fingerprinted to prevent proxy attendance.",
    category: "attendance",
  },
];

export const engageFeatures: Feature[] = [
  {
    icon: "MessageCircle",
    title: "Live Polling",
    description:
      "Launch real-time polls and see results instantly. Support for MCQ, word cloud, and open-ended responses.",
    category: "engagement",
  },
  {
    icon: "HelpCircle",
    title: "Q&A Sessions",
    description:
      "Students submit and upvote questions. Instructors see the most popular topics in real time.",
    category: "engagement",
  },
  {
    icon: "PenTool",
    title: "In-Class Quizzes",
    description:
      "Quick formative assessments with auto-grading and instant feedback for students.",
    category: "engagement",
  },
  {
    icon: "Share2",
    title: "Resource Sharing",
    description:
      "Share slides, links, and files in real time. Students access all materials in one timeline.",
    category: "engagement",
  },
];

export const featureCategories = [
  { id: "attendance", label: "Attendance", icon: "ClipboardCheck" },
  { id: "engagement", label: "Engagement", icon: "Zap" },
  { id: "analytics", label: "Analytics", icon: "BarChart3" },
  { id: "integration", label: "Integrations", icon: "Plug" },
];
