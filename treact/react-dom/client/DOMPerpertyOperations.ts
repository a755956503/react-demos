export function setValueForProperty(
  node: Element,
  name: string,
  value: mixed,
  isCustomComponentTag: boolean,
) {
  const propertyInfo = getPropertyInfo(name);
  if (shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) {
    return;
  }
  if (shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag)) {
    value = null;
  }
  // If the prop isn't in the special list, treat it as a simple attribute.
  if (isCustomComponentTag || propertyInfo === null) {
    if (isAttributeNameSafe(name)) {
      const attributeName = name;
      if (value === null) {
        node.removeAttribute(attributeName);
      } else {
        node.setAttribute(
          attributeName,
          enableTrustedTypesIntegration ? (value: any) : '' + (value: any),
        );
      }
    }
    return;
  }
  const {mustUseProperty} = propertyInfo;
  if (mustUseProperty) {
    const {propertyName} = propertyInfo;
    if (value === null) {
      const {type} = propertyInfo;
      (node: any)[propertyName] = type === BOOLEAN ? false : '';
    } else {
      // Contrary to `setAttribute`, object properties are properly
      // `toString`ed by IE8/9.
      (node: any)[propertyName] = value;
    }
    return;
  }
  // The rest are treated as attributes with special cases.
  const {attributeName, attributeNamespace} = propertyInfo;
  if (value === null) {
    node.removeAttribute(attributeName);
  } else {
    const {type} = propertyInfo;
    let attributeValue;
    if (type === BOOLEAN || (type === OVERLOADED_BOOLEAN && value === true)) {
      // If attribute type is boolean, we know for sure it won't be an execution sink
      // and we won't require Trusted Type here.
      attributeValue = '';
    } else {
      // `setAttribute` with objects becomes only `[object]` in IE8/9,
      // ('' + value) makes it output the correct toString()-value.
      if (enableTrustedTypesIntegration) {
        attributeValue = (value: any);
      } else {
        attributeValue = '' + (value: any);
      }
      if (propertyInfo.sanitizeURL) {
        sanitizeURL(attributeValue.toString());
      }
    }
    if (attributeNamespace) {
      node.setAttributeNS(attributeNamespace, attributeName, attributeValue);
    } else {
      node.setAttribute(attributeName, attributeValue);
    }
  }
}