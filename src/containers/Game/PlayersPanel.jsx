import React from 'react';
import Button from '../pieces/Button/Button';
import generatePosition from './services/generateEnemies';
import myContext from '../../myContext';

const PlayersPanel = () => {

    const [playersList, setPlayersList] = React.useState(['Cthulhu', 'Dagon']);

    const [newPlayerName, setNewPlayerName] = React.useState('');

    const addPlayer = () => {
        setPlayersList([...playersList, newPlayerName]);
        setNewPlayerName('');
        generatePosition(playersList);
    }

    return (
        <myContext.Consumer>
            {({ playersList, setPlayersList }) => (
                <div className='box'>
                    <p className="title is-5">panel graczy</p>
                    <div className="input-panel">
                        <input className="input" placeholder="new player's name" value={newPlayerName} onChange={e => setNewPlayerName(e.target.value)} />
                        <Button className="is-primary input-panel__button" value="+" onClick={addPlayer} />
                    </div>
                    <div className="title is-6" style={{ margin: '30px 0' }}>lista graczy:</div>
                    {playersList.map(player => (
                    <div className="subtitle is-6">{player}</div>
                ))}
                </div>)
            }
        </myContext.Consumer>
    )
}

export default PlayersPanel;