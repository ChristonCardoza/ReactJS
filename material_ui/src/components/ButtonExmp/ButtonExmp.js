import React from 'react'
import  useStyles from './styles'
import {Button, IconButton, ButtonBase} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import favicon from '../../img/favicon.ico'

function ButtonExmp() {
    const classes = useStyles()

    const image = {

        url:  favicon,
        title: 'Favicon',
        width: '40%',
    }
    
    return (
        <div >
            <h1> Basic Buttons : </h1>
            <Button variant='contained' className={classes.btMargin}>Default</Button>
            <Button variant='contained' color='primary' className={classes.btMargin}>Primary</Button>
            <Button variant='outlined' color='secondary' className={classes.btMargin}>Secondary</Button>
            <Button variant='text' color='inherit' className={classes.btMargin}>Disabled</Button>
            <Button variant='contained' disableElevation className={classes.btMargin}>NO Elevation</Button>
            <Button variant='contained' color='primary' size='small' className={classes.btMargin}>Small</Button>
            <Button variant='contained' color='secondary' size='large' className={classes.btMargin}>Big</Button>
            <Button variant='text' href='cardoza.in' className={classes.btMargin, classes.btColor}>Link</Button>
            <Button variant='contained' color='secondary' startIcon={< DeleteIcon />} className={classes.btMargin}>StartIcon</Button>
            <Button variant='contained' color='secondary' endIcon={< DeleteIcon />} className={classes.btMargin}>EndIcon</Button>
            <IconButton aria-label="delete"  color="primary" className={classes.btMargin}><DeleteIcon /></IconButton>
            <ButtonBase focusRipple key={image.title} style={{backgroundImage: `url(${image.url})`, color: 'white', height: '64px', width: '64px'}}>{image.title}</ButtonBase>
            <Button variant='outlined' color='secondary' fullWidth className={classes.btMargin}>Full Width</Button>
        </div>
    )
}

export default ButtonExmp
