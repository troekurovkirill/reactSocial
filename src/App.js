import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>

            <div className="app-wrapper-content">
                {/*<Route path='/profile' component={Profile}/>*/}

                <Route path='/profile'
                       render={ () => <Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}/> } />
                <Route path='/dialogs'
                       render={ () => <Dialogs
                           state={props.state.dialogsPage} /> } />
                <Route path='/news' render={ () => <News/>}/>
                <Route path='/music' render={ () => <Music/>}/>
                <Route path='/settings' render={ () => <Settings/>}/>
            </div>

        </div>
    );
}

export default App;
