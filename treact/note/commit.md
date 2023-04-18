# 过程
commitRoot
  getCurrentPriorityLevel
  runWithPriority
  commitRootImpl

commitRootImpl
  commitBeforeMutationEffects // 遍历fiber执行生命周期  getSnapshotBeforeUpdate
    commitBeforeMutationEffectsDeletions
    commitBeforeMutationEffectsImpl
      commitBeforeMutationEffectOnFiber
  commitMutationEffects
    commitMutationEffectsDeletions
      commitDeletion
    commitMutationEffectsImpl
      commitResetTextContent
      commitDetachRef
      commitPlacement
        获取parent节点，获取插入位置，然后插入
        insertOrAppendPlacementNode
      commitWork
        commitUpdate
          updateFiberProps(domElement, newProps) 更新到内部属性
          updateProperties(domElement, updatePayload, type, oldProps, newProps)： 更新到实际DOM属性
            updateDOMProperties
            根据style，html，text，普通属性
        commitTextUpdate
  recursivelyCommitLayoutEffects

# 
finishedWork

# 问题
插入DOM，更新DOM，删除DOM分别怎么处理的？