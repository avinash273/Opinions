/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          content
          image
          userID
          topic
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          content
          image
          userID
          topic
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          content
          image
          userID
          topic
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
      id
      topicname
      createdAt
      updatedAt
    }
  }
`;
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
      id
      topicname
      createdAt
      updatedAt
    }
  }
`;
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
      id
      topicname
      createdAt
      updatedAt
    }
  }
`;
export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
      id
      content
      image
      userID
      topic
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet(
    $input: UpdateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    updateTweet(input: $input, condition: $condition) {
      id
      content
      image
      userID
      topic
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
      id
      content
      image
      userID
      topic
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        image
        userID
        topic
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        image
        userID
        topic
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        image
        userID
        topic
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTopics = /* GraphQL */ `
  mutation CreateTopics(
    $input: CreateTopicsInput!
    $condition: ModelTopicsConditionInput
  ) {
    createTopics(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        image
        userID
        topic
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTopics = /* GraphQL */ `
  mutation UpdateTopics(
    $input: UpdateTopicsInput!
    $condition: ModelTopicsConditionInput
  ) {
    updateTopics(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        image
        userID
        topic
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTopics = /* GraphQL */ `
  mutation DeleteTopics(
    $input: DeleteTopicsInput!
    $condition: ModelTopicsConditionInput
  ) {
    deleteTopics(input: $input, condition: $condition) {
      id
      userID
      tweetID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        content
        image
        userID
        topic
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
