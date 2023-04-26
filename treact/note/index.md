# 过程
初始化
legacyRenderSubtreeIntoContainer
  legacyCreateRootFromDOMContainer 创建根节点、fiberRoot 和 rootFiber
    createLegacyRoot
  updateContainer
  getPublicRootInstance
更新
setState
  enqueueSetState


更新过程
requestEventTime
requestUpdateLane
createUpdate
enqueueUpdate
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
          workLoopConcurrent: 循环
            performUnitOfWork
        performConcurrentWorkOnRoot: 什么情况下会调用

ensureRootIsScheduled
  scheduleCallback(performSyncWorkOnRoot)
  或者 scheduleCallback(performConcurrentWorkOnRoot)


performUnitOfWork


## 方法
legacyRenderSubtreeIntoContainer
# 对象
workInProgress: fiber树
  alternate

FiberRootNode FiberNode
  current: 初始值是基于挂载元素创建的Fiber
  updateQueue: 在initializeUpdateQueue中创建
    baseState
    shared: 在enqueueUpdate中生成
      pending:
    firstBaseUpdate: 更新阶段中由于优先级不够导致被忽略的第一个Update
    lastBaseUpdate: 更新阶段中由于优先级不够导致被忽略的最后一个Update
  memoizedState: class中就是上一次的state

ReactElement
将JSX的标签，通过createElement，转换成Element对象

## 组件


# 方法
processUpdateQueue

## ReactFiberWorkLoop
ensureRootIsScheduled：可中断更新
调用场景
执行前： 1）异步任务 2）用正在执行中的任务

# 内部变量
_reactRootContainer： FiberRootNode

# 问题
fiber里的update是怎么分出不同的优先级去执行的

## children怎么创建出来的（先创建父组件还是先创建子组件）
通过createElement创建，element和fiber的关系类似于vue里面的_vnode和$vnode

## 怎么判断一个fiber对象是哪个组件的
key,props,memorizedState
通过props.children查看jsx关系
type里可以看到是哪个文件的函数



# 文章
react执行过程主要就是ReactDOM的更新过程，整个更新过程首先从触发更新开始，主要的更新方式有render和setState，render需要先初始化，setState直接更新，这两个过程都是一次执行四个准备工作，然后调用scheduleUpdateOnFiber进行更新。
scheduleUpdateOnFiber里有三个更新情况，一种是初次渲染更新（初始化LegacyUnbatchedContext），直接调用performSyncWorkOnRoot，一种是正常同步更新（setState），这种通过ensureRootIsScheduled和scheduleCallback调用performSyncWorkOnRoot进行可中断同步更新，一种是异步任务，通过ensureRootIsScheduled和scheduleCallback调用performConcurrentWorkOnRoot进行异步可中断更新