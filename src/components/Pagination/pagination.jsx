import "./pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageAction } from "../../store/actions/pagitationActions";
import { PagesNavigation } from "../PagesNavigation/pagesNavigation";
import { getDisplayedPages } from "../../helpers/getDisplayedPages";
import { fetchRepos } from "../../helpers/fetchRepos";
import { PaginationPreviousButton } from "../../svg_components/PaginationPreviousButton/paginationPreviousButton";
import { PaginationNextButton } from "../../svg_components/PaginationNextButton/paginationNextButton";

export function Pagination(props) {
    const dispatch = useDispatch();
    const userName = useSelector((store) => store.input.request);
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const reposPerPage = useSelector((store) => store.pagination.reposPerPage);
    const currentPage = useSelector((store) => store.pagination.currentPage);
    const startPage = useSelector((store) => store.pagination.startPage);
    const lastPage = Math.ceil(reposCounter / reposPerPage);
    const pages = getPages();

    const diplayedPages = getDisplayedPages(pages, currentPage);
    const dynamicStartEllipsis = getDynamicStartEllipsis();
    const dynamicEndEllipsis = getDynamicEndEllipsis();
    const dynamicLastPage = getDynamicLastPage();
    const renderDynamicStartEllipsis = pages.length >= 2;
    const renderDynamicEndEllipsis = pages.length >= 5;
    const isLastPageDynamic = lastPage > 5;
    const previousPageClasses = (currentPage === startPage) ? "pagination__page-first" : "";
    const nextButtonClasses = (currentPage === lastPage) ? "pagination__page-last" : "";

    function getPages() {
        let pagesList = [];
        for (let i = 1; i <= Math.ceil(reposCounter / reposPerPage); ++i) {
            pagesList.push(i);
        }
        return pagesList;
    }

    function getDynamicStartEllipsis() {
        const showStartEllipsis = (currentPage - 3) > 1;
        return (
            (showStartEllipsis) ?
                <li li className="pagination__page ellipsis">...</li>
                :
                <li className={(currentPage === startPage + 1) ? "pagination__page-active" : "pagination__page"} onClick={() => setCurrentPage(startPage + 1)}>{startPage + 1}</li>
        );
    }

    function getDynamicEndEllipsis() {
        const showEndEllipsis = (currentPage + 4) <= lastPage;
        return (
            (showEndEllipsis) ?
                <li className="pagination__page ellipsis">...</li>
                :
                <li className={(currentPage === lastPage - 1) ? "pagination__page-active" : "pagination__page"} onClick={() => setCurrentPage(lastPage - 1)}>{lastPage - 1}</li>
        );
    }

    function getDynamicLastPage() {
        return <li className={(currentPage === lastPage) ? "pagination__page-active" : "pagination__page"} onClick={() => setCurrentPage(lastPage)}>{lastPage}</li>;
    }

    function toPreviousPage() {
        if (currentPage !== 1) {
            scrollToTop();
            dispatch(fetchRepos(userName, currentPage - 1));
            dispatch(setCurrentPageAction(currentPage - 1));
        }
    }

    function toNextPage() {
        if (currentPage !== lastPage) {
            scrollToTop();
            dispatch(fetchRepos(userName, currentPage + 1));
            dispatch(setCurrentPageAction(currentPage + 1));
        }
    }

    function setCurrentPage(page) {
        scrollToTop();
        dispatch(setCurrentPageAction(page));
        dispatch(fetchRepos(userName, page));
    }

    function scrollToTop() {
        const reposTitle = props.reposTitle;
        reposTitle.current.scrollIntoView({
            block: "end",
            behavior: "smooth"
        })
    }

    return (
        <div className="pagination">
            <div className="pagination__pages-navigation pages-navigation">
                <PagesNavigation />
            </div>
            <ul className="pagination__pages">
                <li className={"pagination__page pagination__button " + previousPageClasses} onClick={() => toPreviousPage()}>
                    <PaginationPreviousButton />
                </li>
                <li className={(currentPage === startPage) ? "pagination__page-active" : "pagination__page"} onClick={() => setCurrentPage(startPage)}>{startPage}</li>

                {renderDynamicStartEllipsis && dynamicStartEllipsis}

                {diplayedPages.map((page, index) => {
                    return <li className={(currentPage === page) ? "pagination__page-active" : "pagination__page"} key={index} onClick={() => setCurrentPage(page)}>{page}</li>
                })}

                {renderDynamicEndEllipsis && dynamicEndEllipsis}

                {isLastPageDynamic && dynamicLastPage}

                <li className={"pagination__page pagination__button " + nextButtonClasses} onClick={() => toNextPage()}>
                    <PaginationNextButton />
                </li>
            </ul>
        </div >
    );
} 