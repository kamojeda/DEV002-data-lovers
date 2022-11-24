import { filterAscendent, filterDescendent } from "../src/data.js";

describe("filter characters in ascendent sort", () => {
  test("sort list", () => {
    //given
    const arrayData = {
      characters: [
        {
          house: "Gryffindor",
          name: "Euan Abercrombie",
        },
        {
          house: "Ravenclaw",
          name: "Stewart Ackerley",
        },
        {
          house: null,
          name: "African prince",
        },
        {
          house: null,
          name: "Agnes's son",
        },
        {
          house: null,
          name: "Cornelius Agrippa",
        },
        {
          house: null,
          name: "Albino peacock",
        },
      ],
    };

    const expectedArrayData = {
      characters: [
        {
          house: null,
          name: "African prince",
        },
        {
          house: null,
          name: "Agnes's son",
        },
        {
          house: null,
          name: "Albino peacock",
        },
        {
          house: null,
          name: "Cornelius Agrippa",
        },
        {
          house: "Gryffindor",
          name: "Euan Abercrombie",
        },
        {
          house: "Ravenclaw",
          name: "Stewart Ackerley",
        },
      ],
    };

    //when
    let result = filterAscendent(arrayData.characters);

    //then
    expect(result).toStrictEqual(expectedArrayData.characters);
    expect(() => filterAscendent(undefined)).toThrow(TypeError);
    expect(() => filterAscendent(null)).toThrow(TypeError);
  });
});

describe("filter characters in ascendent sort", () => {
  test("sort list", () => {
    //given
    const arrayData = {
      characters: [
        {
          house: "Gryffindor",
          name: "Euan Abercrombie",
        },
        {
          house: "Ravenclaw",
          name: "Stewart Ackerley",
        },
        {
          house: null,
          name: "African prince",
        },
        {
          house: null,
          name: "Agnes's son",
        },
        {
          house: null,
          name: "Cornelius Agrippa",
        },
        {
          house: null,
          name: "Albino peacock",
        },
      ],
    };

    const expectedArrayData = {
      characters: [
        {
          house: "Ravenclaw",
          name: "Stewart Ackerley",
        },
        {
          house: "Gryffindor",
          name: "Euan Abercrombie",
        },
        {
          house: null,
          name: "Cornelius Agrippa",
        },
        {
          house: null,
          name: "Albino peacock",
        },
        {
          house: null,
          name: "Agnes's son",
        },
        {
          house: null,
          name: "African prince",
        },
      ],
    };

    //when
    let result = filterDescendent(arrayData.characters);

    //then
    expect(result).toStrictEqual(expectedArrayData.characters);
    expect(() => filterDescendent(undefined)).toThrow(TypeError);
    expect(() => filterDescendent(null)).toThrow(TypeError);
  });
});
