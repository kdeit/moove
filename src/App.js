import React, { useState, useEffect } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import Select from './panels/Select';
import Generator from './panels/Generator';
import Score from './panels/Score';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import connect from '@vkontakte/vk-connect';


const App = () => {
	const [activePanel, setActivePanel] = useState('select');

	const [data, setData] = useState({
		"spec": null,
		"time": null,
		"who": null,
		"what": null
	});

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	const goTo = (value) => {
		setActivePanel(value);
	}

	const reset = () => {
		setActivePanel('select');
		setData({
			"spec": null,
			"time": null,
			"who": null,
			"what": null
		})

	}

	const share = () => {
		connect.send("VKWebAppShowWallPostBox", { "message": "Уже через " + data.time.title + " даже " + data.who.title + " сможет " + data.what.title + " лучше меня. Запишись на программу MOOVE пока не поздно! https://vk.com/app7210481", "attachments": "https://vk.com/app7210481,photo-3967053_457239033" });
	}

	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	useEffect(() => {
		connect.subscribe(({ detail: { type, data } }) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		setPopout(null); //TODO: REMOVE ON PRODUCTION
		fetchData();
	}, []);

	return (
		<View activePanel={activePanel} popout={popout}>
			<Select id='select' goTo={goTo} data={data} setData={setData} />
			<Generator id='generator' go={go} goTo={goTo} data={data} setData={setData} />
			<Score id='score' share={share} reset={reset} fetchedUser={fetchedUser} go={go} data={data} />
		</View>
	);
}

export default App;

