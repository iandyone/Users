/* eslint-disable jsx-a11y/anchor-is-valid */
import "./paginationMobile.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../../helpers/fetchRepos";
import { setCurrentPageAction } from "../../store/actions/pagitationActions";
import { PaginationNextButton } from "../../svg_components/PaginationNextButton/paginationNextButton";
import { PaginationPreviousButton } from "../../svg_components/PaginationPreviousButton/paginationPreviousButton";
import { PagesNavigation } from "../PagesNavigation/pagesNavigation";

export function PaginationMobile(props) {
    const dispatch = useDispatch();
    const userName = useSelector((store) => store.input.request);
    const currentPage = useSelector((store) => store.pagination.currentPage);
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const reposPerPage = useSelector((store) => store.pagination.reposPerPage);
    const lastPage = Math.ceil(reposCounter / reposPerPage);
    const startPage = useSelector((store) => store.pagination.startPage);
    const previousPageClasses = (currentPage === startPage) ? "pagination__page-first" : "";
    const nextButtonClasses = (currentPage === lastPage) ? "pagination__page-last" : "";
    const pages = getPages();

    function getPages() {
        let pagesList = [];
        for (let i = 1; i <= Math.ceil(reposCounter / reposPerPage); ++i) {
            pagesList.push(i);
        }
        return pagesList;
    }

    function scrollToTop() {
        const reposTitle = props.reposTitle;
        reposTitle.current.scrollIntoView({
            block: "end",
            behavior: "smooth"
        })
    }

    function setCurrentPage(page, userName) {
        scrollToTop();
        dispatch(setCurrentPageAction(+page));
        dispatch(fetchRepos(userName, page));
    }

    function toPreviousPage(e) {
        if (currentPage !== 1) {
            e.preventDefault();
            scrollToTop();
            dispatch(fetchRepos(userName, currentPage - 1));
            dispatch(setCurrentPageAction(currentPage - 1));
        }
    }

    function toNextPage(e) {
        if (currentPage !== lastPage) {
            e.preventDefault();
            scrollToTop();
            dispatch(fetchRepos(userName, currentPage + 1));
            dispatch(setCurrentPageAction(currentPage + 1));
        }
    }

    return (
        <div className="pagination-mobile">
            <div className="pagination__pages-navigation pages-navigation pagination-mobile__navigation">
                <PagesNavigation />
            </div>
            <form action="#" className="pagination-mobile__form" onSubmit={(e) => e.preventDefault()}>
                <a href="#" className={"pagination__page pagination__button " + previousPageClasses} onClick={(e) => toPreviousPage(e)}>
                    <PaginationPreviousButton />
                </a>
                <div className="pagination-mobile__page">
                    <select className="pagination-mobile__select" value={currentPage} onChange={(e) => setCurrentPage(e.target.value, userName)}>
                        {pages.map((page) => {
                            return <option className="pagination-mobile__option" value={page} key={page}>{page}</option>
                        })}
                    </select>
                </div>
                <a href="#" className={"pagination__page pagination__button " + nextButtonClasses} onClick={(e) => toNextPage(e)}>
                    <PaginationNextButton />
                </a>
            </form>
        </div>
    );
}