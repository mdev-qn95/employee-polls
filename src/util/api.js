import { _getQuestions, _getUsers, _saveQuestion } from "./_DATA";

export const getUserInformation = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
};

export const saveQuestion = (optionOneText, optionTwoText, author) => {
  return _saveQuestion({ optionOneText, optionTwoText, author });
};
