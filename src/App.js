import React, {lazy, Suspense, useState} from 'react';
import PrimarySearchAppBar from './Components/AppBar/hook/AppBar'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {IntlProvider} from "react-intl";
import {languages} from "./Translations";
import {ThemeProvider} from '@material-ui/styles';
import {ErrorBoundary} from "./Components/ErrorBoundary";
import {useStateValue} from "./State/StateProvider";
import {RTL} from "./Utils/Direction/RTL";
//import Home from "./Pages/Home"
const Home = lazy(() => import ("./Pages/Home" ));
const Wallets = lazy(() => import( "./Pages/Wallets"));
const Create = lazy(() => import ("./Pages/Create"));
const Unlock = lazy(() => import("./Pages/Unlock"));


const theme = createMuiTheme({
    direction: 'rtl',
});

const App = (props) => {

    const [rtl, setRtl] = useState(false);
    const [{app = {'activeLanguage': ''}}] = useStateValue();

    console.log("active language : " , app.activeLanguage);


    if (!rtl) {

        document.getElementById('body').setAttribute('dir', 'ltr');

        return (<>

                <ErrorBoundary>
                    <IntlProvider locale={app.activeLanguage || 'en'}
                                  messages={languages[app.activeLanguage || 'en']}>


                        <Router>
                            <PrimarySearchAppBar direction={rtl} onDirection={() => {
                                setRtl(!rtl)
                            }}/>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Route exact path={"/"} component={Home}/>
                                <Route path={"/Wallets"} component={Wallets}/>
                                <Route path={"/Create"} component={Create}/>
                                <Route path={"/_Unlock"} component={Unlock}/>

                            </Suspense>

                        </Router>

                    </IntlProvider>
                </ErrorBoundary>

            </>
        )
    } else {

        document.getElementById('body').setAttribute('dir', 'rtl');

        return (<>

            <IntlProvider locale={'en'}
                          messages={languages['en']}>

                <ThemeProvider theme={theme}>

                    <RTL>

                        <Router>

                            {/*<AppBar onDirection={() => {*/}
                            {/*setRtl(!rtl)*/}
                            {/*}} direction={rtl}/>*/}
                            <PrimarySearchAppBar direction={rtl} onDirection={() => {
                                setRtl(!rtl)
                            }}/>

                            <Suspense fallback={<div>Loading...</div>}>

                                <Route exact path={"/"} component={Home}/>
                                <Route path={"/Wallets"} component={Wallets}/>
                                <Route path={"/Create"} component={Create}/>
                                <Route path={"/_Unlock"} component={Unlock}/>
                            </Suspense>

                        </Router>
                    </RTL>
                </ThemeProvider>
            </IntlProvider>
        </>);
    }


};

export default (App)

