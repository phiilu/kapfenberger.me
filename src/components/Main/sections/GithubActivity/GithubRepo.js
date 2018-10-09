import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Box = styled.div`
  padding: 16px;
  background-color: white;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  width: 300px;
  max-width: 300px;
  min-height: 150px;
  margin: 10px;

  @media (max-width: 700px) {
    width: 280px;
    min-height: 160px;
  }
`

const RepoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const RepoLink = styled(OutboundLink)`
  font-weight: 500;
  line-height: 1.25;
  font-size: 16px;
  word-break: break-all;
  text-decoration: none;
  color: #d90429;
`

const RepoDescription = styled.p`
  hyphens: auto;
  color: #586069;
  margin-top: 5px;
  margin-bottom: 10px;
  flex: 1;
`

const RepoStatusLine = styled.p`
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 0;

  @media (max-width: 340px) {
    font-size: 10px;
  }
`

const RepoLanguageWrapper = styled.span`
  display: inline-block;
  margin-right: 16px;
`

const RepoLanguageColor = styled.span`
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 0;
  margin-right: 3px;
`

const RepoStargazers = styled.span`
  display: inline-block;
  margin-right: 16px;

  & > svg {
    margin-right: 3px;
  }
`

const GithubRepo = ({ repo }) => (
  <Box>
    <RepoWrapper>
      <RepoLink href={repo.url} target="_blank" rel="noopener noreferrer">
        {repo.nameWithOwner}
      </RepoLink>
      <RepoDescription>{repo.description}</RepoDescription>
      <RepoStatusLine>
        <RepoLanguageWrapper>
          <RepoLanguageColor
            style={{ backgroundColor: repo.primaryLanguage.color }}
          />
          <span>{repo.primaryLanguage.name}</span>
        </RepoLanguageWrapper>
        <RepoStargazers>
          <FontAwesomeIcon icon="star" />
          {repo.stargazers.totalCount}
        </RepoStargazers>
        <span>Updated {format(new Date(repo.updatedAt), 'MMM DD')}</span>
      </RepoStatusLine>
    </RepoWrapper>
  </Box>
)

export default GithubRepo
