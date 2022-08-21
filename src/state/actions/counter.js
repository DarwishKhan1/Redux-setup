export const depositMoney = () => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: 10,
    });
  };
};

export const withdrawMoney = () => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: 10,
    });
  };
};
