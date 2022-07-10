import "./infoPlaceholder.css";

export function InfoPlaceholder(props) {
    return (
        <div className="content__home info-placeholder">
            <div className="info-placeholder__picture">
                <img src={props.image} alt={props.alt} />
            </div>
            <p className="info-placeholder__text">{props.text}</p>
            {props.children}
        </div>
    );
}