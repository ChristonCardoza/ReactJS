import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    master: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '100vh'
    },
    fluid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cfe8fc',
        height: '50vh',
        justifyContent:'center'
    },
    fix : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cffcd0b3',
        height: '30vh',
        justifyContent:'center'
    },
    header1: {
        color:'#5e7d5f',
        animation: `$myEffect 0.25s infinite alternate ${theme.transitions.easing.easeInOut}`
        
    },
    "@keyframes myEffect": {
        "0%":{
            fontSize: '2em'
        },
        "50%":{
            fontSize: '4em'
        },
        "100%":{
            fontSize: '6em'
        }
    }
}));