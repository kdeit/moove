import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import logo from "../static/img/logo.svg"

const Score = (props) => {

	return <Panel id={props.id}>
		<PanelHeader>MOOVE career generator</PanelHeader>
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
			{props.data.who &&
				<Div className="score">
					<Div>Уже через <span>{props.data.time.title}</span> даже <span>{props.data.who.title}</span> будет <span>{props.data.what.title}</span> лучше тебя </Div>
					<Div>Запишись на программу MOOVE пока не поздно!</Div>
					<Div>
						<a target="_blank" href="https://common.skolkovo.ru/moove-by-skolkovo-mts/" className="btn">
							<Button size="xl" level="1">
								Записаться
				</Button>
						</a>
					</Div>
				</Div>}

			<Group className="button-block">
				<Button level="secondary" onClick={props.reset}>Попробовать еще раз</Button>
				<Button level="secondary" onClick={props.share}>Поделиться результатом</Button>
			</Group>
		</Group>

	</Panel>
};

Score.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
	share: PropTypes.func.isRequired,
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
