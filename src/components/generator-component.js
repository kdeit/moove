import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Group, Div } from '@vkontakte/vkui';
//


//const items = data.who;

const Generator = props => {

    const [running, setRunnig] = useState(false);
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    //const [iteration, setIteration] = useState(10);
    let iteration = 10;

    useEffect(() => {
        let min = Math.ceil(0),
            max = Math.floor(props.items.length + 1);
        let random = Math.floor(Math.random() * (max - min)) + min;

        const timer = window.setInterval(() => {
            if (iteration === props.items.length * props.multipler + random) {
                console.warn()
                switch (props.type) {
                    case 'time':
                        props.setData(val => {
                            val.time = props.items[count];
                            return val;
                        })
                        break;
                    case 'who':
                        props.setData(val => {
                            val.who = props.items[count];
                            return val;
                        })
                        break;
                    case 'what':
                        props.setData(val => {
                            val.what = props.items[count];
                            return val;
                        })
                        break

                }


                window.clearInterval(timer);
            }
            iteration++;
            setCount((count) => {
                return count === props.items.length - 1 ? 0 : count + 1
            })
        }, 100);
        return () => {
            window.clearInterval(timer);
        };
    }, [])

    return <Group>
        <Div className="gen">
            <div className="gen__item">{props.items[count].title}</div>
        </Div>
    </Group>

};

Generator.propTypes = {

    items: PropTypes.array,
    multipler: PropTypes.number.isRequired,
    data: PropTypes.object,
    setData: PropTypes.func,
    type: PropTypes.string

};

export default Generator;
