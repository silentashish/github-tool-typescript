import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    signInForm: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.7)',
        borderRadius: '20px',
        height: '10vh',
        padding: '5vh 5vw',
    },

    title: {
        padding: '0.5vh 2vw',
        color: 'white',
    },
});
