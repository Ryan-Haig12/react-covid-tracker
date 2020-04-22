import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { connect } from 'react-redux'

import D3Map from './D3Map'
import './Map.css'
import { getStateDataAction } from '../redux/actions/index'

const StyledMap = styled.div`

`

const getData = async () => {
    const data = await axios.get('https://covidtracking.com/api/v1/states/current.json')
    return data
}

const MapWrapper = ({ getStateDataAction }) => {
    const [ map, setMap ] = useState(null)
    const mapRef = useRef()

    useEffect(() => {
        const json = require('./us-states.json')
        getData().then(covidData => setMap(new D3Map(mapRef.current, json, covidData, getStateDataAction)))
    }, [])

    return (
        <StyledMap ref={ mapRef } ></StyledMap>
    )
}

export default connect( null, { getStateDataAction } )( MapWrapper )