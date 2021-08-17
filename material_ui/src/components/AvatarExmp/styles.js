import {makeStyles, useStyles} from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        color: 'red',
        backgroundColor: 'darkslategray',
        margin: theme.spacing(1)

    },
    circular: {
        color: 'green',
        backgroundColor: 'aqua',
        margin: theme.spacing(1)
    },
    rounded: {
        color: 'purple',
        backgroundColor: 'rosybrown',
        margin: theme.spacing(1)
    },
    square: {
        color: 'orange',
        backgroundColor: 'bisque',
        margin: theme.spacing(1)
    },
    dot: {
        color: 'orange',
        backgroundColor: 'bisque',
        margin: theme.spacing(1)
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}))