export default function TermsPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
        <div className="w-full max-w-3xl p-10 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
          <h2 className="text-4xl font-extrabold text-center text-blue-400 mb-6">Terms and Conditions</h2>
          <p className="text-lg text-center text-gray-300 mb-8">*Terms and Conditions for SEO Services*</p>
  
          <div className="text-gray-300 space-y-6">
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">1. Introduction</h3>
              <p>By engaging our SEO services, you agree to the following terms and conditions. These terms are designed to ensure clarity and protect both parties throughout the project.</p>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">2. Services Provided</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Keyword research</li>
                <li>On-page and off-page optimization</li>
                <li>Content creation and optimization</li>
                <li>Technical SEO improvements</li>
                <li>Link building strategies</li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">3. Client Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate information about their website and business.</li>
                <li>Grant necessary access to website platforms, analytics tools, and hosting accounts.</li>
                <li>Understand that SEO results depend on various factors, including search engine algorithms and market competition.</li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">4. Payment Terms</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Payment is required as agreed upon before work begins.</li>
                <li>Full payment or an agreed deposit must be made upfront.</li>
                <li>Failure to make payments may result in paused services.</li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">5. Refund Policy</h3>
              <p>Due to the nature of SEO services, <strong>no refunds</strong> will be provided once work has been initiated or completed. SEO requires substantial time and effort, and results may take time to manifest.</p>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">6. Results Disclaimer</h3>
              <p>While we employ proven SEO strategies, we cannot guarantee specific rankings or results due to factors beyond our control, such as algorithm updates or market competition.</p>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">7. Timelines and Deliverables</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>We will provide an estimated timeline for project milestones.</li>
                <li>Delays caused by the client’s failure to provide requested information may affect timelines.</li>
              </ul>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">8. Confidentiality</h3>
              <p>Both parties agree to keep sensitive business information, strategies, and data confidential.</p>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">9. Limitation of Liability</h3>
              <p>We are not liable for damages, loss of revenue, or business interruptions resulting from SEO changes or third-party actions.</p>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">10. Termination of Services</h3>
              <p>Either party may terminate services with written notice. Any outstanding payments for completed work must be settled.</p>
            </section>
  
            <section>
              <h3 className="text-2xl font-semibold text-blue-400">11. Governing Law</h3>
              <p>These terms are governed by the laws of [Your Jurisdiction].</p>
            </section>
  
            <p className="text-md mt-6 text-gray-400 text-center">
              By proceeding with our SEO services, you confirm that you have read, understood, and agreed to these terms.
            </p>
          </div>
        </div>
      </div>
    );
  }
  