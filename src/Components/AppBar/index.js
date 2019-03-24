import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {withStyles} from '@material-ui/core/styles';
import {Tooltip} from "@material-ui/core";
import {setLanguage} from "../../Redux/actions";
import {compose} from "recompose";
import {connect} from "react-redux";
import {tu} from "../../Utils/i18n";
import {Link} from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import WalletIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import UnlockIcon from '@material-ui/icons/LockOpenOutlined'
import RTLIcon from '@material-ui/icons/FormatTextdirectionRToLOutlined';
import LTRIcon from '@material-ui/icons/FormatTextdirectionLToROutlined'

const styles = theme => ({
    root: {
        width: '100%',
        color: '#f1827a'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },

    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.40),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    lightTooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 14,
    }
});

class PrimarySearchAppBar extends React.Component {

    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        selectedIndex: 0,
        RTL: false
    };

    handleMenuItemClick = (event, index) => {
        this.setState({selectedIndex: index, anchorEl: null});
    };


    handleProfileMenuOpen = event => {
        this.setState({anchorEl: event.currentTarget});

    };

    handleMenuClose = async (e) => {
        this.setState({anchorEl: null});
        await this.props.setLanguage(e);
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({mobileMoreAnchorEl: event.currentTarget});
    };

    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl: null});
    };


    render() {
        const {anchorEl, mobileMoreAnchorEl} = this.state;
        const {classes} = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu

                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMenuOpen}

                onClose={this.handleMenuClose}>

                {
                    Object.keys(this.props.languages).map((language, index) => (

                        <MenuItem
                            key={language}
                            selected={index === this.state.selectedIndex}
                            onClick={() => {
                                this.handleMenuClose(language);
                                this.handleMenuItemClick(this, index)
                            }}>{this.props.languages[language]}</MenuItem>
                    ))
                }

            </Menu>
        );

        const renderMobileMenu = (
            <Menu

                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >

                <MenuItem onClick={this.handleMobileMenuClose}>
                    <Link to={'/Home'} >
                        <IconButton color="inherit">
                            <Badge badgeContent={0} color="secondary">
                                <HomeIcon/>
                            </Badge>
                        </IconButton>
                    </Link>
                    <p>{tu('Home')}</p>

                </MenuItem>

                <MenuItem onClick={this.handleMobileMenuClose}>
                   <Link to={'/Wallets'}>
                    <IconButton color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <WalletIcon/>
                        </Badge>
                    </IconButton>
                   </Link>
                    <p>{tu('Wallets')}</p>

                </MenuItem>

                <MenuItem onClick={this.handleMobileMenuClose}>
                    <Link to={'/AddWallets'}>

                    <IconButton color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <AddIcon/>
                        </Badge>
                    </IconButton>
                    </Link>
                    <p>{tu('AddWallet')}</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <UnlockIcon/>
                    </IconButton>
                    <p>{tu('unlockComponent')}</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <LanguageOutlinedIcon/>
                    </IconButton>
                    <p>{tu('language')}</p>
                </MenuItem>

            </Menu>
        );

       // #2196f3
        //#ffc107
        return (
            <div>
                <AppBar position="static" style={{backgroundColor: '#2196f3', color: '#fff'}}>
                    <Toolbar>

                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            {tu('TronWallet')}

                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>

                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>

                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit">
                                <Tooltip title={tu("language")} classes={{ tooltip: classes.lightTooltip }}>

                                <LanguageOutlinedIcon/>
                                </Tooltip>
                            </IconButton>

                            <Link to={"/Wallets"} style={{color: '#fff'}}>
                                <IconButton color="inherit">
                                    <Badge badgeContent={0} color="secondary">
                                        <Tooltip title={tu("Wallets")} classes={{ tooltip: classes.lightTooltip }}>
                                        <WalletIcon/>
                                        </Tooltip>
                                    </Badge>


                                </IconButton>
                            </Link>

                            <Link style={{color: '#fff'}} to={"/Unlock"}>
                                <IconButton color="inherit">
                                    <Tooltip title={tu("UnlockWallet")} classes={{ tooltip: classes.lightTooltip }}>

                                    <UnlockIcon/>
                                    </Tooltip>
                                </IconButton>

                            </Link>
                            <Link to={"/Create"} style={{color: '#fff'}}>
                                <IconButton color="inherit">
                                    <Badge badgeContent={0} color="secondary">
                                       <Tooltip title={tu("CreateWallet")} classes={{ tooltip: classes.lightTooltip }}>
                                        <AddIcon/>
                                       </Tooltip>

                                    </Badge>

                                </IconButton>
                            </Link>

                            <IconButton onClick={this.props.onDirection} color="inherit">

                                {
                                    this.props.direction === false ?
                                    <Tooltip title={tu('RTL')}  classes={{ tooltip: classes.lightTooltip }}>
                                        <RTLIcon/>
                                    </Tooltip>
                                    : <Tooltip title={tu('LTR')}  classes={{ tooltip: classes.lightTooltip }}>
                                        <LTRIcon/>
                                    </Tooltip>
                                }
                            </IconButton>

                            <Link style={{color: '#fff'}} to={"/Home"}>
                                <IconButton color="inherit">
                                    <Tooltip title={tu('Home')} classes={{ tooltip: classes.lightTooltip }}>

                                    <HomeIcon/>
                                    </Tooltip>

                                </IconButton>

                            </Link>


                        </div>

                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}

PrimarySearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {

    return {
        activeLanguage: state.app.activeLanguage,
        languages: state.app.availableLanguages,
    };

}

const mapDispatchToProps = {
    setLanguage,

};


export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps, null, {pure: false})
)(PrimarySearchAppBar);