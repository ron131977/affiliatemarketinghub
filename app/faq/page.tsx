import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ | Amazon Affiliate Store",
  description:
    "Find answers to frequently asked questions about Amazon Affiliate Store and our Amazon affiliate products.",
  openGraph: {
    title: "FAQ - Amazon Affiliate Store",
    description: "Get answers to common questions about our Amazon affiliate store.",
    type: "website",
  },
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Amazon Affiliate Store?",
      answer:
        "Amazon Affiliate Store is a curated collection of high-quality products available on Amazon. We carefully select and recommend products to help you make informed purchasing decisions.",
    },
    {
      question: "How do I purchase products from Amazon Affiliate Store?",
      answer:
        "When you click on a product link, you'll be redirected to the product page on Amazon. You can then purchase the product directly from Amazon using your Amazon account.",
    },
    {
      question: "Are the prices on Amazon Affiliate Store the same as on Amazon?",
      answer:
        "Yes, the prices shown on our site are pulled directly from Amazon. However, prices on Amazon can change frequently, so we recommend checking the final price on Amazon before making a purchase.",
    },
    {
      question: "Do you offer customer support for the products?",
      answer:
        "As an affiliate store, we don't directly handle product support or returns. These are managed by Amazon. However, if you have any questions about our recommendations or site, please contact us at Amazon Affiliate Store2025@gmail.com.",
    },
    {
      question: "How do you select the products you recommend?",
      answer:
        "We carefully research and select products based on their quality, customer reviews, and overall value. Our goal is to recommend products that we believe will be useful and satisfying for our visitors.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      <p className="mt-8">
        If you can't find the answer to your question here, please feel free to{" "}
        <Link href="/contact" className="text-blue-600 hover:no-underline">
          contact us
        </Link>
        .
      </p>
    </div>
  )
}

