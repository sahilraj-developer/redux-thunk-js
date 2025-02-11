export const incrementAsync = (amount) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: amount });
      }, 1000);
    };
  };