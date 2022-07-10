/** Description of the fetchUser function. 
 ** async function for getting a list of user repositories via the GitHub API. The received data is stored in the storage
 ** param {string} userName - user name
*/

import { fetchingHasDoneAction, fetchUserAction, setResponseStatusAction } from "../store/actions/userActions";
import { fetchRepos } from "./fetchRepos";

export function fetchUser(userName, startPage) {
    return ((dispatch) => {
        fetch(`https://api.github.com/users/${userName}`)
            .then((response) => {
                dispatch(setResponseStatusAction(response));
                if (response.status !== 200) {
                    dispatch(fetchingHasDoneAction());
                    if (response.status !== 404) {
                        throw new Error(`Произошла ошибка при загрузке данных пользователя (Статус код - ${response.status})`);
                    }
                }
                return response;
            })
            .then((response) => response.json())
            .then((json) => {
                dispatch(fetchUserAction(json));
                dispatch(fetchRepos(userName, startPage));
            })
            .catch((error) => console.log(error.message));
    });
}