const _ = require("lodash");

const players = new Map();
const teams = new Map();

const getKey = (firstName, lastName) => {
    return firstName + lastName;
};

const SearchPlayerService = {
    getPlayersAndTeams: async () => {
        let data = await fetch(
            "http://data.nba.net/data/10s/prod/v1/2021/players.json"
        );
        let json = await data.json();
        console.log(json);
        for (const x in json.league.standard) {
            const key = getKey(
                json.league.standard[x].firstName,
                json.league.standard[x].lastName
            );
            if (!players.has(key)) {
                players.set(key, json.league.standard[x]);
            }
        }

        data = await fetch(
            "http://data.nba.net/data/10s/prod/v1/2021/teams.json"
        );
        json = await data.json();
        for (const x in json.league.standard) {
            teams.set(json.league.standard[x].teamId, json.league.standard[x]);
        }
    },
    searchPlayer: (firstName, lastName) => {
        const key = getKey(firstName, lastName);
        const player = players.get(key);
        return player;
    },
    getTeamNameFromId(id) {
        return teams.get(id).fullName;
    },
};

export default SearchPlayerService;
