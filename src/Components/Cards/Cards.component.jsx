import React from 'react'
import { Card, CardContent, Typography, Grid} from '@material-ui/core';

import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading ...'
    }
    return (
        <div className={styles.container}>
            <Grid className = {styles.grid} container>
                <Grid item component ={ Card }  className={cx(styles.cards, styles.infected)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected
                        
                    </Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end ={confirmed.value}
                    duration={3}
                    separator = ','/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of active case of covid -19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid className = {styles.grid} container>
                <Grid item component ={ Card }  className={cx(styles.cards, styles.recovered)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered
                        
                    </Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end ={recovered.value}
                    duration={3}
                    separator = ','/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Recovered of covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid className = {styles.grid} container>
                <Grid item component ={ Card } className={cx(styles.cards, styles.deaths)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths
                        
                    </Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end ={deaths.value}
                    duration={3}
                    separator = ','/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Deaths by covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;