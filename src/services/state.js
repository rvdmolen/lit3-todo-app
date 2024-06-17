import { ContextProvider, createContext } from '@lit/context';

function ToDoListState() {
  const toDoListContext = createContext(Symbol('todo-list-context'));
  let stateProvider;

  function initialize(appContext, initialValue = {}) {
    stateProvider = new ContextProvider(appContext, {
      context: toDoListContext,
      initialValue,
    });
  }

  function updateState(val) {
    if (!stateProvider) {
      throw new Error('ToList state not initialized');
    }

    const frozenValue = Object.freeze(val);
    if (!stateProvider.value.find(o => o.id === frozenValue.id)) {
      // Add item to state
      stateProvider.setValue([...stateProvider.value, frozenValue]);
    } else {
      // Replace item in state
      stateProvider.setValue([
        ...stateProvider.value.map(o =>
          o.id === frozenValue.id ? frozenValue : o
        ),
      ]);
    }
  }

  function getStateContext() {
    return toDoListContext;
  }

  function getValue() {
    if (!stateProvider) {
      throw new Error('ToList state not initialized');
    }

    return stateProvider.value;
  }

  return {
    updateState,
    initialize,
    getStateContext,
    getValue,
  };
}

export const todoListStore = ToDoListState();
