import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Nav from './components/nav/nav';
import WidgetList from './components/widgets/list/WidgetList';
import WidgetCoin from './components/widgets/coin/WidgetCoin';

export default function App() {
	return (
		<React.Fragment>
			<Nav />
			<main>
				<Box
					sx={{
					bgcolor: 'background.paper',
					pt: 8,
					pb: 6,
					}}
				>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
						>
							Cryptodata Live Widgets
						</Typography>
					</Container>
				</Box>
				<Container sx={{ py: 8 }} maxWidth="md">
					<Grid container spacing={4}>
						<WidgetList/>
						<WidgetCoin/>
					</Grid>
				</Container>
			</main>
		</React.Fragment>
	);
}
