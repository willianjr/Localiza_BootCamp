import React, { createContext, ReactNode, useCallback, useState } from "react";
import api from "../services/api";

type GitUser = {
	id?: string
	avatar?: string
	login?: string
	name?: string
	html_url?: string
	blog?: string
	company?: string
	location?: string
	followers?: number
	following?: number
	public_gists?: number
	public_repos?: number
}
type GithubState = {
	hasUser: boolean
	loading: boolean
	user: GitUser
	repositories: any[]
	starred: any[]
}
export type GithubContextProps = {
	githubState:GithubState
	getUser?:(e:string)=>void
	getUserRepos?:(e:string)=>void
	getUserStarred?:(e:string)=>void
}

const DEFAULT_VALUE = {
  githubState:{
		hasUser:false,
		loading: false,
  	repositories: [],
  	starred: [],
		user:{}
	}
}
export const GithubContext = createContext<GithubContextProps>(DEFAULT_VALUE);

const GithubProvider = ({children}:{children:ReactNode}) => {

	const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: []
  });

	const getUser = (username:string):void => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));
    api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos
          },
        }));
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };
	const getUserRepos = (username:string):void => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };
	const getUserStarred = (username:string):void => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };
	const contextValue = {
    githubState,
		getUser: useCallback((username:string) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),

  };
	return (
		<GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );

};

export default GithubProvider;
