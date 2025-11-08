// app/team/page.js
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { getFetch } from "@/utils/fetch";
import { Suspense } from "react";

async function fetchTeamData() {
  try {
    const response = await getFetch("/our-team");
    return { data: response.data, error: null };
  } catch (error) {
    console.error("Error retrieving team members: ", error);
    return { data: [], error: "A problem was detected on the server" };
  }
}

export default async function Team() {
  const { data: teams, error } = await fetchTeamData();


  return (
    <div className="bg-[#0A1810] py-24 md:py-52 text-white">
      <div className="container">
        <div className="mb-32">
          <p className="font-bold">Together</p>
          <h1 className="text-6xl mt-4 mb-6 title font-bold">Our Team</h1>
          <h2>We stand by our word</h2>
          <h2>Trust us and meet the passionate team behind every project.</h2>
        </div>

        <Suspense fallback={<Spinner />}>
          {error ? (
            <div className="text-center text-red-500 text-lg py-10 font-bold">
              {error}
            </div>
          ) : (
            <div className="grid auto-cols-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center justify-items-center gap-24 gap-y-24 md:gap-4 md:gap-y-24">
              {teams.length > 0 ? (
                teams.map((member, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-80 mx-auto md:w-[19rem] h-[25rem] mb-4">
                      <Image
                        className="max-h-full max-w-full rounded-2xl object-cover mx-auto shadow-2xl shadow-[#fdfdfd42]"
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${member.profile}`}
                        alt={member.name}
                        width={304}
                        height={304}
                        unoptimized
                      />
                    </div>
                    <div className="py-2">
                      <h1 className="font-bold text-2xl text-center">{member.name}</h1>
                      <p className="text-lg text-center">{member.position}</p>
                    </div>
                    <p className="w-[80%] my-4 text-center text-pretty">{member.bio}</p>
                    <div className="flex pt-1 gap-8">
                      {member.github && member.github !== "#" && (
                        <Link href={member.github} className="hover:-translate-y-1 transition duration-300">
                          <Github className="icon-btn-size" />
                        </Link>
                      )}
                      {member.twitter && member.twitter !== "#" && (
                        <Link href={member.twitter} className="hover:-translate-y-1 transition duration-300">
                          <Twitter className="icon-btn-size" />
                        </Link>
                      )}
                      {member.linkedin && member.linkedin !== "#" && (
                        <Link href={member.linkedin} className="hover:-translate-y-1 transition duration-300">
                          <Linkedin className="icon-btn-size" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-400 text-lg py-10">
                 No members found.
                </div>
              )}
            </div>
          )}
        </Suspense>

        {/* بخش استخدام */}
        <div className="mt-64">
          <h1 className="text-4xl">We're Hiring!</h1>
          <p className="mb-8 mt-4 text-lg">
            Join our family and become exceptional.
          </p>
          <div className="flex overflow-hidden relative font-bold transition-shadow duration-700 text-white hover:text-black hover:shadow-xl hover:shadow-[#658672] p-btn items-center bg-btn2 px-8 py-4 w-fit rounded-xl">
            <div className="transition-all absolute duration-700 hover:scale-[25rem] top-1.5/3 left-4 z-0 dot bg-white h-1.5 w-1.5 rounded-full"></div>
            <Link className="z-10 text-lg transition-all duration-700" href="/discovery">
              Open positions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="w-12 h-12 border-4 border-t-green-500 border-gray-200 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-gray-300">Loading..</p>
    </div>
  );
}