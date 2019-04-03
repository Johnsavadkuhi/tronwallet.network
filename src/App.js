import React, {useState} from 'react';
import AppBar from "./Components/AppBar";
import RTL from "./Utils/Direction/RTL";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Wallets from "./Pages/Wallets";
import Create from "./Pages/Create";
import Unlock from "./Pages/Unlock";
import {IntlProvider} from "react-intl";
import {setLanguage} from "./Redux/actions";
import {connect} from "react-redux";
import {languages} from "./Translations";
import {ErrorBoundary} from "./Components/ErrorBoundary";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    direction: 'rtl', // Both here and <body dir="rtl">
});
const App = (props) => {

    const [rtl, setRtl] = useState(false);

    if (!rtl) {
        document.getElementById('body').setAttribute('dir', 'ltr');

        return (<>

                <ErrorBoundary>
                    <IntlProvider locale={props.activeLanguage}
                                  messages={languages[props.activeLanguage]}>

                        <Router>

                            <AppBar onDirection={() => {
                                setRtl(!rtl)
                            }} direction={rtl}/>

                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/Wallets"} component={Wallets}/>
                            <Route path={"/Create"} component={Create}/>
                            <Route path={"/_Unlock"} component={Unlock}/>


                        </Router>

                    </IntlProvider>
                </ErrorBoundary>

            </>
        )
    } else {

        document.getElementById('body').setAttribute('dir', 'rtl');

        return (<>
            <IntlProvider locale={props.activeLanguage}
                          messages={languages[props.activeLanguage]}>
                <MuiThemeProvider theme={theme}>

                    <RTL>
                        <Router>

                            <AppBar onDirection={() => {
                                setRtl(!rtl)
                            }} direction={rtl}/>

                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/Wallets"} component={Wallets}/>
                            <Route path={"/Create"} component={Create}/>
                            <Route path={"/_Unlock"} component={Unlock}/>

                        </Router>

                    </RTL>

                </MuiThemeProvider>
            </IntlProvider>
        </>);
    }


};

function mapStateToProps(state) {

    return {
        activeLanguage: state.app.activeLanguage,
        availableLanguages: state.app.availableLanguages,
    };
}

const mapDispatchToProps = {
    setLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

