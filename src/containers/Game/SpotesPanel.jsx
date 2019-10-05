import React from 'react';
import Button from '../pieces/Button/Button';
import myContext from '../../myContext';

const SpotesPanel = () => {
    const [newSpoteName, setNewSpoteName] = React.useState('');

    return (
        <myContext.Consumer>
            {({ spotesList, addSpote, deleteSpote }) => (
                <div className='box'>
                    <div className="item-container">
                        <p className="title is-5">
                            panel miejsc
                        </p>
                        <p>
                            {spotesList.length}
                        </p>
                    </div>
                    <div className="input-panel">
                        <input className="input" placeholder="new subject's name" value={newSpoteName} onChange={e => setNewSpoteName(e.target.value)} />
                        <Button className="is-primary input-panel__button" value="+" onClick={() => addSpote(newSpoteName)} />
                    </div>
                    <div className="title is-6" style={{ margin: '30px 0' }}>lista graczy:</div>
                    {spotesList.map(spote => (
                        <div className="subtitle is-6 item-container">
                            {spote}
                            <a className="delete is-small" onClick={() => deleteSpote(spote)} />
                        </div>
                    ))}
                </div>
            )}
        </myContext.Consumer>
    )
}

export default SpotesPanel;