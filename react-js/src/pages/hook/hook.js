import React from 'react';
import { useState } from 'react';
let isMount = true;
let id = 0;
let workInProgressHook;
let fiber = {
  stateNode: null,
  memoizedState: null
};

function useCustomState(initialState) {
  let hook;
  if (isMount) {
    hook = {
      memoizedState: initialState,
      next: null,
      id: id++,
      queue: {
        pending: null
      }
    };
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;
    } else {
      workInProgressHook.next = hook;
    }
    workInProgressHook = hook;
  } else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }

  let baseState = hook.memoizedState;
  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;
    do {
      const action = firstUpdate.action;
      if (typeof action === 'function') {
        baseState = action(baseState);
      } else {
        baseState = action;
      }
      firstUpdate = firstUpdate.next;
    } while(firstUpdate !== hook.queue.pending.next)

    hook.queue.pending = null;
  }
  hook.memoizedState = baseState;
  isMount = false;
  return [baseState, dispatchAction.bind(null, hook.queue)];

}

function dispatchAction(queue, action) {
  const update = {
    action,
    next: null
  };
  if (queue.pending === null) {
    update.next = update;
  } else {
    update.next = queue.pending.next;
    queue.pending.next = update;
  }
  queue.pending = update;
  schedule();
}

function schedule() {
  workInProgressHook = fiber.memoizedState;
  const app = fiber.stateNode();
  return app;
}

const Hook = () => {
  const [customState1, setCustomState1] = useCustomState(0);
  const [state1, setState1] = useState(0);
  const click = () => {
    setCustomState1(customState1 + 1);
    setState1(state1 + 1);
  };

  return (
    <div>
      <button onClick={click}>Hook</button>
      <div>{customState1}</div>
      <div>{state1}</div>
    </div>
  );
};

fiber.stateNode = Hook;
export default Hook;