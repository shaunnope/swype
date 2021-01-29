import React, {useState, useEffect} from "react"

import "./homepage.styles.css"

// import Navbar from "../../components/navBar/navBar.jsx"
import LoginForm from "../../components/loginForm/loginForm.jsx"

import UserInfo from '../../components/userInfo/userInfo.jsx';
import WithListLoading from '../../components/userInfo/withUserLoading/withUserLoading.jsx';

const Homepage = () => {
    const ListLoading = WithListLoading(UserInfo);
    const [appState, setAppState] = useState({
        loading: false,
        users: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((repos) => {
            setAppState({ loading: false, repos: repos });
          });
      }, [setAppState]);

    return (
        <div className="home-page">
            <p>Greetings!</p>
            <LoginForm/>
            <div className='repo-container'>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
            </div>
        </div>
    )
}

export default Homepage