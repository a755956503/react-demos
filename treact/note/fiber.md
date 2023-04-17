# 过程
## fiberRoot
legacyRenderSubtreeIntoContainer
  legacyCreateRootFromDOMContainer
    createLegacyRoot：ReactDOMRoot
      ReactDOMBlockingRoot: BlockingRoot实例，挂载_internalRoot属性
        createRootImpl
          createContainer
            createFiberRoot： 创建FiberRoot实例
              new FiberRootNode: 创建FiberRoot
              root.current = createHostRootFiber:  创建RootFiber
              root.current.stateNode = root
## RootFiber
scheduleUpdateOnFiber
  performSyncWorkOnRoot
    renderRootSync
      prepareFreshStack: 如果workInProgressRoot不存在
        workInProgressRoot = root
        workInProgress = createWorkInProgress(root.current, null)
      workLoopSync： 循环遍历fiber节点
    commitRoot // 提交
      existingCallbackNode
  ensureRootIsScheduled
    scheduleCallback(performSyncWorkOnRoot)
    或者 scheduleCallback(performConcurrentWorkOnRoot)
      performConcurrentWorkOnRoot
        renderRootConcurrent
          workLoopConcurrent
            performUnitOfWork
        performConcurrentWorkOnRoot: 什么情况下会调用

ensureRootIsScheduled
  scheduleCallback(performSyncWorkOnRoot)
  或者 scheduleCallback(performConcurrentWorkOnRoot)

## 普通fiber
beginWork
  bailoutOnAlreadyFinishedWork
    cloneChildFibers
      createWorkInProgress

## 遍历过程
workLoopSync: 循环遍历节点
  performUnitOfWork
    beginWork // 生成Fiber,返回child
      updateHostRoot
        processUpdateQueue： 遍历fiber中的update
      updateFunctionComponent
        renderWithHooks
    completeUnitOfWork // 处理兄弟节点
      completeWork
      completedWork = returnFiber;
      workInProgress = completedWork;

遍历顺序
通过performUnitOfWork从上往下处理，放回child节点，没有child节点则调用completeUnitOfWork，循环向上查找，有兄弟节点的处理兄弟节点（自上往下是生成节点数组时会标记，回来时再根据标记去处理），处理完再循环往上。


# 属性
alternate: 更新前的对应Fiber，初次更新为null
type: 函数，可以看到函数文件
tag: 根据$$typeof等属性生成

## 对象
FiberNode和FiberRootNode
root没有了return、child之类表示顺序的属性，有一个current。
root没有key，type这些元素相关的属性，多了lane相关的属性
root没有duration相关的属性

fiberRoot FiberRootNode对象
  current: rootFiber
  state: 挂载的根节点
rootFiber 普通Fiber
  stateNode: fiberRoot

Symbol(react.strict_mode)
  rootFiber下的第一个节点

performUnitOfWork
reconcileChildFibers
updateFunctionComponent

数组对象的节点： 会自动创建一层Fragment
mode: 9, tag: 7

## 方法
createFiberFromTypeAndProps
  tag:type.$$typeof