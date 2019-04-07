import React, {lazy, Suspense, useState} from 'react';
import PrimarySearchAppBar from './Components/AppBar/hook/AppBar'
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {IntlProvider} from "react-intl";
import {languages} from "./Translations";
import {ErrorBoundary} from "./Components/ErrorBoundary";
import {useStateValue} from "./State/StateProvider";
import RTL from './Utils/Direction/RTL'

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


    if (!rtl) {

        console.log("RTL : " , rtl );

        document.getElementById('body').setAttribute('dir', 'ltr');

        return (<>

                <ErrorBoundary>
                    <IntlProvider locale={app.activeLanguage || 'en'}
                                  messages={languages[app.activeLanguage || 'en']}>


                        <Router>
                            <PrimarySearchAppBar  onDirection={() => {
                                setRtl(!rtl)
                            }} direction={rtl}/>
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

            <IntlProvider locale={app.activeLanguage || 'en'}
                          messages={languages[app.activeLanguage || 'en']}>

                <RTL>

                <ThemeProvider theme={theme}>



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
                </ThemeProvider>
                </RTL>
            </IntlProvider>
        </>);
    }


};

export default (App)

