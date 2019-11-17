import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Header, Group } from '@vkontakte/vkui';
import Generator from "../components/generator-component"
import data from '../json/data'
import '../scss/app.scss';
import { platform, IOS } from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();
const generatorTime = data.time;
const generatorWho = data.who;
const generatorWhat = data.what;


const Home = (props) => {
	const finish = () => {

		console.warn(props.data);
	}

	return <Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="select">
				{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
			</HeaderButton>}
		>
			{props.id}
		</PanelHeader>
		<Group>
			<Header level="secondary">Через</Header>
			<Generator items={generatorTime} finish={finish} type="time" multipler={2} data={props.data} setData={props.setData}></Generator>
			<Header level="secondary">Даже</Header>
			<Generator items={generatorWho} finish={finish} type="who" multipler={3} data={props.data} setData={props.setData}></Generator>
			<Header level="secondary">Сможет</Header>
			<Generator items={generatorWhat} finish={finish} type="what" multipler={4} data={props.data} setData={props.setData}></Generator>
		</Group>
	</Panel>
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	data: PropTypes.object,
	setData: PropTypes.func

};

export default Home;
