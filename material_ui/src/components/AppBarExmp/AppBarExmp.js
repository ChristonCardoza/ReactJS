import React from 'react'
import useStyles from './styles'
import { AppBar } from '@material-ui/core'

function AppBarExmp() {
    const classes = useStyles();
    return (
        <>
            <AppBar position='sticky' color='secondary'>
                <h1> The top App Bar provides content and actions related to the current screen. It's used for branding, screen title, navigation and action </h1>
            </AppBar>
            <p className={classes.para}><h1>Dealing with sticky  AppBar position</h1></p>
            <AppBar position="relative" color="primary" className={classes.appBar}>
                <h1> Bottom AppBar</h1>
            </AppBar>
        </>
        
    )
}

export default AppBarExmp
