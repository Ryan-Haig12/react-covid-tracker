import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
    font-size: 50px;
    text-align: left;
    padding-left: 5%;
    color: red;
`

const StatsLanding = (props) => {
    return (
        <div>
            <StyledHeader>Covid</StyledHeader>
        </div>
    )
}

export default StatsLanding
