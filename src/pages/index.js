import Hero from "@/components/Hero";
import { randomNumber } from "@/utils/randomNumber";
import Head from "next/head";

export default function Home({ securityNumber }) {
  return (
    <>
      <Head>
        <title>SinAutores.com</title>
      </Head>
      <Hero securityNumber={securityNumber} />
    </>
  );
}

export async function getServerSideProps() {
  const securityNumber = randomNumber();

  return {
    props: {
      securityNumber,
    },
  };
}
