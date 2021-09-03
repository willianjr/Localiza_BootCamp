import React from 'react';
import { ThemeProvider } from 'styled-components';
import  'bootstrap/dist/css/bootstrap.min.css' ;

import theme from './global/theme'
import {ResetCSS, Body} from './global/reset-css'
import {Layout, Search, Profile} from './components'

import useGithub from './hooks/github-hook';

function App() {
	const {githubState} = useGithub();

  return (
		<ThemeProvider theme={theme}>
			<Body/>
			<ResetCSS/>
    	<Layout>
				<Search/>
				{githubState.hasUser ? (
				<>
						{githubState.loading ? (
						<>
							<h1>Loading</h1>
						</>
						) :
						(<>
								<Profile/>
						</>)}
				</>
				) :
				(<>
					<h1>Não encontramos ninguem</h1>
				</>)}

			</Layout>
		</ThemeProvider>
  );
}

export default App;
