import { request, gql } from "graphql-request"

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphqlAPI = 'https://api-ap-northeast-1.hygraph.com/v2/cln83lwwcg0ge01uo96dy8ph1/master'

export const getProject = async () => {
  const query = gql`
    query MyQuery {
      projectsConnection {
        edges {
          node {
            name
            createdAt
            slug
            image {
              url
            }
            projectTypes {
              name
              slug
            }
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result
}

export const getProjectDetails = async (slug:any) => {
  const query = gql`
    query GetProjectDetails($slug: String!) {
      project(where: {slug: $slug}) {
        image {
          url
        }
        createdAt
        name
        slug
      }
    }
`
  const result = await request(graphqlAPI, query, {slug})
  return result
}

export const getQuestion = async () => {
  const query = gql`
    query Assets {
      questionsConnection {
        edges {
          node {
            title
            answer
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result
}


export const getBlog = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            excerpt
            featuredPost
            slug
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result
}

export const getBlogDetails = async (slug:any) => {
  const query = gql`
    query GetBlogDetail($slug: String!) {
      post(where: {slug: $slug}) {
        slug
        title
        content {
          html
        }
        catelories {
          name
        }
        featuredImage {
          url
        }
      }
    }
`
  const result = await request(graphqlAPI, query, {slug})
  return result
}