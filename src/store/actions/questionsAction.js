import { saveAnswer, saveQuestion } from "../../util/api";
import { addUserAnswer, addUserQuestion } from "./usersAction";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

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

export const voteOption = (questionId, option) => {
  return (dispatch, getState) => {
    const { authed } = getState();
    return saveAnswer(authed.id, questionId, option).then(() => {
      dispatch(addAnswer(authed.id, questionId, option));
      dispatch(addUserAnswer(authed.id, questionId, option));
    });
  };
};

const addAnswer = (author, questionId, option) => {
  return {
    type: ADD_ANSWER,
    author,
    questionId,
    option,
  };
};
