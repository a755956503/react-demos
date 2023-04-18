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


mountReducer
  mountWorkInProgressHook
    第一个hook挂到fiber的memoizedState上

updateReducer
  updateWorkInProgressHook

# 对象变量