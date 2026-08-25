export const metadata = {
  title: "Privacy Policy",
  description: "Read the Trustence privacy policy and how website data is handled.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Header + Main Wrapper with Gradient Background */}
      <div className="gradiant-bg py-40">
        {/* Header */}
        <header className="text-white text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-base md:text-lg mt-3 opacity-90">Last updated: November 06, 2025</p>
        </header>

        {/* Main Content */}
        <main className="flex-1 py-8">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <section className="mb-10 text-white">
              <p className="leading-relaxed">
                <strong>Trustence Inc.</strong> ("we", "us", or "our") operates <strong>trust-ence.com</strong> (the "Site").
              </p>
              <p className="mt-4 leading-relaxed">
                This Privacy Policy is compliant with the <strong>General Data Protection Regulation (GDPR)</strong> and applies to all individuals in the European Union (EU) and European Economic Area (EEA).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">1. Data Controller</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Trustence Inc. is the data controller responsible for your personal data. Contact us at:{' '}
                <a href="mailto:privacy@trustenceagency.com" className="text-teal-300 underline hover:text-teal-200 transition">
                  privacy@trustenceagency.com
                </a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-6 text-white/90 space-y-3 text-lg">
                <li><strong>Personal Data:</strong> Name, email, phone, and any data submitted via contact forms.</li>
                <li><strong>Usage Data:</strong> Pages visited, referring page, approximate country, device type/model, operating system, browser, and a random session identifier.</li>
                <li><strong>IP Processing:</strong> The server processes the IP address briefly to estimate the country, then discards it. Raw IP addresses, precise location, city, and coordinates are not stored in analytics.</li>
                <li><strong>Browser Storage:</strong> A session identifier used only to distinguish visits during the current browser session.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">3. Legal Basis for Processing (GDPR Art. 6)</h2>
              <ul className="list-disc pl-6 text-white/90 space-y-3 text-lg">
                <li><strong>Consent:</strong> For newsletter signups and non-essential cookies.</li>
                <li><strong>Contract:</strong> To provide requested services (e.g., consultation forms).</li>
                <li><strong>Legitimate Interest:</strong> Site analytics and security (balanced against your rights).</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">4. Your GDPR Rights (Art. 15–22)</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-white/90 space-y-2 mt-3 text-lg">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Erase your data ("right to be forgotten")</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4 text-white/90 text-lg">
                Exercise these rights by emailing <strong>privacy@trustenceagency.com</strong>. We respond within <strong>30 days</strong>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">5. Data Retention & Security</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                We retain data only as long as necessary. We use encryption, access controls, and regular security audits to protect your information.
              </p>
              <p className="mt-4 text-white/90 text-lg leading-relaxed">
                Country and device detection are approximate. VPNs, proxies, browser privacy controls, and modified user-agent strings may affect accuracy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">6. International Transfers</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Data may be transferred outside the EEA (e.g., to Canada or USA) using <strong>EU Standard Contractual Clauses (SCCs)</strong> or adequacy decisions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">7. Complaints</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                If unsatisfied, lodge a complaint with your local <strong>Data Protection Authority (DPA)</strong>.
              </p>
            </section>

            <a
              href="mailto:privacy@trustenceagency.com"
              className="inline-block bg-white text-[#1a3c34] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Exercise Your Rights
            </a>
          </div>
        </main>
      </div>

      
    </>
  );
}
