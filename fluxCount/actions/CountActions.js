const {
  AppDispatcher
} = window.App;

window.App.CountActions = {

  addClick() {
    AppDispatcher.dispatch({
      type: '加1',
      value: 1
    });
  },

  subClick() {
    AppDispatcher.dispatch({
      type: '減1',
      value: -1
    });
  },

  multiply(){
    AppDispatcher.dispatch({
      type: '乘以2',
      value: 2
    });
  }

};