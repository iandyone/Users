import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input/input.jsx";
import { showContentAction, showStartScreenAction } from "../../store/actions/contentActions";
import { resetInputAction, setRequestValueAction } from "../../store/actions/inputActions";
import { fetchingHasStartedAction } from "../../store/actions/userActions";
import { ProjectLink } from "../ProjectLink/projectLink";
import { GithubLogo } from "../../svg_components/GithubLogo/githubLogo";

export function Header() {
    const dispatch = useDispatch();
    const userName = useSelector((store) => store.input.headerInput);

    function getUser(e, userName) {
        e.preventDefault();
        dispatch(setRequestValueAction(userName));
        dispatch(fetchingHasStartedAction());
        dispatch(showContentAction());
    }

    function showStartScreen() {
        document.title = `GitHub Users`;
        dispatch(resetInputAction("headerInput"));
        dispatch(showStartScreenAction());
    }

    return (
        <header className="app__header header">
            <div className="header__container container">
                <div className="header__body">
                    <div className="header__logo" onClick={() => showStartScreen()}>
                        <GithubLogo />
                        <span className="header__logo-title">Users</span>
                    </div>
                    <form action="#" className="header__form form" onSubmit={(e) => getUser(e, userName)}>
                        <Input id={"headerInput"} type={"text"} className={"header__input"} placeholder={"Search by GitHub username"} />
                    </form>
                    <ProjectLink className={"header__link"}/>
                </div>
            </div>
        </header>
    );
}