import Home from './Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, red } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: {
			main: '#9C0F48',
		},
		secondary: {
			main: '#D4D925',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}

export default App;
