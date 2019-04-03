import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/ForwardOutlined';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

function IconLabelButtons(props) {
    const { classes } = props;
    return (
        <>

            <Button variant="contained" size="small" className={classes.button}>
                Next
                {/*<SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />*/}

            </Button>

        </>
    );
}

IconLabelButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);
