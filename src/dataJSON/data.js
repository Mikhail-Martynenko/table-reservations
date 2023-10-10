const place1 = {
    id: '1',
    name: "",
    status: "free",//или reserved
    scheme:
        {
            x: 100,
            y: 100,
            width: 100,
            height: 100,
        },
}
const place2 = {
    id: '2',
    name: "",
    status: "reserved",//или reserved
    scheme:
        {
            x: 500,
            y: 200,
            width: 200,
            height: 100,
        }
}

export const cabinet1 = {
    id: '1',
    name: "",
    type: "cabinet",//переговорка
    status: "free",//или reserved
    scheme: {
        width: 1000,
        height: 1000,
    },
    places: [place1, place2]
}

export  const office = {
    name: "",
    scheme: {
        width: 2000,
        height: 1000
    },
    cabinets: [cabinet1]
}