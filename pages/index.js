import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Results from "../components/Results";
import requests from "../services/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone - NextJS, TailwindCSS </title>
        <meta
          name="description"
          content="Hulu Clone created using NextJS, TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navigation />
      <Results results={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  console.log(requests[genre]?.url)
  const url = await requests[genre]?.url || requests.fetchTrending.url;
  const request = await fetch(
    `https://api.themoviedb.org/3/${url}`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
