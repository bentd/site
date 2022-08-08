import { client } from "./_app";
import homeQuery from "../queries/home";
import Layout from "../components/layout";
import Terminal from "../components/terminal";


export default function About({ home }) {
  return (
    <Layout home={ home } index={ 1 }>
    </Layout>
  );
}


export async function getServerSideProps() {
  return await client
    .query({ query: homeQuery })
    .then(result => ({ props: { fetched: true, home: result.data.homeCollection.items[0] }}));
}
