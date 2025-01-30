import Head from 'next/head';
import Image from 'next/image';

export default function DrTrailer() {
  return (
    <>
      <Head>
        <title>DrTrailer - Author Profile</title>
        <meta name="description" content="DrTrailer - Author at Amazon Affiliate Store. Find top Amazon products and deals curated by DrTrailer." />
        <meta name="author" content="DrTrailer" />
        <meta property="og:title" content="DrTrailer - Author Profile" />
        <meta property="og:description" content="DrTrailer - Author at Amazon Affiliate Store. Find top Amazon products and deals curated by DrTrailer." />
        <meta property="og:image" content="https://gravatar.com/drtrailer2022" />
      </Head>

      <main className="container mx-auto p-4 text-center">
        <div className="flex flex-col items-center">
          <Image 
            src="https://gravatar.com/drtrailer2022"
            alt="DrTrailer"
            width={256}
            height={256}
            className="rounded-full border-4 border-gray-300"
          />
          <h1 className="text-3xl font-bold mt-4">DrTrailer</h1>
          <p className="text-lg text-gray-600">Author at Amazon Affiliate Store</p>
          <p className="mt-2 max-w-2xl">
            Welcome to DrTrailer's author page. Here you will find handpicked Amazon products and deals, along with expert insights on top-rated electronics, home goods, and more.
          </p>
        </div>
      </main>
    </>
  );
}
