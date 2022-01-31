export type CharacterResponse = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string,
    },
    location: {
        name: string,
        url: string,
    },
    image: string,
    episode: [string],
    url: string,
    created: string
}

export type CharacterInfoResponse = {
    count: number,
    pages: number,
    next: string,
    prev: string
}

export const CharacterResponseInitial: CharacterResponse = {id:0, name:"", status: "", species:"", type:"",gender:"",origin:{name:"",url:""},location:{name:"",url:""},image:"",episode:[""],url:"",created:""};
export const CharacterInfoResponseInitial: CharacterInfoResponse = {count:0, pages:0, next: "", prev: ""}