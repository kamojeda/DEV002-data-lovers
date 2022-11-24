export const characters = (data) => {
  if (data === undefined) {
    throw new TypeError('data is undefined')
  } else if (data === null) {
    throw new TypeError('data is null')
  } else {
    return(data.characters);
  }
}

export const createArrayObjects = (data) => {
  if (data === undefined) {
    throw new TypeError('data is undefined')
  } else if (data === null) {
    throw new TypeError('data is null')
  } else {
    let filtered = data.characters;
    let finalArray = filtered.map( (element) => ({name: element.name, house: element.house}))
    return finalArray;
  }
};

export const filterCompare = (array, cName) => {
  if (array === undefined || cName === 0) {
    throw new TypeError('data is undefined')
  } else if (array === null || cName === null) {
    throw new TypeError('null values')
  } else {
  let comparedElements = array.filter(element => element.name.toLowerCase().includes(cName.toLowerCase().trim()));
  return comparedElements;
}
}

export const filterAscendent = (array) => {
  if (array === undefined) {
    throw new TypeError('data is undefined')
  } else if (array === null) {
    throw new TypeError('null values')
  } else {
    let ascendent = array.sort(function(a, b) {
      return((a.name < b.name)? -1: ((a.name > b.name)? 1: 0));
    })
  return ascendent;
}
}

export const filterDescendent = (array) => {
  if (array === undefined) {
    throw new TypeError('data is undefined')
  } else if (array === null) {
    throw new TypeError('null values')
  } else {
    let descendent = array.sort(function(a, b) {
      return((a.name < b.name)? 1: ((a.name > b.name)? -1: 0));
      })
      return descendent;
  }
}