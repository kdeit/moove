import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Group, Div } from '@vkontakte/vkui';
//


//const items = data.who;

const WhoGenerator = ({ items, multipler }) => {

    const [running, setRunnig] = useState(false);
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    //const [iteration, setIteration] = useState(10);
    let iteration = 10;

    useEffect(() => {
        let min = Math.ceil(0),
            max = Math.floor(items.length + 1);
        let random = Math.floor(Math.random() * (max - min)) + min;

        const timer = window.setInterval(() => {
            if (iteration === items.length * multipler + random) {
                window.clearInterval(timer);
            }
            iteration++;
            setCount((count) => {
                return count === items.length - 1 ? 0 : count + 1
            })
        }, 100);
        return () => {
            window.clearInterval(timer);
        };
    }, [])

    return <Group>
        <Div className="gen">

            <div className="gen__item">{items[count]}</div>
        </Div>
    </Group>

};

WhoGenerator.propTypes = {
    items: PropTypes.array.isRequired,
    multipler: PropTypes.number.isRequired

};

export default WhoGenerator;
