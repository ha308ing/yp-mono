type LoadStatus = "success" | "pending" | "failed";

interface User {
  name: string;
}

type UserState = {
  item: Nullable<User>;
  status: LoadStatus;
};

enum actions {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  SET_USER_ITEM = "SET_USER_ITEM",
}

const defaultState: UserState = {
  item: null,
  status: "failed",
};

interface BaseActionType<T> {
  type: T;
}

interface ItemActionType extends BaseActionType<actions> {
  item?: Nullable<User>;
}

export function userReducer(
  state: UserState = defaultState,
  { type = actions.FAILED, item = null }: ItemActionType
): UserState {
  switch (type) {
    case actions.PENDING:
      return {
        ...state,
        status: "pending",
      };
    case actions.SUCCESS:
      return {
        ...state,
        status: "success",
      };
    case actions.FAILED:
      return {
        ...state,
        status: "failed",
      };
    case actions.SET_USER_ITEM:
      return {
        ...state,
        item,
      };
    default:
      return state;
  }
}

export function loadSuccess(): BaseActionType<actions> {
  return { type: actions.SUCCESS };
}

export function loadFailed(): BaseActionType<actions> {
  return { type: actions.FAILED };
}

export function loadPending(): BaseActionType<actions> {
  return { type: actions.PENDING };
}

export function setUser(user: UserState["item"]): ItemActionType {
  return { type: actions.SET_USER_ITEM, item: user };
}

/* more terse */
/*
enum actions {
  SET_STATUS = "SET_STATUS"
}

export function userReducer(
  state: UserState = defaultState,
  { type = actions.FAILED, item = null }: ItemActionType
): UserState {
  switch (type) {
    case actions.SET_STATUS:
      return {
        ...state,
        status
      };
    default:
      return state;
  }
}

export function loadPending(status: LoadStatus) {
  return { type: actions.SET_STATUS, status };
}
*/
