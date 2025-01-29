import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Us | Amazon Affiliate Store",
  description:
    "Get in touch with Amazon Affiliate Store for any queries or support regarding our Amazon affiliate products.",
  openGraph: {
    title: "Contact Amazon Affiliate Store",
    description: "Reach out to us for any questions or support needs.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">
        We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to get in touch with
        us.
      </p>
      <p className="mb-4">
        Email:{" "}
        <a href="mailto:amazonaffiliatestore2025@gmail.com" className="text-blue-600 hover:no-underline">
        amazonaffiliatestore2025@gmail.com
        </a>
      </p>
      <p className="mb-4">We aim to respond to all inquiries within 24-48 hours during business days.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions</h2>
      <p className="mb-4">
        Before reaching out, you might want to check our{" "}
        <Link href="/faq" className="text-blue-600 hover:no-underline">
          FAQ page
        </Link>{" "}
        to see if your question has already been answered.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Legal Information</h2>
      <p className="mb-4">
        For information about our policies, please refer to our{" "}
        <Link href="/privacy-policy" className="text-blue-600 hover:no-underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms-of-service" className="text-blue-600 hover:no-underline">
          Terms of Service
        </Link>
        .
      </p>
    </div>
  )
}

