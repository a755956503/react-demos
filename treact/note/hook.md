# 执行过程
updateFunctionComponent
renderWithHooks
   ReactCurrentDispatcher.current =
      current === null || current.memoizedState === null
        ? HooksDispatcherOnMount
        : HooksDispatcherOnUpdate;


resolveDispatcher: hooks中获取dispatcher实例
  HooksDispatcherOnMount
  HooksDispatcherOnUpdate

updateWorkInProgressHook
  currentHook： 上一周期的hook
  nextWorkInProgressHook: 基于上周期hook新生成的hook


HooksDispatcherOnMountInDEV
HooksDispatcherOnMountWithHookTypesInDEV
HooksDispatcherOnUpdateInDEV
HooksDispatcherOnRerenderInDEV
InvalidNestedHooksDispatcherOnMountInDEV
# hook链表
function mountWorkInProgressHook(): Hook {
  const hook: Hook = {
    memoizedState: null,

    baseState: null,
    baseQueue: null,
    queue: null,

    next: null,
  };

  if (workInProgressHook === null) {
    // This is the first hook in the list
    currentlyRenderingFiber.memoizedState = workInProgressHook = hook;
  } else {
    // Append to the end of the list
    workInProgressHook = workInProgressHook.next = hook;
  }
  return workInProgressHook;
}

# hooks
## useReducer
mountReducer
  const hook = mountWorkInProgressHook(); // 第一个hook挂到fiber的memoizedState上
  hook.memoizedState = hook.baseState = initialState; // 赋值
  const queue: UpdateQueue<S, A> = {
    pending: null,
    lanes: NoLanes,
    dispatch: null,
    lastRenderedReducer: reducer,
    lastRenderedState: (initialState: any),
  };
  hook.queue = queue; //
  const dispatch: Dispatch<A> = (queue.dispatch = (dispatchReducerAction.bind(
    null,
    currentlyRenderingFiber,
    queue,
  ): any)); // dispatchReducerAction

updateReducer
  updateWorkInProgressHook

# 对象变量


# 17对比
reducer
dispatchAction 换成dispatchReducerAction和dispatchSetState
