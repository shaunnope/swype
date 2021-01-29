import React, {useState, useEffect} from "react"

import "./matchScreen.styles.css"

import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import Button from "react-bootstrap/Button"

import ProfileDisplay from '../../components/profileDisplay/profileDisplay.jsx';

import UserInfo from '../../components/userInfo/userInfo.jsx';
import WithListLoading from '../../components/userInfo/withUserLoading/withUserLoading.jsx';

const MatchScreen = () => {
    const ListLoading = WithListLoading(UserInfo);
    const [appState, setAppState] = useState({
        loading: false,
        users: null,
    });
    const [users, setUsers] = useState({});

    let rightswipe = (username) => {

    };

    const data = {test:"yeet"};

    return (
        <div className="home-page">
            <p>Start matching!</p>
            <ProfileDisplay text={data} />

            <ButtonToolbar className="justify-content-center">
                <Button size="lg" variant="danger" className="mr-5">Nope</Button>
                <Button size="lg" variant="success" className="ml-5">Yesh</Button>
            </ButtonToolbar>
            
        </div>
    )
}

export default MatchScreen