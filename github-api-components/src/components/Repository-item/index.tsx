import React from "react";
import * as S from "./styled";

interface RepositoryProps {
	name:string
	linkToRepo:string
	fullName:string
}

const RepositoryItem = ({ name, linkToRepo, fullName }:RepositoryProps):JSX.Element => {
  return (
    <S.Wrapper>
      <S.Wrapper.Header as="h3">{name}</S.Wrapper.Header>
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </a>
    </S.Wrapper>
  );
};

export default RepositoryItem;
