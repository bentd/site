import { client } from "./_app";
import query from "../queries/info.gql";
import Layout from "../components/layout";
import Terminal from "../components/terminal";
import Info from "../components/info";


export default function About({ info }) {
  return (
    <Layout info={ info } index={ 1 }>
      <Info info={ info } />
    </Layout>
  );
}


export async function getStaticProps(context) {
  return await client
    .query({ query: query })
    .then(result => ({ props: { fetched: true, info: result.data.info }}));
}
