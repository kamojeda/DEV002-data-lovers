export const characters = (data) => {
  return data.characters.filter((element) => element.name);
};

export const createArrayObjects = (data) => {
  let filtered = data.characters.filter((element) => element.name);
  let finalArray = filtered.map((element) => ({
    name: element.name,
    house: element.house,
  }));

  return finalArray;
};

export const filterCompare = (array, cName) => {
  let comparedElements = array.filter((element) =>
    element.name.toLowerCase().includes(cName.toLowerCase().trim())
  );
  return comparedElements;
};

export const filterAscendent = (array) => {
  if (array === undefined) {
    throw new TypeError("data is undefined");
  } else if (array === null) {
    throw new TypeError("data is null");
  } else {
    let ascendent = array.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });

    return ascendent;
  }
};

export const filterDescendent = (array) => {
  if (array === undefined) {
    throw new TypeError("data is undefined");
  } else if (array === null) {
    throw new TypeError("data is null");
  } else {
    let descendent = array.sort(function (a, b) {
      return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
    });

    return descendent;
  }
};
