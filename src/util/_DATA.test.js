const { _saveQuestionAnswer, _saveQuestion } = require("./_DATA");
describe("_saveQuestionAnswer", () => {
  it("true is returned when correctly formatted data is passed to the function", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "johndoe",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionOne",
    });

    expect(response).toBeTruthy();
  });

  it("an error is returned if incorrect data is passed to the function", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "johndoe",
      qid: undefined,
      answer: "optionOne",
    }).catch((e) => e);

    expect(response).toBe("Please provide authedUser, qid, and answer");
  });
});

describe("_saveQuestion", () => {
  it("an error is returned if incorrect data is passed to the function", async () => {
    const response = await _saveQuestion({}).catch((e) => e);

    expect(response).toBe(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
