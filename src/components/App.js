import Home from './Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, lime } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: indigo,
		secondary: lime,
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
