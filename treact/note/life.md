# 类组件
constructor
updateClassComponent
  constructClassInstance： instance === null)
  mountClassInstance  
    applyDerivedStateFromProps
      getDerivedStateFromProps(nextProps, prevState);
    callComponentWillMount: 两个新生命周期方法都没有时调用
  updateClassInstance： else
    callComponentWillReceiveProps: !hasNewLifecycles并且props或者context有更新
      instance.UNSAFE_componentWillReceiveProps
    applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
      getDerivedStateFromProps(nextProps, prevState);
      var partialState = getDerivedStateFromProps(nextProps, prevState);
      合并到memoizedState
    var shouldUpdate = checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);
      instance.shouldComponentUpdate(newProps, newState, nextContext);
    instance.componentWillUpdate(newProps, newState, nextContext);  !hasNewLifecycles

commitBeforeMutationEffects
  commitBeforeMutationLifeCycles
     var snapshot = instance.getSnapshotBeforeUpdate(prevProps, prevState);
     instance.__reactInternalSnapshotBeforeUpdate = snapshot;
  flushPscheduleCallback(NormalPriority$1, function () {
    flushPassiveEffects();
    return null;
  });

commitMutationEffects

commitLayoutEffects
  commitLifeCycles
    instance.componentDidMount();  instance === null
    instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
  commitAttachRef

# hook
commitBeforeMutationEffects: 异步执行
  scheduleCallback(NormalPriority$1, function () {
    flushPassiveEffects();
    return null;
  });
    flushPassiveEffects
      runWithPriority$1(priorityLevel, flushPassiveEffectsImpl);
      ...
      invokePassiveEffectCreate
        effect.destroy = create();

commitLayoutEffects
  commitLifeCycles
    commitHookEffectListMount
      effect.destroy = create();


# 顺序
getDerivedStateFromProps
shouldComponentUpdate
render
Child getDerivedStateFromProps
Child shouldComponentUpdate
Child render
Child getSnapshotBeforeUpdate
getSnapshotBeforeUpdate
Child componentDidUpdate
componentDidUpdate

更新链表顺序： 从上往下，DOM节点正常从上往下，组件节点先插入了子节点，再回来插入父节点
p.div -> c.div -> p.c -> p