import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Amazon Affiliate Store",
  description: "Read about Amazon Affiliate Store's privacy policy and how we handle your data.",
  openGraph: {
    title: "Privacy Policy - Amazon Affiliate Store",
    description: "Learn about our commitment to protecting your privacy.",
    type: "website",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">
        At Amazon Affiliate Store, we are committed to protecting your privacy. This Privacy Policy explains how we
        collect, use, and safeguard your information when you visit our website.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We do not directly collect personal information from you unless you voluntarily provide it to us, such as when
        you contact us via email.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        Any information you provide is used solely for the purpose of responding to your inquiries or improving our
        services.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Amazon Affiliate Links</h2>
      <p className="mb-4">
        Our website uses Amazon affiliate links. When you click on these links and make a purchase, we may earn a
        commission. This does not affect the price you pay for the product.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services, such as analytics tools, which may collect non-personal information about your
        visits to our website.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this privacy policy from time to time. We will notify you of any changes by posting the new
        privacy policy on this page.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at:{" "}
        <a href="mailto:amazonaffiliatestore2025@gmail.com" className="text-blue-600 hover:no-underline">
        amazonaffiliatestore2025@gmail.com
        </a>
      </p>
    </div>
  )
}

