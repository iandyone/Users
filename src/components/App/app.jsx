import './app.css';
import { Header } from '../Header/header';
import { Content } from '../Content/content';
import { useSelector } from 'react-redux';
import { InfoPlaceholder } from '../InfoPlaceholder/infoPlaceholder';
import { ProjectLink } from '../ProjectLink/projectLink';
import homeIcon from "../../assets/images/Content/search.svg";

export function App() {
    const showHomeScreen = useSelector((store) => store.content.showHomeScreen);

    return (
        <div className="app">
            <Header />
            {(showHomeScreen) ?
                <InfoPlaceholder image={homeIcon} alt={"Главная"} text={"Please enter a GitHub username in the search field above"}>
                    <div className="placeholder__payload">
                        <div className="placeholder__text">This is a simple tool to quickly find GitHub users and their repositories 🔥</div>
                        <ProjectLink className={"placeholder__link"}/>
                    </div>
                </InfoPlaceholder>
                :
                <Content />
            }
        </div>
    );
}
