import React from 'react'
import styled from 'styled-components'
import Badge from 'react-bootstrap/Badge'

const StyledEmptyState = styled.div`
    width: 700px;
    height: 65%;
    position: absolute;
    left: 25%;
    top: 10%;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    background-color: #f0f7fb;
    background-position: 9px 0px;
    background-repeat: no-repeat;
    border: solid 1px #3498db;
    border-radius: 6px;
    line-height: 18px;
    overflow: hidden;
    padding: 15px 60px;
`

const StyledLink = styled.a`
    color: black
`

const EmptyStateMessage = (props) => {
    return (
        <StyledEmptyState>
            <h2>Click a state below to view Stats</h2>
            <p>You're probably not a doctor, cherry picking stats doesn't tell the full story on anything, and I promise you that not much good comes from posting your opinions on Facebook</p>
            <p>It's strange in times like these to aknowledge you probably don't know everything and to listen to some professionals</p>
            <h3><Badge variant="primary" ><StyledLink href="http://www.cdc.gov">Visit cdc.gov to read from experts</StyledLink></Badge></h3>
        </StyledEmptyState>
    )
}

export default EmptyStateMessage
