 var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  }

shallowEqual


updateMemoComponent
if (compare(prevProps, nextProps) && current.ref === workInProgress.ref) {
  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
}