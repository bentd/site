import { client } from "./_app";
import query from "../queries/works.gql";
import Layout from "../components/layout";
import Terminal from "../components/terminal";
import Work from "../components/work";


export default function Index({ info, works }) {
  return (
    <Layout info={ info } index={ 0 }>
    <Terminal nouns={ info.nouns } />
      {works.map((work, index) =>
        <Work work={ work } index={ index } />
      )}
    </Layout>
  )
}


export async function getStaticProps(context) {
  return await client
    .query({ query: query })
    .then(result => ({ props: { fetched: true, works: result.data.works, info: result.data.info }}));
}
