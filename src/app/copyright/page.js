import Link from 'next/link';
import { createMetadata } from '@/utils/seo';

export const metadata = createMetadata({ title: "Copyright Notice", description: "Copyright and intellectual-property information for Trustence website content.", path: "/copyright" });

export default function CopyrightNotice() {
  return (
    <>
      <div className="gradiant-bg py-40">
        <header className="text-white text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Copyright Notice</h1>
          <p className="text-base md:text-lg mt-3 opacity-90">Last updated: November 06, 2025</p>
        </header>

        <main className="flex-1 py-8">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <section className="mb-10 text-white">
              <p className="leading-relaxed">
                © 2025 <strong>Trustence Inc.</strong> All content is protected under <strong>EU Copyright Directive 2001/29/EC</strong> and national laws of EU member states.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Reporting Infringement</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                To report copyright infringement, contact:
              </p>
              <p className="mt-3 text-white/90 text-lg">
                <strong>Email:</strong>{' '}
                <a href="mailto:copyright@trustenceagency.com" className="text-teal-300 underline hover:text-teal-200 transition">
                  copyright@trustenceagency.com
                </a>
              </p>
              <p className="mt-3 text-white/90 text-lg">
                Include: description, URL, proof of ownership, and contact details.
              </p>
            </section>

            <a
              href="mailto:copyright@trustenceagency.com"
              className="inline-block bg-white text-[#1a3c34] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Report Infringement
            </a>
          </div>
        </main>
      </div>

     
    </>
  );
}
