import { useContext } from "react";
import { GithubContext, GithubContextProps } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred } = useContext<GithubContextProps>(GithubContext);
  return { githubState, getUser, getUserRepos, getUserStarred };
};

export default useGithub;
