import { _getUsers } from "./_DATA";

export function getUserInformation() {
  return Promise.all([_getUsers()]).then(([users]) => ({
    users,
  }));
}
