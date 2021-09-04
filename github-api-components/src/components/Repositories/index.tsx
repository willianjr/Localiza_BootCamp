import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hook";
import RepositoryItem from "../Repository-item";

import * as S from "./styled";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState<any>();

	const handleGetUserRepos =  getUserRepos? getUserRepos : ()=>{};
	const handleGetUserStarred =  getUserStarred? getUserStarred : ()=>{};

  useEffect(() => {
    if (githubState.user.login) {
      handleGetUserRepos(githubState.user.login);
      handleGetUserStarred(githubState.user.login);
    }

		setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs>
          <S.WrapperTabList defaultActiveKey="repositories">
            <S.WrapperTab eventKey="repositories" title="Repositories">
							<S.WrapperTabPanel>
								<S.WrapperList>
								{githubState.repositories.map((item) => (
									<RepositoryItem
										key={item.id}
										name={item.name}
										linkToRepo={item.full_name}
										fullName={item.full_name}
									/>
								))}
							</S.WrapperList>
							</S.WrapperTabPanel>
						</S.WrapperTab>
            <S.WrapperTab eventKey="starred" title="Starred">
								<S.WrapperTabPanel>
									<S.WrapperList>
									{githubState.starred.map((item) => (
										<RepositoryItem
											key={item.id}
											name={item.name}
											linkToRepo={item.html_url}
											fullName={item.full_name}
										/>
									))}
								</S.WrapperList>
								</S.WrapperTabPanel>
						</S.WrapperTab>
          </S.WrapperTabList>


        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
