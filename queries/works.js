import { gql } from "@apollo/client";

export default worksQuery = gql`
  {
    workCollection {
      items {
        title
        description
        galleryCollection {
          items {
            description
            url
          }
        }
        link
        order
        label
      }
    }
  }
`;
