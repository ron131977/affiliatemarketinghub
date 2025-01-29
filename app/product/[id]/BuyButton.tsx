import Link from "next/link"

export const BuyButton = ({ link }: { link: string }) => {
  return (
    <Link
      href={link}
      className="inline-block w-full text-center bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300"
      target="_blank"
      rel="nofollow noopener"
    >
      Buy Now on Amazon
    </Link>
  )
}

