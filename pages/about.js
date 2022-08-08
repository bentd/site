import { client } from "./_app";
import homeQuery from "../queries/home";
import Layout from "../components/layout";
import { useEffect } from "react";


export default function About({ home }) {
  useEffect(() => {
    let newHeight = $(window).innerHeight() - $("nav").outerHeight() - $("footer").outerHeight();
    $(".coming-soon").css("height", `${newHeight}px`);
  })

  return (
    <Layout home={ home } index={ 1 }>
      <div className="container coming-soon">
        <div className="row align-items-center h-100">
          <div className="col align-self-center text-center">
            <h1>Coming Soon</h1>
          </div>        
        </div>
      </div>    
    </Layout>
  );
}


export async function getServerSideProps() {
  return await client
    .query({ query: homeQuery })
    .then(result => ({ props: { fetched: true, home: result.data.homeCollection.items[0] }}));
}
