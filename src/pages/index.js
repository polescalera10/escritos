import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { randomNumber } from "@/utils/randomNumber";
import Head from "next/head";

export default function Home({ securityNumber }) {
  return (
    <>
      <Head>
        <title>
          Alza tu voz y escribe sin ataduras, creatividad sin limitaciones |
          SinAutores.com{" "}
        </title>
        <meta
          name="description"
          content="Libera tu creatividad de forma anónima. Comparte tus poemas, escritos o mensajes con nuestra comunidad. Conviértete en un héroe anónimo. O simplemente desahógate sobre el lienzo. Manda cartas de amor u odio, nadie te va a juzgar."
        />
      </Head>
      <Hero securityNumber={securityNumber} />
      {/* <Features /> */}
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
