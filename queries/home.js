import { gql } from "@apollo/client";

export default gql`
  {
    homeCollection(limit: 1) {
      items {
        name
        nouns
        greeting
        role
        headshot {
          description
          url
        }
        skills
        university
        degree
        graduationDate
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
  }
`;
