import React from 'react'
import Badge from 'react-bootstrap/Badge'

import { StyledMessageBox, StyledLink } from '../styled-components/Stats'

const EmptyStateMessage = () => {
    return (
        <StyledMessageBox>
            <h2>Click a state below to view Stats</h2>
            <p>You're probably not a doctor, cherry picking stats doesn't tell the full story on anything, and I promise you that not much good comes from posting your opinions on Facebook</p>
            <p>It's strange in times like these to aknowledge you probably don't know everything and to listen to some professionals</p>
            <h3><Badge variant="primary" ><StyledLink href="http://www.cdc.gov">Visit cdc.gov to read from experts</StyledLink></Badge></h3>
        </StyledMessageBox>
    )
}

export default EmptyStateMessage
