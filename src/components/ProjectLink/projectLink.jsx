import "./projectLink.css";
import { GithubLink } from "../../svg_components/GithubLink/githubLink";

export function ProjectLink(props) {
    const className = props.className + " project__link"
    return (
        <a href="https://github.com/iandy1731/Users" target="_blank" rel="noreferrer" className={className}>
            <span>GitHub Repository</span>
            <GithubLink />
        </a>
    )
};