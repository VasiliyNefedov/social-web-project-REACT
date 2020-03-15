export const updateArray = (array, itemId, objPropName, newObjProps) => {
  return array.map(el => {
    if (el[objPropName] === itemId) {
      return { ...el, ...newObjProps };
    }
    return el;
  });
};
