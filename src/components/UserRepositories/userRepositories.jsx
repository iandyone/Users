import "./userRepositories.css";
import { useSelector } from "react-redux";
import { Repository } from "../Repository/repository";
import reposNotFoundIcon from "../../assets/images/Content/noRepos.svg";
import { InfoPlaceholder } from "../InfoPlaceholder/infoPlaceholder";
import { Fragment } from "react";
import { Pagination } from "../Pagination/pagination";
import { RepositoryLoader } from "../RepositoryLoader/repositoryLoader";
import { useRef } from "react";
import { PaginationMobile } from "../PaginationMobile/paginationMobile";

export function UserRepositories() {
    const repos = useSelector((store) => store.user.repositories);
    const reposCounter = useSelector((store) => store.user.user.public_repos);
    const isReposListEmpty = reposCounter === 0;
    const isReposFetching = useSelector((store) => store.user.isReposFetching);
    const reposTitle = useRef(null);

    function getRepository(name, description, url, id) {
        return <Repository repoName={name} description={description} url={url} key={id} />;
    }

    return (
        <div className="user__repos repos">
            <h2 className="repos__title" ref={reposTitle}>Repositories <span>{reposCounter}</span></h2>
            {(isReposListEmpty) ?
                <div className="repos__placeholder">
                    <InfoPlaceholder image={reposNotFoundIcon} alt={"Repositories not found"} text={"Uh oh, looks like there are no repositories"} />
                </div>
                :
                <Fragment>
                    {((isReposFetching) ?
                        <RepositoryLoader />
                        :
                        <div className="repos__repositories">
                            {repos.map((repository) => {
                                return getRepository(repository.name, repository.description, repository.html_url, repository.id);
                            })}
                        </div>
                    )}
                    <Pagination reposTitle={reposTitle} />
                    <PaginationMobile reposTitle={reposTitle}/>
                </Fragment>
            }
        </div>
    );
}
