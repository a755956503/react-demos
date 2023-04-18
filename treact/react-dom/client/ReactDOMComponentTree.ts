import { setValueForStyles } from "../../shared/CSSPropertyOperations";
import { setValueForProperty } from "./DOMPerpertyOperations";
import setInnerHTML from "./setInnerHTML";
import setTextContent from "./setTextContent";

const internalInstanceKey = '__reactFiber$' + randomKey;
const internalPropsKey = '__reactProps$' + randomKey;
const internalContainerInstanceKey = '__reactContainer$' + randomKey;
const internalEventHandlersKey = '__reactEvents$' + randomKey;
const internalEventHandlerListenersKey = '__reactListeners$' + randomKey;
const internalEventHandlesSetKey = '__reactHandles$' + randomKey;

const DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
const CHILDREN = 'children';
const STYLE = 'style';


export function updateFiberProps(
  node: Instance | TextInstance | SuspenseInstance,
  props: Props,
): void {
  (node: any)[internalPropsKey] = props;
}
