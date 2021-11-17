import React, { useState, useEffect, useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function WidgetList() {
	let [coins, setCoins] = useState([]);

	const fetchData = useCallback(() => {
		fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=GBP')
		.then(response => response.json())
		.then(data => {
			setCoins(data.coins)
		});
	}, []);

	useEffect(() => {
		fetchData()
	}, [fetchData]);
	
	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<Typography component="h2" variant="h3">Coin List</Typography>
				<Card variant="outlined">
					<CardContent>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
								<TableRow>
									<TableCell align="center">#</TableCell>
									<TableCell>Name</TableCell>
									<TableCell align="right">Change (24h)</TableCell>
									<TableCell align="right">Price</TableCell>
									<TableCell align="right">Volume</TableCell>
								</TableRow>
								</TableHead>
								<TableBody>
									{coins.map((coin, index) => (
										<TableRow
											key={coin.id}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
											>
											<TableCell align="center" component="th" scope="row">{index+1}</TableCell>
											<TableCell component="th" scope="row">{coin.name} <Avatar alt={coin.name} src={coin.icon} sx={{ width: 24, height: 24 }} /></TableCell>
											<TableCell align="right">{coin.priceChange1d}</TableCell>
											<TableCell align="right">{coin.price.toLocaleString()}</TableCell>
											<TableCell align="right">{coin.volume.toLocaleString()}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</CardContent>
				</Card>
			</Container>
		</React.Fragment>
	)
}

export default WidgetList;
