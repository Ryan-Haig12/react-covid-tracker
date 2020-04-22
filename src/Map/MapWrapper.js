import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import D3Map from './D3Map'
import './Map.css'

const StyledMap = styled.div`

`

const getData = async () => {
    const data = await axios.get('https://covidtracking.com/api/v1/states/current.json')
    return data
}

const MapWrapper = () => {
    const [ map, setMap ] = useState(null)
    const mapRef = useRef()

    useEffect(() => {
        const json = require('./us-states.json')
        getData().then(covidData => setMap(new D3Map(mapRef.current, json, covidData)))
    }, [])

    return (
        <StyledMap ref={ mapRef } ></StyledMap>
    )
}

export default MapWrapper