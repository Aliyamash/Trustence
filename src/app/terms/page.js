// app/terms-of-use/page.tsx
import Link from 'next/link';

export default function TermsOfUse() {
  return (
    <>
      <div className="gradiant-bg py-40">
        <header className="text-white text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Use</h1>
          <p className="text-base md:text-lg mt-3 opacity-90">Last updated: November 06, 2025</p>
        </header>

        <main className="flex-1 py-8">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <section className="mb-10 text-white">
              <p className="leading-relaxed">
                By using <strong>trust-ence.com</strong>, you agree to these Terms, which are governed by the laws of the <strong>European Union</strong> and supplemented by the laws of <strong>Ireland</strong> (as our EU representative jurisdiction).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Continued use of the Site constitutes acceptance of these Terms and our Privacy Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. User Conduct</h2>
              <ul className="list-disc pl-6 text-white/90 space-y-3 text-lg">
                <li>No unlawful, harmful, or abusive behavior.</li>
                <li>No automated scraping or data mining without consent.</li>
                <li>No interference with Site functionality.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                All content is protected under EU copyright law (Directive 2001/29/EC). Unauthorized use is prohibited.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                To the extent permitted by EU consumer law, we are not liable for indirect damages. Our total liability shall not exceed €100.
              </p>
            </section>

            <a
              href="mailto:legal@trustenceagency.com"
              className="inline-block bg-white text-[#1a3c34] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Contact Legal Team
            </a>
          </div>
        </main>
      </div>

      
    </>
  );
}
