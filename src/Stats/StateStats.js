import React from 'react'

import states_hash from '../utils/states_hash'
import { StyledMessageBox, StateName, StateGrade } from '../styled-components/Stats'

const StateStats = ({ allCovidData }) => {

    console.log(allCovidData)

    const getStateName = initials => {
        for (let [key, value] of Object.entries(states_hash)) {
            if(value === initials) return key
        }
    }

    const getStyledStat = (text, stat) => {
        return <h5>{ `${ text }: ${ stat || 'n/a' }` }</h5>
    }

    return (
        <div>
            <StateName>
                {getStateName(allCovidData.state)}
            </StateName>
            <StateGrade>
                <h3>Grade: { allCovidData.grade }</h3>
                <h6>State grade is based on</h6>
                <h6>the quality and reliability</h6>
                <h6>of the data </h6>
                <h6>provided by the state</h6>
            </StateGrade>
            <StyledMessageBox>
                { getStyledStat('Number of Confirmed Cases', allCovidData.positive) }
                { getStyledStat('Number Of Negative Results', allCovidData.negative) }
                { getStyledStat('Total Tested', allCovidData.total) }
                { getStyledStat('People Hospitalized', allCovidData.hospitalized) }
                { getStyledStat('People Dead', allCovidData.death) }
                { getStyledStat('People Currently Hospitalized', allCovidData.hospitalizedCurrently) }
            </StyledMessageBox>
        </div>
    )
}

export default StateStats
