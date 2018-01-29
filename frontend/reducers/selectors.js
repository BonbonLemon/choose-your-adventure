export const selectAdventure = (adventures, id) => {
  const adventure = adventures[id] || {};
  return adventure;
};

export const asArray = entities => (
  Object.keys(entities).map(key => entities[key])
);
