import { client } from "./_app";
import query from "../queries/info.gql";
import Layout from "../components/layout";
import Terminal from "../components/terminal";

export default function Blog({ info }) {
  return (
    <Layout info={ info } index={ 2 }>
      <div>
        <Terminal nouns={ info.nouns } />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return await client
    .query({ query: query })
    .then(result => ({ props: { fetched: true, info: result.data.info }}));
}
