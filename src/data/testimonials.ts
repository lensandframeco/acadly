export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  institution: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Acadly has completely transformed how we handle attendance. What used to take 10 minutes at the start of every lecture now happens automatically in seconds.",
    name: "Dr. Sarah Chen",
    role: "Professor of Computer Science",
    institution: "Purdue University",
  },
  {
    quote:
      "The analytics dashboard alone is worth the investment. We can identify at-risk students weeks earlier than before and intervene before it's too late.",
    name: "James Mitchell",
    role: "Dean of Students",
    institution: "University of Illinois",
  },
  {
    quote:
      "We evaluated five attendance solutions. Acadly was the only one that worked seamlessly across in-person, online, and hybrid classes without any extra hardware.",
    name: "Prof. Maria Gonzalez",
    role: "Director of Educational Technology",
    institution: "Arizona State University",
  },
  {
    quote:
      "My students love it. The check-in process is so fast they barely notice it, and I get perfect attendance records without lifting a finger.",
    name: "Dr. Robert Kim",
    role: "Associate Professor of Engineering",
    institution: "Georgia Tech",
  },
  {
    quote:
      "Acadly Engage's real-time polling and Q&A features have made my 300-person lectures feel as interactive as a small seminar. Participation is up 40%.",
    name: "Dr. Emily Watson",
    role: "Professor of Biology",
    institution: "University of Michigan",
  },
  {
    quote:
      "The LMS integration was seamless. Attendance data flows directly into Canvas, saving our registrar's office countless hours every semester.",
    name: "David Park",
    role: "IT Director",
    institution: "Indiana University",
  },
];
