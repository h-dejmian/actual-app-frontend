import './App.css';
import './css/login-form.css'
import Menu from "./structure/menu/Menu";
import TopBar from "./structure/topbar/TopBar";
import LoginForm from "./loginregister/LoginForm";
import RegisterForm from "./loginregister/RegisterForm";
import {useState} from "react";
import Content from "./structure/content/Content";
import LogoHome from "./loginregister/LogoHome";


function App() {
    const [user, setUser] = useState({login : localStorage.getItem('login'),
                                                                            id : localStorage.getItem('id')});

    const [selectedContent, setSelectedContent] = useState(0);


  return (
    <div className="App">

        {
            !localStorage.getItem('login') && <div>

                <div id="top-bar-hp">
                    <div id="icons-left">
                        <i className="fa-solid fa-bicycle fa-2xl icon"></i>
                        <i className="fa-solid fa-guitar fa-2xl icon"></i>
                        <i className="fa-brands fa-itunes-note fa-2xl icon"></i>
                        <i className="fa-solid fa-person-running fa-2xl icon"></i>
                    </div>

                    <div id="top-bar-hp-center"><LogoHome /><h3>Place where you can start your growth!</h3></div>

                    <div id="icons-right">
                        <i className="fa-solid fa-book fa-2xl icon"></i>
                        <i className="fa-solid fa-keyboard fa-2xl icon"></i>
                        <i className="fa-solid fa-dumbbell fa-2xl icon"></i>
                        <i className="fa-solid fa-pen fa-2xl icon"></i>

                    </div>
                </div>
                <div id="login-register">
                    <LoginForm setUser={setUser} user={user} />
                    <RegisterForm />
                </div>
            </div>
        }

        {
            localStorage.getItem('login') && <div id="content">
            <TopBar />
            <Menu setSelectedContent={setSelectedContent} user={user} setUser={setUser} />
            <Content selectedContent={selectedContent} user={user} /> </div>
        }
    </div>
  );
}

export default App;
