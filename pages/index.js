import { client } from "./_app";
import homeQuery from "../queries/home";
import Layout from "../components/layout";
import Terminal from "../components/terminal";
import Home from "../components/home";
import { resolve } from "styled-jsx/css";


export default function Index({ home }) {
  return (
    <Layout home={ home } index={ 0 }>
      <Terminal nouns={ home.nouns } />
      <Home home={ home } />
    </Layout>
  )
}


export async function getServerSideProps() {
  return await client
    .query({ query: homeQuery })
    .then(result => ({ props: { fetched: true, home: result.data.homeCollection.items[0] }}));
}