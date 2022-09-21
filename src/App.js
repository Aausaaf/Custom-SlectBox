import { useState } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import GlobalStyle, { Container, Header, Row } from './globalStyles';

function App() {
	const [currency, setCurrency] = useState([{id:1,value:"USD"}]);

	return (
		<>
			<GlobalStyle />
			<Container>
				<Header color="red">Custom Selectbox</Header>
				<Row justify="center" align="center" mt="4rem">
					<Dropdown currency={currency} setCurrency={setCurrency} />
				</Row>
			</Container>
		</>
	);
}

export default App;
