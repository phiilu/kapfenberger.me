import React, { Component } from "react";
import { GraphQLClient } from "graphql-request";
import styled, { keyframes } from "styled-components";

import GithubRepo from "./GithubRepo";

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});

const GithubRepos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
`;

const GithubRepoPlaceholder = styled.div`
  background: #eee;
  border-radius: 3px;
  margin: 10px;
  width: 300px;
  height: 150px;
  animation: ${pulse} 1s linear infinite;
  animation-delay: ${p => p.delay || 0}ms;

  @media (max-width: 700px) {
    width: 280px;
    min-height: 160px;
    max-height: 160px;
  }
`;

const ErrorMessage = styled.h4`
  text-align: center;
  color: #d90429;
`;

class GithubStars extends Component {
  constructor(props) {
    super(props);
    this.state = { starredRepositories: [], loading: true, error: null };
    this.query = `{
            viewer { 
                starredRepositories(first: 6, orderBy: {field: STARRED_AT, direction: DESC}) {
                    edges {
                        node {
                            id
                            nameWithOwner
                            url
                            description
                            primaryLanguage {
                                color
                                name
                            }
                            stargazers {
                                totalCount
                            }
                            updatedAt
                        }
                    }
                }
            }
        }`;
  }

  componentDidMount() {
    client
      .request(this.query)
      .then(data =>
        this.setState({
          starredRepositories: data.viewer.starredRepositories.edges,
          loading: false
        })
      )
      .catch(error => this.setState({ error, loading: false }));
  }

  render() {
    if (this.state.loading) {
      return (
        <GithubRepos>
          {[...Array(6)].map((e, i) => (
            <GithubRepoPlaceholder key={i} delay={i * 50} />
          ))}
        </GithubRepos>
      );
    }

    if (this.state.error) {
      return (
        <ErrorMessage>Github Stars could not be loaded R.I.P.</ErrorMessage>
      );
    }

    if (this.state.starredRepositories.length === 0) {
      return <span>Empty</span>;
    }

    return (
      <GithubRepos>
        {this.state.starredRepositories.map(({ node: repo }) => (
          <GithubRepo key={repo.id} repo={repo} />
        ))}
      </GithubRepos>
    );
  }
}

export default GithubStars;
