import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {fade} from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from "@material-ui/icons/HomeOutlined";
import WalletIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';
import UnlockIcon from '@material-ui/icons/LockOpenOutlined'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import RTLIcon from '@material-ui/icons/FormatTextdirectionRToLOutlined';
import LTRIcon from '@material-ui/icons/FormatTextdirectionLToROutlined'

import {Link} from "react-router-dom";
import {tu} from "../../../Utils/i18n";
import {useStateValue} from "../../../State/StateProvider";
//import {availableLanguages} from '../../../Translations/'

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
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
}));

function PrimarySearchAppBar(props) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [selectedIndex  , setSelectedIndex] = useState(0);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const [{app={

        availableLanguages: {
            en: "English",
            fa: "فارسی",
        },

        activeLanguage: 'en',


    }} , dispatch] = useStateValue();

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

   async function handleMenuClose(e) {
        setAnchorEl(null);
        console.log("lanugaes : "  , app.availableLanguages)
       //await dispatch({type:'setLanguage'})
     await  dispatch({type:'setLanguage' , 'language':e})
       handleMobileMenuClose();
    }

    function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    const handleMenuItemClick = (event, index) => {
        // this.setState({selectedIndex: index, anchorEl: null});
        setSelectedIndex(index);
        setAnchorEl(null);

    };

    const renderMenu = (
        <Menu

            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}

            onClose={handleMenuClose}>

            {
                Object.keys(app.availableLanguages).map((language, index) => (

                    <MenuItem
                        key={language}
                        selected={index === selectedIndex}
                        onClick={() => {
                            handleMenuClose(language);
                            handleMenuItemClick(this, index)
                        }}>{app.availableLanguages[language]}</MenuItem>
                ))
            }

        </Menu>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>

            <MenuItem onClick={handleMobileMenuClose}>
                <Link to={'/Home'} >
                    <IconButton color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <HomeIcon/>
                        </Badge>
                    </IconButton>
                </Link>
                <p>{tu('Home')}</p>

            </MenuItem>

            <MenuItem onClick={handleMobileMenuClose}>
                <Link to={'/Wallets'}>
                    <IconButton color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <WalletIcon/>
                        </Badge>
                    </IconButton>
                </Link>
                <p>{tu('Wallets')}</p>

            </MenuItem>

            <MenuItem onClick={handleMobileMenuClose}>
                <Link to={'/AddWallets'}>

                    <IconButton color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <AddIcon/>
                        </Badge>
                    </IconButton>
                </Link>
                <p>{tu('AddWallet')}</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton color="inherit">
                    <UnlockIcon/>
                </IconButton>
                <p>{tu('UnlockWallet')}</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton color="inherit">
                    <LanguageOutlinedIcon/>
                </IconButton>
                <p>{tu('language')}</p>
            </MenuItem>

        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Open drawer"
                    >
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        {tu('TronWallet')}
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>


                        <IconButton

                            aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit">

                            <LanguageOutlinedIcon/>

                        </IconButton>

                        <Link to={"/Wallets"} style={{color: '#fff'}}>
                            <IconButton color="inherit">
                                <Badge badgeContent={0} color="secondary">
                                        <WalletIcon/>
                                </Badge>


                            </IconButton>
                        </Link>

                        <Link style={{color: '#fff'}} to={"/Unlock"}>
                            <IconButton color="inherit">

                                    <UnlockIcon/>
                            </IconButton>

                        </Link>

                        <Link to={"/Create"} style={{color: '#fff'}}>
                            <IconButton color="inherit">
                                <Badge badgeContent={0} color="secondary">
                                        <AddIcon/>

                                </Badge>

                            </IconButton>
                        </Link>
                        <IconButton onClick={props.onDirection} color="inherit">

                            {
                                props.direction === false ?

                                        <RTLIcon/>

                                    :
                                        <LTRIcon/>

                            }
                        </IconButton>
                        <Link style={{color: '#fff'}} to={"/Home"}>
                            <IconButton  color="inherit">

                                    <HomeIcon/>

                            </IconButton>

                        </Link>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
            {renderMobileMenu}
        </div>
    );
}

export default PrimarySearchAppBar;
