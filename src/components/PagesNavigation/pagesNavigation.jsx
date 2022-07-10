import "./pagesNavigation.css";
import { useSelector } from "react-redux";

export function PagesNavigation() {
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const reposPerPage = useSelector((store) => store.pagination.reposPerPage);
    const currentPage = useSelector((store) => store.pagination.currentPage);
    const lastRepoIndex = currentPage * reposPerPage;
    const lastRepoID = (lastRepoIndex < reposCounter) ? lastRepoIndex : reposCounter;
    const firstRepoID = lastRepoIndex - reposPerPage + 1;

    return ((firstRepoID === reposCounter) ?
        <p className="pages-navigation__navigation">{firstRepoID} <span>of</span> {reposCounter} <span>items</span></p>
        :
        <p className="pages-navigation__navigation">{firstRepoID} - {lastRepoID} <span>of</span> {reposCounter} <span>items</span></p>
    );
}