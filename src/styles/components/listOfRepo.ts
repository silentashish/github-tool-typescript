import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    mainContainer: {
        width: '100vw',
        height: '80vh',
        marginTop: '15vh',
    },
    listOfRepoContainer: {
        width: '100vw',
        height: '85vh',
        marginTop: '3vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    resetBtn: {
        padding: '0.5vh 1vw',
        minWidth: '0',
        marginTop: '3vh',
    },
});
