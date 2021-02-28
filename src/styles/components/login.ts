import { makeStyles } from '@material-ui/core/styles';
import vault from '../../assets/images/vault.jpg';

export const useStyles = makeStyles({
    mainContainer: {
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${vault})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    signInForm: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.7)',
        borderRadius: '20px',
        height: '25vh',
        padding: '5vh 5vw',
    },

    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '90%',
        height: '50%',
        marginTop: '3vh',
    },
    btn: {
        padding: '0.5vh 2vw',
    },
});
