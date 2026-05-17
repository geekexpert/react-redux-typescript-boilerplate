import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { add, hasChecked, type SampleItem } from './sampleSlicer';
import styles from './SampleComponent.module.css';


// Use export here, do not export as default, to allow for better tree shaking and easier testing
export const SampleComponent: React.FC = () => {
    const samples = useAppSelector((state) => state.sampleList);

    const sampleList = samples.sampleList;
    const dispatch = useAppDispatch();
    
    // using HTMLInputElement in a Component with TypeScript
    const inputRef = useRef<HTMLInputElement>(null);

    // private component Function to add an item to the list
    const addItem = () => {
        const sampleItem = inputRef.current?.value.trim();

        if (sampleItem !== '') {
            const sample: SampleItem = {
                id: Date.now(),
                text: sampleItem || '',
                hasChecked: false
            };
            dispatch(add(sample));

        }
        return;
    }

    return (
        <div className={styles.mainDiv}>
            <h3>Add an item:</h3>
            <div style={{ margin: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    ref={inputRef}

                />
                <button onClick={addItem}>Add Item</button>
            </div>
            <ul>
                {sampleList.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
};


