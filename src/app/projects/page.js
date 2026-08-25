import Projects from "@/components/pages/projects/Projects";

export const metadata = {
  title: "Selected Digital Projects",
  description: "Browse selected Trustence web design and development projects built for real-world impact.",
  alternates: { canonical: "/projects" },
};

export default function projects() {
  return (
    <>
    <div className="container pt-64">
        <h1 className="title text-5xl font-bold text-center mb-6">The reason they trust us</h1>
        <p className="text-xl font-bold text-center ">Strategic design, real-world impact, and partnerships built on clarity, care, and confidence.</p>
    </div>
     <Projects/>
    </>
  );
}
