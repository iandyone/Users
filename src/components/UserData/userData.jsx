/* eslint-disable jsx-a11y/anchor-is-valid */
import "./userData.css";
import { UserActivity } from "../UserActivity/userActivity";
import { useSelector } from "react-redux";
import { numFormatter } from "../../helpers/numFormatter";
import { useEffect } from "react";
import { GithubLogo } from "../../svg_components/GithubLogo/githubLogo";

export function UserData() {
    const avatar = useSelector((store) => store.user.user.avatar_url);
    const login = useSelector((store) => store.user.user.login);
    const profile = useSelector((store) => store.user.user.html_url);
    const userName = useSelector((store) => store.user.user.name) ?? login;
    const followers = numFormatter(useSelector((store) => store.user.user.followers));
    const following = numFormatter(useSelector((store) => store.user.user.following));

    useEffect(() => {
        document.title = `GitHub Users — ${login}`;
    })

    return (
        <div className="user__data">
            <div className="user__info">
                <div className="user__avatar">
                    <img src={avatar} alt="Аватар пользователя" />
                </div>
                <h3 className="user__name">{userName}</h3>
                <a href={profile} target="_blank" rel="noreferrer" className="user__link">{login}</a>
                <div className="user__media">
                    <UserActivity className={"user__activity"} message={`followers`} value={followers} />
                    <UserActivity className={"user__activity"} message={`following`} value={following} />
                </div>
                <a href={profile} className="user__button" target="_blank" rel="noreferrer">
                    <GithubLogo />
                    <span>Open on GitHub</span>
                </a>
            </div>
        </div >
    );
}