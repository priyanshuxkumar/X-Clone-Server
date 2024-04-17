export const types = `#graphql
    type User {
        id: ID!
        firstname: String!
        lastname: String
        email: String!
        avatar: String

        posts: [Post]
    }
`;