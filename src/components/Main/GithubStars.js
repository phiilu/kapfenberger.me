import React, { Component } from "react";
import { GraphQLClient } from 'graphql-request'
import styled from "styled-components";

import GithubRepo from "./GithubRepo"

const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
})

const GithubRepos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

class GithubStars extends Component {

    constructor(props) {
        super(props);
        this.state = { starredRepositories: [], loading: true, error: null }
        this.query = `{
            viewer { 
                starredRepositories(last: 6) {
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
        }`
    }

    componentDidMount() {
        client.request(this.query)
            .then(data =>
                this.setState({ starredRepositories: data.viewer.starredRepositories.edges, loading: false }))
            .catch(error => this.setState({ error, loading: false }))
    }

    render() {
        if (this.state.loading) {
            return <span>Loading ...</span>
        }

        if (this.state.error) {
            return <span>Github Stars could not be loaded;</span>
        }

        if (this.state.starredRepositories.length === 0) {
            return <span>Empty</span>
        }

        return <GithubRepos>
            {this.state.starredRepositories.map(({ node: repo }) => <GithubRepo key={repo.id} repo={repo}></GithubRepo>)}
        </GithubRepos>
    }
}

export default GithubStars;