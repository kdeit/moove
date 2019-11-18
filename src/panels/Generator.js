import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Header, Group, Div } from '@vkontakte/vkui';
import GeneratorComponent from "../components/generator-component"
import data from '../json/data'
import logo from "../static/img/logo.svg"
import ico1 from "../static/img/ico1.svg"
import ico2 from "../static/img/ico2.svg"
import ico3 from "../static/img/ico3.svg"

const generatorTime = data.time;
const generatorWho = data.who;
const generatorWhat = data.what;


const Generator = (props) => {
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

	let filteredWhat = generatorWhat.filter(i => i.spec_id === props.data.spec.id);

	const [what] = useState(filteredWhat);

	return <Panel id={props.id}>
		<PanelHeader>MOOVE career generator</PanelHeader>
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
			<GeneratorComponent items={generatorTime} finish={finish} type="time" multipler={2} data={props.data} setData={props.setData}></GeneratorComponent>

			<Header level="secondary">
				<img src={ico2} alt="" className="Icon" />
				<span>Даже</span>
			</Header>
			<GeneratorComponent items={generatorWho} finish={finish} type="who" multipler={3} data={props.data} setData={props.setData}></GeneratorComponent>

			<Header level="secondary">
				<img src={ico3} alt="" className="Icon" />
				<span>Сможет</span>
			</Header>
			<GeneratorComponent items={what} finish={finish} type="what" multipler={4} data={props.data} setData={props.setData}></GeneratorComponent>
		</Group>
	</Panel>
};

Generator.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	goTo: PropTypes.func.isRequired,
	data: PropTypes.object,
	setData: PropTypes.func

};

export default Generator;
