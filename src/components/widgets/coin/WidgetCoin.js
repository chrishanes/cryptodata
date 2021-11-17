import React, { useState, useEffect, useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function WidgetCoin() {
	let [coin, setCoin] = useState([]);

	const fetchData = useCallback(() => {
		fetch('https://api.coinstats.app/public/v1/coins/bitcoin?currency=GBP')
		.then(response => response.json())
		.then(data => {
			setCoin(data.coin)
		});
	}, []);

	useEffect(() => {
		fetchData()
	}, [fetchData]);
	
	return (
		<React.Fragment>
            <Container maxWidth="lg">
			    <Typography component="h2" variant="h3">Coin Price Widget</Typography>
                <Container maxWidth="sm">
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                {coin.name} <Avatar alt={coin.name} src={coin.icon} sx={{ width: 24, height: 24 }} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </Container>
		</React.Fragment>
	)
}

export default WidgetCoin;
