import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(3),
        margin: 10
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2)
    },


});


function GridWrap(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>

            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={1}>
                    <Grid item xs>
                        {props.children}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

GridWrap.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridWrap);
