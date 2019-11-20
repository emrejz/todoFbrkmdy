export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        list: [
          { id: Math.random(), text: action.payload, checked: false },
          ...state.list
        ]
      };
    case "DELETE":
      return {
        list: state.list.filter(item => item.id !== action.payload)
      };
    case "DOWN":
      return {
        list: [...action.payload]
      };
    case "CHECK":
      return {
        list: state.list.map(item => {
          if (item.id === action.payload) {
            item.checked = !item.checked;
            return item;
          } else return item;
        })
      };

    default:
      return state;
  }
};
