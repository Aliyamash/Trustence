import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTeamMembers } from "@/utils/content";

const fadedMember = {
  role: "And More",
  image: "https://api.trust-ence.com/media/Team/4/6905cbbb7be4c.jpg",
  imagePlaceholder: true, // فقط برای تشخیص
};

async function fetchTeamData() {
  return { data: await getTeamMembers(), error: null };
}

export default async function TeamSection() {
  const { data: teamMembers, error } = await fetchTeamData();

  const visibleMembers = teamMembers.slice(0, 2);

  return (
    <section className="py-60 px-6 bg-[#fff8ee]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-bold text-[#060e09] mb-4 tracking-tight title">
            Meet the Team Behind{" "}
            <span className="text-6xl text-[#245336]">Trustence</span>
          </h2>
          <p className="text-lg text-[#1C422B]/70">
            A creative team of designers, programmers, and AI consultants
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 flex-wrap lg:flex-nowrap ">
          <div className="flex gap-8 flex-wrap justify-center lg:flex-nowrap">
            {visibleMembers.length > 0 ? (
              visibleMembers.map((member, index) => (
                <div
                  key={member.id} // بهتر است از id یکتا استفاده شود
                  className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative mb-4 overflow-hidden rounded-2xl shadow-lg shadow-[#818080] w-80 h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-[center_10%] hover:scale-110 transition-transform duration-500"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060e09]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-bold text-lg">{member.name}</p>
                    </div>
                  </div>
                  <p className="text-base title font-medium text-[#060e09] mt-2">
                    {member.position}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                {error || "user not found"}
              </div>
            )}

            <div className="flex flex-col items-center relative">
              <div className="relative mb-4 overflow-hidden rounded-2xl w-80 h-80">
                <Image
                  width={80}
                  height={80}
                  src={fadedMember.image}
                  alt="More team members"
                  className="w-80 h-80 object-cover blur-sm opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff8ee]/50 to-[#fff8ee]" />
              </div>
              <p className="text-base font-black mt-2 text-[#060e09] opacity-40">
                {fadedMember.role}
              </p>
            </div>
          </div>

          {/* دکمه See full team */}
          <div className="relative group/button mt-12 md:mb-8 lg:mt-0">
            <Link href="/aboutus#team" className="relative inline-block">
              <div className="absolute inset-0 bg-[#1C422B] rounded-3xl blur-xl opacity-70 group-hover/button:opacity-100 group-hover/button:scale-110 transition-all duration-700" />
              <div className="relative px-10 py-12 bg-gradient-to-br from-[#1C422B] to-[#060e09] rounded-3xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-500 group-hover/button:shadow-3xl group-hover/button:shadow-[#1C422B]/50 group-hover/button:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000" />
                <div className="relative flex flex-col items-center gap-5 text-white">
                  <span className="text-xl font-bold tracking-wider uppercase relative">
                    See full team
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 group-hover/button:w-full transition-all duration-500" />
                  </span>
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover/button:border-white/40 transition-colors duration-500" />
                    <div className="absolute inset-2 rounded-full bg-white/10 group-hover/button:bg-white/20 animate-pulse" />
                    <ArrowRight className="absolute inset-0 m-auto w-7 h-7 text-white transition-all duration-500 group-hover/button:translate-x-2 group-hover/button:scale-110" />
                  </div>
                </div>
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 left-6 w-1 h-1 bg-white/40 rounded-full animate-ping" />
                  <div className="absolute top-10 right-8 w-0.5 h-0.5 bg-white/30 rounded-full animate-ping delay-300" />
                  <div className="absolute bottom-8 left-10 w-0.5 h-0.5 bg-white/30 rounded-full animate-ping delay-700" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
