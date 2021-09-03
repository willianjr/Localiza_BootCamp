import React, { ReactNode, useState } from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import * as S from "./styled";

import useGithub from "../../hooks/github-hook";


const Search = ():JSX.Element => {

	const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState('');

	const handleGetUser =  getUser? getUser : ()=>{};

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return handleGetUser(usernameForSearch);
  };

	return (
			<Form.Group>
				<S.Containers>
 						<Col>
							<Form.Control size="lg" type="text" placeholder="Digite o nome para procurar"
								onChange={(event) => setUsernameForSearch(event.target.value)} />
							</Col>
							<Col md={1}>
							<S.Button type="submit" className="my-1" onClick={submitGetUser}>
    							Submit
  						</S.Button>
							</Col>
					</S.Containers>
			</Form.Group>

)
};

export default Search ;
