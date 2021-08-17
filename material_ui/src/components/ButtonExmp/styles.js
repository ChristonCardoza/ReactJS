import {makeStyles, withTheme} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    btMargin: {
        margin: theme.spacing(1)
    },
    btColor: {
        color: 'white',
        backgroundColor: 'purple',
        backgroundImage: 'linear-gradient(to right, red , yellow)'
    }
}))