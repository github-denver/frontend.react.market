// Reducer에서 사용할 수 있는 함수입니다.
export const reducerUtils = {
  initial: (initialState = null) => ({
    loading: false,
    data: initialState,
    error: null,
  }),

  // 로딩 중 상태입니다. prevState의 기본값은 null입니다.
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (payload) => {
    return {
      loading: false,
      data: payload,
      error: null,
    };
  },
  error: (error) => {
    console.error(error);

    return {
      loading: false,
      data: null,
      error: error,
    };
  },
};
