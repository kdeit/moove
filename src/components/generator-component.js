import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Group, Div } from '@vkontakte/vkui';

const GeneratorComponent = (props) => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        let iteration = 0;
        var count = 0;
        let min = Math.ceil(0),
            max = Math.floor(props.items.length + 1);
        let random = Math.floor(Math.random() * (max - min)) + min;

        const timer = window.setInterval(() => {
            if (iteration === props.items.length * props.multipler + random) {
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
                        break;
                    default:
                        break;

                }
                window.clearInterval(timer);
                props.finish();
            } else {
                iteration++;
                if (count === props.items.length - 1) {
                    count = 0;
                } else {
                    count++;
                }
                setIndex(count);

            }

        }, 100);
        return () => {
            window.clearInterval(timer);
        };
    }, [])

    return <Group>
        <Div className="gen">
            <div className="gen__item">{props.items[index].title}</div>
        </Div>
    </Group>

};

GeneratorComponent.propTypes = {

    items: PropTypes.array,
    multipler: PropTypes.number.isRequired,
    data: PropTypes.object,
    setData: PropTypes.func,
    finish: PropTypes.func,
    type: PropTypes.string

};

export default GeneratorComponent;
