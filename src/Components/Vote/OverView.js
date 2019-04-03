import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing.unit * 2}px`,
    },
    dividerInset: {
        margin: `5px 0 0 ${theme.spacing.unit * 9}px`,
    },
});

function OverView(props) {
    const { classes } = props;

    return (
        <List className={classes.root}>

            <Divider component="li" variant="inset" />
            <li>
                <Typography className={classes.dividerInset} color="textSecondary" variant="caption">
                    {props.dividerText}
                </Typography>
            </li>
            <ListItem>
                <Avatar>
                    <BeachAccessIcon />
                </Avatar>
                <ListItemText primary={props.primaryText} secondary={props.secondText} />
            </ListItem>
        </List>
    );
}

OverView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OverView);
