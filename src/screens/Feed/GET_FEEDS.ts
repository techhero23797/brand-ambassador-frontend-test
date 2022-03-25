import { gql } from "@apollo/client";

export const GET_FEEDS = gql`
  query GetMissionFeeds($limit: Int!, $offset: Int!) {
    getFeed(input: { limit: $limit, offset: $offset }) {
      hasNextPage
      items {
        ... on FBPostMission {
          title
          date
          image {
            alt
            src
            src2x
          }
          cashReward
        }
        ... on IGStoryMission {
          title
          date
          video {
            alt
            src
          }
          cashReward
        }
      }
    }
  }
`;
