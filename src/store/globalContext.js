import React, { createContext, useReducer, useEffect } from "react";
import request from "../request/request";

// 创建 Context
const Context = createContext();

// 定义初始状态
const initialState = { user: {} };

// 定义 reducer 函数
const Reducer = (state, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "INIT":
      return { ...state, ...payload };
    case "UPDATE":
      const temp = { ...state };
      return temp;
    default:
      return state;
  }
};

// 创建一个 Context 提供者组件
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const asyncDispatch = async (params = {}, options = {}) => {
    await request(params, options);
    dispatch({ type: "UPDATE", payload: params });
  };

  const init = async () => {
    dispatch({
      type: "INIT",
      payload: {},
    });
  };

  //  初始化时获取用户数据
  useEffect(() => {
    init();
  }, []);

  return (
    <Context.Provider value={{ state, dispatch, asyncDispatch, init }}>
      {children}
    </Context.Provider>
  );
};

// 导出 Context 供组件使用
export const useGlobalContext = () => React.useContext(Context);
