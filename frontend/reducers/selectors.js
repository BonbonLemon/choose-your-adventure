export const asArray = entities => (
  Object.keys(entities).map(key => entities[key])
);

export const selectAdventure = (adventures, id) => {
  const adventure = adventures[id] || {};
  return adventure;
};

export const selectPages = (pages, adventureId) => (
	asArray(pages).filter(page => page.adventure_id == adventureId)
);