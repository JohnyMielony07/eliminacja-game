import React from 'react';
import Button from '../pieces/Button/Button';
import myContext from '../../myContext';

const SubjectsPanel = () => {
    const [newSubjectName, setNewSubjectName] = React.useState('');

    return (
        <myContext.Consumer>
            {({ subjectsList, addSubject, deleteSubject }) => (
                <div className='box'>
                    <div className="item-container">
                        <p className="title is-5">
                            panel przedmiotów
                        </p>
                        <p>
                            {subjectsList.length}
                        </p>
                    </div>
                    <div className="input-panel">
                        <input className="input" placeholder="new subject's name" value={newSubjectName} onChange={e => setNewSubjectName(e.target.value)} />
                        <Button className="is-primary input-panel__button" value="+" onClick={() => addSubject(newSubjectName)} />
                    </div>
                    <div className="title is-6" style={{ margin: '30px 0' }}>lista graczy:</div>
                    {subjectsList.map(subject => (
                        <div className="subtitle is-6 item-container">
                            {subject}
                            <a className="delete is-small" onClick={() => deleteSubject(subject)} />
                        </div>
                    ))}
                </div>
            )}
        </myContext.Consumer>
    )
}

export default SubjectsPanel;