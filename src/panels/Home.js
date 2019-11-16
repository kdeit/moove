import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Header, Group, Button, Div, List, Cell } from '@vkontakte/vkui';
import Generator from "../components/generator-component"
import data from '../json/data'
import '../scss/app.scss';

const generatorSpec = data.spec;
const generatorTime = data.time;
const generatorWho = data.who;
const generatorWhat = data.what;

const Home = ({ id, go }) => {

	const [spec, setSpec] = useState(null);

	const selectSpec = async (e) => {
		setSpec(e.currentTarget.dataset.title);
	}

	const start = () => {
		console.warn('start');
	}

	const button = spec ? <Group><Div><Button level="primary" size="xl" onClick={start}>Сгенерировать</Button> </Div></Group> : '';

	return <Panel id={id}>
		<PanelHeader>{id}</PanelHeader>
		<Group>
			<Header level="secondary">Выберите специальность</Header>
			<List>
				{generatorSpec.map(item => (
					<Cell data-title={item} key={item} onClick={selectSpec}>{item}</Cell>
				))}
			</List>
		</Group>
		<Group>
			<Header level="secondary">Через</Header>
			<Generator items={generatorTime} multipler={2}></Generator>
			<Header level="secondary">Даже</Header>
			<Generator items={generatorWho} multipler={3}></Generator>
			<Header level="secondary">Сможет</Header>
			<Generator items={generatorWhat} multipler={4}></Generator>
		</Group>
		{button}
	</Panel>
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,

};

export default Home;
