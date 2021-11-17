import { React } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Typography from '@mui/material/Typography';

export default function Nav() {
	return (
		<AppBar position="relative">
			<Toolbar>
				<TrendingUpIcon sx={{ mr: 2 }} />
				<Typography variant="h6" color="inherit" noWrap>Cryptodata</Typography>
			</Toolbar>
		</AppBar>
	)
}
