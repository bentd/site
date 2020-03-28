import { Component } from "React";
import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";
import Head from "../components/head";
import Nav from "../components/nav";
import Terminal from "../components/terminal";
import Info from "../components/info";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/",
  fetch: fetch
});

const client = new ApolloClient({
  cache,
  link
});

const emptyHome = {
  name: "",
  heroNouns: [],
  greeting: "",
  role: "",
  skills: [],
  university: "",
  degree: "",
  graduationDate: "",
  hobbyLabel: "",
  hobbyPhoto: {},
  contactMessage: "",
  contactEmail: "",
  contactLabel1: "",
  contactLink1: "",
  contactLabel2: "",
  contactLink2: "",
  contactLabel3: "",
  contactLink3: ""
};

function Index({ info }) {
  return (
    <div>
      <Head title={ info.name }></Head>
      <Nav name={ info.name }></Nav>
      <Terminal></Terminal>
      <Info info={ info }></Info>
    </div>
  )
}

export async function getServerSideProps(context) {
  // NOTE: componentDidMount is not used in next.js
  return await client
    .query({
      query: gql`
        query {
          home {
            name
            heroNouns
            greeting
            role
            headshotPhoto {
              fields {
                file {
                  url
                }
              }
            }
            skills
            university
            degree
            graduationDate
            hobbyLabel
            hobbyPhoto {
              fields {
                file {
                  url
                }
              }
            }
            contactMessage
            contactEmail
            contactLabel1
            contactLink1
            contactLabel2
            contactLink2
            contactLabel3
            contactLink3
          }
        }
      `
  })
  .then(result => {
    return { props: {
      fetched: true,
      info: result.data.home }
    };
  });
}

export default Index;
