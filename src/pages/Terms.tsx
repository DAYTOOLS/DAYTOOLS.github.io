import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          
          <p className="text-muted-foreground mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using DHgate's website, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on DHgate's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p className="mt-4">Under this license, you may not:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="mt-4">
              You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Product Information and Pricing</h2>
            <p>
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, 
              pricing, or other content on this website is accurate, complete, reliable, current, or error-free.
            </p>
            <p className="mt-4">
              We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available for purchase, 
              inaccuracies in product or pricing information, or problems identified by our fraud detection systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
            <p>
              Payment must be received by us before your order is dispatched. We accept various payment methods as displayed on our website. 
              All payments are processed securely.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Shipping and Delivery</h2>
            <p>
              Shipping times vary depending on your location and the shipping method selected. We are not responsible for delays caused by customs, 
              weather conditions, or other circumstances beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Returns and Refunds</h2>
            <p>
              Please refer to our Return Policy for detailed information about returns and refunds. 
              Generally, items must be returned in their original condition within the specified timeframe.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Use the website for any unlawful purpose</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Upload viruses or malicious code</li>
              <li>Collect or track personal information of others</li>
              <li>Spam, phish, or engage in similar activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by DHgate and are protected by international copyright, 
              trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p>
              In no event shall DHgate, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Disclaimer</h2>
            <p>
              Your use of the website is at your sole risk. The website is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with applicable laws, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice 
              prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us through our <a href="/contact" className="text-primary hover:underline">Contact page</a>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
