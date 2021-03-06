import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

import Settings from './settings'

const UPDATE_PREFS = gql`
    mutation UpdatePrefs($prefs: Prefs) {
        updatePrefs(prefs: $prefs) @client {
            theme
            lang
            autoLogin
        }
    }
`

const SettingsContainer = (props) => (
    <Mutation mutation={UPDATE_PREFS}>
        {updatePrefs =>
            <Settings
                strings={props.strings}
                prefs={props.prefs}
                updatePrefs={pref => {
                    updatePrefs({ variables: { pref } })
                }}
            />
        }
    </Mutation>
)

export default SettingsContainer