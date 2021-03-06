import React, { PureComponent } from 'react'
import { BrowserRouter } from 'react-router-dom'

import strings from '../static/strings.json'

import './app.scss'

import Routes from './Routes/Routes'

// onAuth rejected -> logout + autoLogin off 
// onComponentDidMount LoginPage -> get username/password from cookies

class App extends PureComponent {

	state = {
		user: {
			id: '',
			username: 'hayyaun',
			password: 'hayyaun',
			isAuth: false,
			token: '',
			name: 'hayyan',
			places: [
				{
					id: 'dfsdff',
					title: 'kish',
				},
				{
					id: 'sdsdwe',
					title: 'gheshm',
				}
			]
		},
		place: {
			index: 0,
			id: '',
			title: 'kish',
			header: 'Kish Island',
			detail: '',
			pictures: [
				{
					path: 'https://images.unsplash.com/photo-1581357825340-32259110788a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
				}
			],
			tag: { title: 'Ent' },
			updated: null
		}
	}

	componentDidMount() {
		const { commitLogin, user: { username, password, isAuth }, prefs: { autoLogin } } = this.props
		if (autoLogin && !isAuth)
			commitLogin({ variables: { username, password } })
	}

	render() {
		const { prefs: { theme }, getPlace } = this.props
		console.log('app rendered')

		return (
			<div className={`App ${ theme ? 'lightTheme' : 'darkTheme' }`}>
				<span>Development mode</span>
				<BrowserRouter>
					<Routes appConfig={this.props}
						strings={strings}
						getPlace={getPlace}
					/>
				</BrowserRouter>
			</div>
		)
	}
}

export default App;
