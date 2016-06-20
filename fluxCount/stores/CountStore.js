const {
  AppDispatcher
} = window.App;

const CHANGE_EVENT = 'CHANGE';

const _emitter = new EventEmitter();

// STROE
let COUNT = 0;

const addition = (count, value) => {
  console.log(count + ' + ' + value);
  return count + value
}

const multiply = (count, value) => {
  console.log(count + ' x ' + value);
  return count * value
}

window.App.CountStore = {
  getAll() {
    return COUNT;
  },
  addChangeListener(callback) {
    _emitter.on(CHANGE_EVENT, callback);
    return () => _emitter.removeListener(CHANGE_EVENT, callback);
  },
  dispatchToken: AppDispatcher.register((action) => {
    console.log('action:', action.type );
    switch (action.type) {
      case '加1':
        COUNT = addition( COUNT, action.value );
        _emitter.emit(CHANGE_EVENT);
        break;

      case '減1':
        COUNT = addition( COUNT, action.value );
        _emitter.emit(CHANGE_EVENT);
        break;
      
      case '乘以2':
        COUNT = multiply( COUNT, action.value );
        _emitter.emit(CHANGE_EVENT);
        console.log( action );
        break;
    }
  })
};
