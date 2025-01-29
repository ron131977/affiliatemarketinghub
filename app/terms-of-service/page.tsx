import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Amazon Affiliate Store",
  description:
    "Read the Terms of Service for Amazon Affiliate Store to understand the conditions of using our Amazon affiliate site.",
  openGraph: {
    title: "Terms of Service - Amazon Affiliate Store",
    description: "Understand the terms and conditions for using our Amazon affiliate store.",
    type: "website",
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">
        Welcome to Amazon Affiliate Store. By accessing and using this website, you accept and agree to be bound by the
        terms and provision of this agreement.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of the Website</h2>
      <p className="mb-4">
        You agree to use the website for lawful purposes only and in a way that does not infringe the rights of,
        restrict or inhibit anyone else's use and enjoyment of the website.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Amazon Affiliate Disclosure</h2>
      <p className="mb-4">
        Amazon Affiliate Store is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
        program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Product Information and Pricing</h2>
      <p className="mb-4">
        We strive to provide accurate product information and pricing. However, pricing and availability information is
        subject to change. We are not responsible for inaccuracies or errors in product descriptions or pricing
        information.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. We are not responsible for the content or privacy
        practices of these sites.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
      <p className="mb-4">
        Amazon Affiliate Store shall not be liable for any direct, indirect, incidental, consequential, or punitive
        damages arising out of your access to, or use of, the website.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms at any time. Your continued use of the website after changes are
        posted constitutes your acceptance of the modified terms.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at:{" "}
        <a href="mailto:amazonaffiliatestore2025@gmail.com" className="text-blue-600 hover:no-underline">
        amazonaffiliatestore2025@gmail.com
        </a>
      </p>
    </div>
  )
}

