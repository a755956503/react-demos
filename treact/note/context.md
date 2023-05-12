https://www.cncsto.com/article/76040


updateFunctionComponent
prepareToReadContext(workInProgress, renderLanes);
# 配置
createContext
```js
const context: ReactContext<T> = {
  $$typeof: REACT_CONTEXT_TYPE,
  _currentValue: defaultValue,
  _currentValue2: defaultValue,
};
context.Provider = {
  $$typeof: REACT_PROVIDER_TYPE,
  _context: context,
};
const Consumer = {
  $$typeof: REACT_CONTEXT_TYPE,
  _context: context,
};
```

# 读取
读取context._currentValue
添加context到dependencies的firstContext列表


dependencies
currentlyRenderingFiber.dependencies = {
  lanes: NoLanes,
  firstContext: contextItem,
};

firstContext
{
  context: ((context: any): ReactContext<mixed>),
  memoizedValue: value,
  next: null,
}


# 更新
beginWork
updateContextProvider
propagateContextChange
propagateContextChange_eager
  let dependency = list.firstContext; // 遍历dependency，查找是否有对应context
  while (dependency !== null) {

  const update = createUpdate(NoTimestamp, lane);
  sharedQueue.pending = update;
  scheduleContextWorkOnParentPath



# 多级嵌套
lastContextDependency