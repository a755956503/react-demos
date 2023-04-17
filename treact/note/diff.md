# 执行过程
updateFunctionComponent
  renderWithHooks
  reconcileChildren
    mountChildFibers
    workInProgress.child = reconcileChildFibers
      ChildReconciler
        placeSingleChild // Placement标签，更新时插入 
        reconcileSingleElement // $$typeof为singleElement
          createWorkInProgress
        reconcileSingleTextNode
        reconcileChildrenArray // 返回第一个子节点，其余子节点只是标记
HostComponent
  reconcileChildren // 同样是reconcileChilredn

# 方法
reconcileChildren(current, workInProgress, nextChildren, renderLanes)
current: workInProgress.alternate
workInProgress
nextChildren: renderWithHooks
renderLanes: subtreeRenderLanes

function reconcileChildFibers(
  returnFiber: Fiber, // 父 Fiber, workInProgress
  currentFirstChild: Fiber | null, // current.child
  newChild: any, // 之前的chilren
  lanes: Lanes, // 更新的优先级
): Fiber | null

# 策略
fragment、普通节点
普通节点多一个处理ref的步骤
renderWithHooks

reconcileSingleElement
遍历所有旧的child，找到与新SingleChild相同的节点（旧的可能是多个）
找到了就基于旧的创建新的，没有就直接创建新的
# 参考资料
https://www.imooc.com/article/297461/
