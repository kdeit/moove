import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Header, Group, Div } from '@vkontakte/vkui';
import Generator from "../components/generator-component"
import data from '../json/data'
import '../scss/app.scss';
import { platform, IOS } from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import logo from "../static/img/logo.svg"
import ico1 from "../static/img/ico1.svg"
import ico2 from "../static/img/ico2.svg"
import ico3 from "../static/img/ico3.svg"

const osName = platform();
const generatorTime = data.time;
const generatorWho = data.who;
const generatorWhat = data.what;


const Home = (props) => {
	const finish = () => {
		let isAllGenerate = true;
		for (let i in props.data) {
			if (!props.data[i]) {
				isAllGenerate = false;
			}
		}
		if (isAllGenerate) {
			window.setTimeout(() => { props.goTo("score") }, 1000)
		}
	}

	return <Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="select">
				{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
			</HeaderButton>}
		>
			Moove
		</PanelHeader>
		<Group>
			<Div className="logo-wrapper">
				<img src={logo} alt="" className="logo" />
			</Div>
		</Group>
		<Group className="generator-wrapper">
			<Header level="secondary">
				<img src={ico1} alt="" className="Icon" />
				<span>Через</span>
			</Header>

			<Generator items={generatorTime} finish={finish} type="time" multipler={2} data={props.data} setData={props.setData}></Generator>
			<Header level="secondary">
				<img src={ico2} alt="" className="Icon" />
				<span>Даже</span>
			</Header>

			<Generator items={generatorWho} finish={finish} type="who" multipler={3} data={props.data} setData={props.setData}></Generator>

			<Header level="secondary">
				<img src={ico3} alt="" className="Icon" />
				<span>Сможет</span>
			</Header>
			<Generator items={generatorWhat} finish={finish} type="what" multipler={4} data={props.data} setData={props.setData}></Generator>
		</Group>
	</Panel>
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	goTo: PropTypes.func.isRequired,
	data: PropTypes.object,
	setData: PropTypes.func

};

export default Home;
