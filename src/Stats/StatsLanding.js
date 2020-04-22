import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import EmptyStateMessage from './EmptyStateMessage'

const StyledHeader = styled.h1`
    font-size: 50px;
    text-align: left;
    padding-left: 5%;
    color: red;
`

const StatsLanding = ({ allCovidData }) => {

    console.log(allCovidData.state)

    return (
        <div>
            <StyledHeader>Covid</StyledHeader>
            { allCovidData.state === undefined && <EmptyStateMessage /> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allCovidData: state.Covid.allCovidData
    }
}

export default connect(mapStateToProps)( StatsLanding )
