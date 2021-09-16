import React from 'react'
import { Alert } from 'react-bootstrap'

import styles from  './style.css'

function index(props) {
    return (
        <Alert className={styles.alert} variant="success">
            {props.children}
        </Alert>
    );
}

export default index;