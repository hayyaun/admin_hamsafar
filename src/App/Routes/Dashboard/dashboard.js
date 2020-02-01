import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Nav from './Nav/nav'
import Pane from './Pane/pane'
import Pages from './Pages/pages'
import './dashboard.scss'

class Dashboard extends Component {

    UNSAFE_componentWillMount() {
        if(!this.props.user.isAuth)
            this.props.history.push('/loading')
    }

    UNSAFE_componentWillUpdate(newProps) {
        if(!newProps.user.isAuth)
            this.props.history.push('/loading')
    }

    render() {
        const dashboard = this.props.strings.dashboard
        const { prefs, user, changeUser, profile, changeProfile } = this.props

        return (
            <div className="Dashboard" 
                dir={prefs.lang ? 'rtl':'ltr'}
                style={{ 
                    background: prefs.theme? 
                    'rgba(255, 255, 255, 0.95)':
                    'rgba(0, 0, 0, 0.75)' 
                }}
            >
                <Nav dashboard={dashboard} prefs={prefs} changeUser={changeUser} />
                <Pages dashboard={dashboard} prefs={prefs} profile={profile} changeProfile={changeProfile} />
                <Pane dashboard={dashboard} prefs={prefs} user={user} profile={profile} />
            </div>
        );
    }
}

export default withRouter(Dashboard);