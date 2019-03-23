import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TransactionsIcon from '@material-ui/icons/SwapHoriz'
import AssetIcon from '@material-ui/icons/WebAsset'
import VoteIcon from '@material-ui/icons/AllInclusive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SendIcon from '@material-ui/icons/SendRounded';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    card: {
        maxWidth: 600,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class Wallet extends React.Component {

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            <small>Trx</small>
                        </Avatar>
                    }
                    action={ <>
                        <Tooltip title="Send">
                        <IconButton>
                        <SendIcon  nativeColor={"green"}/>
                        </IconButton>
                        </Tooltip>

                    </>
                    }
                    title="Wallet Name"
                    subheader="Price"
               />


                <CardContent>



                </CardContent>

                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <TransactionsIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <AssetIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <VoteIcon />
                    </IconButton>

                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more">

                        <ExpandMoreIcon />
                    </IconButton>

                </CardActions>

                {/*<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>*/}

                    {/*<CardContent>*/}
                        {/*<Typography paragraph>Method:</Typography>*/}

                    {/*</CardContent>*/}
                {/*</Collapse>*/}
            </Card>
        );
    }
}

Wallet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wallet);
