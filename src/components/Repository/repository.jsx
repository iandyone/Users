import "./repository.css";

export function Repository(props) {
    return (
        <a href={props.url} target="_blank" rel="noreferrer" className="repos__item">
            <h4 className="repos__name">{props.repoName}</h4>
            <p className="repos__description">{props.description ?? "Description not found"}</p>
        </a>
    );
}