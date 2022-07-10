import "./user.css";
import { UserData } from "../UserData/userData";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/loader";
import { InfoPlaceholder } from "../InfoPlaceholder/infoPlaceholder";
import { UserRepositories } from "../UserRepositories/userRepositories";
import { useEffect } from "react";
import userNotFoundIcon from "../../assets/images/Content/noUser.svg";

export function User() {
    const isDataFetched = useSelector((store) => store.user.isFetching);
    const responseStatus = useSelector((store) => store.user.status);

    useEffect(() => {
        if (responseStatus !== 200 && responseStatus !== 0) {
            document.title = `GitHub Users — Not found`;
        }
    })

    return (
        <div className="content__body">
            {(isDataFetched) ?
                <Loader />
                :
                (responseStatus !== 200) ?
                    <InfoPlaceholder image={userNotFoundIcon} alt={"Пользователь не найден"} text={"Uh oh, couldn't find this user"} />
                    :
                    <div className="content__user user">
                        <div className="user__body">
                            <UserData />
                            <UserRepositories />
                        </div>
                    </div>
            }
        </div>
    );
}