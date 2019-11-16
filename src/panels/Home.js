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

const Home = (props) => {



	const selectSpec = async (e) => {
		//console.warn(props.setData);
		console.warn(props.data);
		props.setData(val => {
			val.spec = e.currentTarget.dataset.title;
			return val;
		})
		console.warn(props.data);

	}

	const start = () => {
		console.warn('start');
	}

	const button = props.data.spec ? <Group><Div><Button level="primary" size="xl" onClick={start}>Сгенерировать</Button> </Div></Group> : '';

	return <Panel id={props.id}>
		<PanelHeader>{props.id}</PanelHeader>
		<Group>
			<Header level="secondary">Выберите специальность</Header>
			<List>
				{generatorSpec.map(item => (
					<Cell data-title={item.title} key={item.id} onClick={selectSpec}>{item.title}</Cell>
				))}
			</List>
		</Group>

		<Group>
			<Header level="secondary">Через</Header>
			<Generator items={generatorTime} type="time" multipler={2} data={props.data} setData={props.setData}></Generator>
			<Header level="secondary">Даже</Header>
			<Generator items={generatorWho} type="who" multipler={3} data={props.data} setData={props.setData}></Generator>
			<Header level="secondary">Сможет</Header>
			<Generator items={generatorWhat} type="what" multipler={4} data={props.data} setData={props.setData}></Generator>
		</Group>
		{button}
	</Panel>
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	data: PropTypes.object,
	setData: PropTypes.func

};

export default Home;
