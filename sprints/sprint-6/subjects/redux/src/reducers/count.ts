enum actions {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export function countReducer(
  state: number = 0,
  action: { type: actions }
): number {
  switch (action.type) {
    case actions.DECREMENT:
      return state - 1;
    case actions.INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
