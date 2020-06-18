import React, {useEffect, useState} from 'react'
import { fetchdailyData} from '../../api'
const Charts = () => {
    const [dailydata, setdailydata] = useState({});
    useEffect(() => {
        const fetchAPI = async () => {
            setdailydata(await fetchdailyData());
        }

        fetchAPI();
    });

    // const lineChart = (

    // )
    return (
        <div>
            <h1>charts</h1>
        </div>
    )
}
export default Charts;