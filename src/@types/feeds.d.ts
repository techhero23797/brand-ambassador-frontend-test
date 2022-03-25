export type Image = {
    alt: String
    src: String!  
    src2x: String!
  }
  
export type Video = {
    alt: String
    src: String!
  }
  
export interface IGStoryMission {
    date: String!
    title: String!
    video: Video!
    cashReward: Float!
  }
  
export interface FBPostMission {
    date: String!
    title: String!
    image: Image!
    cashReward: Float!
  }
  
export type Mission = IGStoryMission | FBPostMission
  
export interface GetFeedResponse {
    items: [Mission!]!
    hasNextPage: Boolean!
  }
  
export interface GetFeedInput {
    limit: Int!
    offset: Int!
  }
  
  export interface Query {
    getFeed(input: GetFeedInput!): GetFeedResponse!
  }
  