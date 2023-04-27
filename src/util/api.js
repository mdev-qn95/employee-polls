import { _getQuestions, _getUsers } from "./_DATA";

export function getUserInformation() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}
