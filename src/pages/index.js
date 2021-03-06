import Head from "next/head";
import { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* products feed*/}
        <ProductFeed products={products} />
      </main>
      <footer className='text-center text-sm'>
        <h4>&copy; 2020-2021 dkg Tech | Designed by Dipesh Kumar Gupta</h4>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return {
    props: {
      products,
    },
  };
}
