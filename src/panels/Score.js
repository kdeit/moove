import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import logo from "../static/img/logo.svg"

const osName = platform();
const Score = props => (
	<Panel id={props.id}>
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
		<Group >
			{props.fetchedUser &&

				<Cell
					before={props.fetchedUser.photo_200 ? <Avatar src={props.fetchedUser.photo_200} /> : null}
					description={props.fetchedUser.city && props.fetchedUser.city.title ? props.fetchedUser.city.title : ''}
				>
					{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
				</Cell>
			}
			<Div className="score">
				<Div>Уже через <span>{props.data.time.title}</span> даже <span>{props.data.who.title}</span> будет <span>{props.data.what.title}</span> лучше тебя </Div>
				<Div>
					<Button size="xl" level="1">
						Присоединяйся
				</Button>
				</Div>
			</Div>
		</Group>

	</Panel>
);

Score.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Score;
