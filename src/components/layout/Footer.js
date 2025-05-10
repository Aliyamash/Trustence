import {
  Github,
  Heart,
  Instagram,
  InstagramIcon,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#060e09] text-white -mt-2 py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row  lg:items-center lg:justify-between md:gap-8 mb-20">
          {/* about footer */}
          <div>
            <h2 className="font-bold title text-shadow shadow-green-500 w-fit bg-none text-2xl mb-2">Trustence</h2>
            <p>Where trust meets innovation</p>
            <p className="text-pretty">
              Our agency is founded on trust, with your confidence as our top
              priority.
            </p>
          </div>
          {/* input footer */}
          <div className="mt-8">
            <form action="">
              <div className="flex flex-col sm:flex-row gap-4 p-1">
                <input
                  className="px-4 lg:w-[20rem] w-full py-2 text-lg rounded-lg bg-[#54524C]"
                  type="email"
                  name="email"
                  placeholder="Your email here"
                />
                <button
                  className="px-6 py-2 text-lg rounded-lg bg-[#54524C]"
                  type="sumbit"
                >
                  Join
                </button>
              </div>

              <div className="flex gap-2 mt-1">
                <Heart />
                <p>
                  Please feel free to enter your email so we can contact you.
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-between md:flex-row items-baseline">
          <div className="flex">
            <p className="text-3xl">Logo</p>
          </div>

          <div>
            <p className="font-bold mb-4 mt-12 text-lg">Quick Links</p>
            <div className="flex flex-col gap-2">
            <Link href={"#"}>Home page</Link>
            <Link href={"/aboutus"}>About Us</Link>
            <Link href={"/service"}>Our Service</Link>
            <Link href={"/contactus"}>Contact Us</Link>
            <Link href={"/blog"}>Blog Posts</Link>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 mt-12 text-lg">Resources</p>
            <div className="flex flex-col gap-2">
            <Link href={"/portfolio"}>Portfilio</Link>
            <Link href={"email:ali2763.mar@gmail.com"}>Support</Link>
            <Link href={"/aboutus"}>Careers</Link>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 mt-12 text-lg">Follow Us</p>
            <div className="flex flex-col gap-2">
            <Link href={"https://www.twitter.com"}>Twitter Feed</Link>
            <Link href={"https://www.Github.com"}>GitHub Page</Link>
            <Link href={"https://www.linkedin.com"}>LinkedIn Profile</Link>
            <Link href={"https://www.instagram.com"}>Instagram Gallery</Link>
            <Link href={"https://www.youtube.com"}>YouTube Channel</Link>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 mt-12 text-lg">Contact Info</p>
            <div className="flex flex-col gap-2">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Term of Use</Link>
            <Link href={"#"}>Copyright Notice</Link>
            </div>
          </div>
        </div>

        <hr className="border-zinc-600 mt-20 md:mb-10 mb-6" />
        <div className="flex justify-between  flex-col-reverse md:flex-row px-2 ">

          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-12 ">
            <p className="text-sm pt-12 md:pt-0">© 2024 Trustence. All rights reserved.</p>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Term of Use</Link>
          </div>

          <div className="flex gap-4 mb-8 md:mb-0">
            <Link  href={"https://www.youtube.com"}>
              <Github className="icon-btn-size2" />
            </Link>
            <Link  href={"https://www.youtube.com"}>
              <Twitter className="icon-btn-size2"/>
            </Link>
            <Link href={"https://www.youtube.com"}>
              <Instagram className="icon-btn-size2"/>
            </Link>
            <Link  href={"https://www.youtube.com"}>
              <Linkedin className="icon-btn-size2"/>
            </Link>
            <Link  href={"https://www.youtube.com"}>
              <Youtube className="icon-btn-size2"/>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
