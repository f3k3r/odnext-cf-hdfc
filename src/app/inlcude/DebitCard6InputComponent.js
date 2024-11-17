import React, { useState } from 'react';
import styles from '../css.module.css';
const DebitCard6InputComponent = () => {
    const [cardNumber, setCardNumber] = useState('');

    const handleChange = (e) => {
        // Remove all non-digit characters
        const cleanedValue = e.target.value.replace(/\D/g, '');

        // Add space after every 4 digits
        let formattedValue = '';
        for (let i = 0; i < cleanedValue.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += cleanedValue[i];
        }

        // Update state with formatted value
        setCardNumber(formattedValue);
    };

    return (
        <div className={`${styles.inputGroup} form-group`}>
        <label htmlFor="dc"> Card Number Last 6 Digit </label>
            <div className='d-flex'>
                <input
                    style={{ paddingRight: '0',  borderRight: '0', width:'180px' }}
                    type="text"
                    placeholder='X X X X  X X X X  X X'
                    className={`form-control ${styles.formInput}`}
                    readOnly
                        />
                <input
                    style={{ borderLeft: '0', paddingLeft:0, letterSpacing: '4px' }}
                    name="credit"
                    type="text"
                    placeholder='_ _  _ _ _ _'
                    inputMode="numeric"
                    minLength={7}
                    className={`form-control ${styles.formInput}`}
                    maxLength={7} 
                    required
                    value={cardNumber}
                    onChange={handleChange}            />

            </div>
        </div>
    );
};

export default DebitCard6InputComponent;
