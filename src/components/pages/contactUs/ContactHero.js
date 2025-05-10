import Link from "next/link";

export default function ContactHero() {
    return (
      <section className="bg-white py-64 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#060e09] mb-6">
            Let's Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-[#1C422B] mb-12">
            We're ready to answer your questions and discuss your next project. Just one message away.
          </p>
          <Link href={'/discover'} className="bg-[#1C422B] text-white  px-6 md:px-8 md:py-4 py-3 rounded-2xl text-lg hover:bg-[#163320] hover:shadow-xl hover:shadow-green-900 transition duration-500">
            Free Discovery Call
          </Link>
        </div>
      </section>
    );
  }
  