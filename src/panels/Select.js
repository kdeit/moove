import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { Header, Group, List, Cell, HeaderButton } from '@vkontakte/vkui';
import data from '../json/data'

const generatorSpec = data.spec;

const Select = (props) => {
	const selectSpec = async (e) => {
		props.setData(val => {
			val.spec = e.currentTarget.dataset.title;
			return val;
		})
		props.goTo('generator');
	}


	return <Panel id={props.id}>
		<PanelHeader>
			LastScore
		</PanelHeader>
		<Group>
			<Header level="secondary">Выберите специальность</Header>
			<List>
				{generatorSpec.map(item => (
					<Cell expandable data-title={item.title} key={item.id} onClick={selectSpec}>{item.title}</Cell>
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
