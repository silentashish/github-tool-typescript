import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    heading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10vh',
    },
    title: {
        color: 'white',
        marginTop: '10px',
    },
    icon: {
        color: 'white',
        marginRight: '1vw',
    },
    username: {
        color: 'white',
        position: 'absolute',
        right: '6vw',
    },
});
