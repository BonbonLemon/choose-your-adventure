export const asArray = entities => (
  Object.keys(entities).map(key => entities[key])
);
