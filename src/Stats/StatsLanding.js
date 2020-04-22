import React from 'react'
import { connect } from 'react-redux'

import EmptyStateMessage from './EmptyStateMessage'
import StateStats from './StateStats'
import { StyledHeader } from '../styled-components/Stats'

const StatsLanding = ({ allCovidData }) => {
    return (
        <div>
            <StyledHeader>
                <h1>React Covid Tracker</h1>
            </StyledHeader>
            { allCovidData.state === undefined ? <EmptyStateMessage /> : <StateStats allCovidData={ allCovidData } /> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allCovidData: state.Covid.allCovidData
    }
}

export default connect(mapStateToProps)( StatsLanding )
