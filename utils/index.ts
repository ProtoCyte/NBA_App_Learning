
export async function fetchTeams() {
    const headers = 
        {
        'X-RapidAPI-Key': 'e90e8d5fadmsha0ee8f6cfe54816p11b926jsn5a2df73b01f7',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}

    const response = await fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023', {headers: headers,});

    const raw = await response.json();

    const result = raw['response']

    return result;
}

export async function fetchTeamStats(id: number) {

	const headers = {
		'X-RapidAPI-Key': 'e90e8d5fadmsha0ee8f6cfe54816p11b926jsn5a2df73b01f7',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
    const response = await fetch(`https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${id}&season=2023`, {headers: headers,});
    
    const raw = await response.json()

    const result = raw['response']

    return result
};
