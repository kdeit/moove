import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Header, Group, List, Cell, Div } from '@vkontakte/vkui';
import data from '../json/data'
import logo from "../static/img/logo.svg"

const generatorSpec = data.spec;

const Select = (props) => {
	const selectSpec = async (e) => {
		props.setData(val => {
			val.spec = generatorSpec.find(i => i.id == e.currentTarget.dataset.id);
			return val;
		})
		props.goTo('generator');
	}


	return <Panel id={props.id}>
		<PanelHeader>Moove</PanelHeader>
		<Group>
			<Div className="logo-wrapper">
				<img src={logo} alt="" className="logo" />
			</Div>
		</Group>
		<Group className="back-top">
			<Header level="secondary">
				<div className="treangle-red"></div>
				<span>Выберите специальность</span>
			</Header>
			<List>
				{generatorSpec.map(item => (
					<Cell expandable data-id={item.id} key={item.id} onClick={selectSpec}>{item.title}</Cell>
				))}
			</List>
		</Group>
	</Panel>
};

Select.propTypes = {
	id: PropTypes.string.isRequired,
	goTo: PropTypes.func.isRequired,
	data: PropTypes.object,
	setData: PropTypes.func

};

export default Select;
