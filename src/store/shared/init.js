import { getUserInformation } from "../../util/api";
import { getUser } from "../actions/usersAction";

export function getDataInit() {
  return (dispatch) => {
    return getUserInformation().then(({ users }) => {
      dispatch(getUser(users));
    });
  };
}
