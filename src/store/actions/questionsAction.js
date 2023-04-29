import { saveQuestion } from "../../util/api";
import { addUserQuestion } from "./usersAction";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions,
  };
};

export const addPoll = (firstVal, secondVal) => {
  return (dispatch, getState) => {
    const { authed } = getState();

    return saveQuestion(firstVal, secondVal, authed).then((data) => {
      dispatch(addQuestion(data));
      dispatch(addUserQuestion(data));
    });
  };
};

const addQuestion = (data) => {
  return {
    type: ADD_QUESTION,
    question: data,
  };
};
