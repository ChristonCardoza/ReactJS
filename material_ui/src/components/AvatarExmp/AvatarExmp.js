import React from 'react'
import useStyles from './styles'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import favicon from '../../img/favicon.ico'

function AvatarExmp() {
    const classes = useStyles();
    return (
        <div>
            <h1>Grouped Avatar </h1>
            <div className={classes.div}>
                <AvatarGroup max={9}>
                    <Avatar variant="circle" className={classes.circle}>C</Avatar>
                    <Avatar variant="circular" className={classes.circular}>h</Avatar>
                    <Avatar variant="rounded" className={classes.rounded}>r</Avatar>
                    <Avatar variant="square" className={classes.square}>i</Avatar>
                    <Avatar variant="square" className={classes.square}>s</Avatar>
                    <Avatar variant="rounded" className={classes.rounded}>t</Avatar>
                    <Avatar variant="circular" className={classes.circular}>o</Avatar>
                    <Avatar variant="circle" className={classes.circle}>n</Avatar>
                    <Avatar variant="circle" className={classes.dot}>.</Avatar>
                    <Avatar variant="circle" className={classes.dot}>.</Avatar>
                    <Avatar variant="circle" className={classes.dot}>.</Avatar>
                </AvatarGroup>
                
            </div>
            <h1>Individual Avatar </h1>
            <div className={classes.div}>
                <Avatar variant="circle" className={classes.circle}>C</Avatar>
                <Avatar variant="circular" className={classes.circular}>h</Avatar>
                <Avatar variant="rounded" className={classes.rounded}>r</Avatar>
                <Avatar variant="square" className={classes.square}>i</Avatar>
                <Avatar variant="square" className={classes.square}>s</Avatar>
                <Avatar variant="rounded" className={classes.rounded}>t</Avatar>
                <Avatar variant="circular" className={classes.circular}>o</Avatar>
                <Avatar variant="circle" className={classes.circle}>n</Avatar>
            </div>
            <h1>Image Avatar </h1>
            <div className={classes.div}>
            <Avatar alt="favicon" src={favicon}  className={classes.small} />
            <Avatar alt="favicon" src={favicon} />
            <Avatar alt="favicon" src={favicon}  className={classes.large} />
            </div>
            
       </div>
    )
}

export default AvatarExmp
