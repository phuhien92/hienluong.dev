import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        background: '#fff',
        textTransform: 'none',
        padding: '16px 32px'
    }
}));

export default function LightButton ({value, bold,...props}) {

    const classes = useStyles();

    return (
        <div>
            <Button 
                variant="contained"
                className={classes.button}
                {...props}
            >
                {bold ? (
                    <strong>{value}</strong>
                ): value}
            </Button>
        </div>
        
    )
}

