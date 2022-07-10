import './loader.css';

export function Loader() {
    return (
        <div className="loader">
            <div className="loader__bals">
                <div className="loader__ball"></div>
                <div className="loader__ball"></div>
                <div className="loader__ball"></div>
            </div>
            <span className="loader__text">Loading ...</span>
        </div>
    );
}

