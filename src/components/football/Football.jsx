import React, { useEffect } from 'react';
import axios from 'axios';

export const Football = () => {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        headers: {
          'X-RapidAPI-Key': 'a755fa3107msha327facac7bef49p169268jsn9b1d46a52395',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        const allLeagues = response.data.response;

        // Log all league names
        console.log("All League Names:", allLeagues.map(league => league.league.name.toLowerCase()));

        // Specify the league names you want to find
        const leaguesToFind = ["Premier League", "Serie A", "Ligue 1", "Bundesliga", "La Liga"];

        // Log the actual league names returned by the API
        console.log("Actual League Names:", allLeagues.map(league => league.league.name));

        // Loop through each league name and find the corresponding league
        leaguesToFind.forEach((leagueName) => {
          const foundLeague = allLeagues.find(
            (league) => league.league.name.trim().toLowerCase() === leagueName.toLowerCase()
          );

          if (foundLeague) {
            console.log(`${leagueName} found:`, foundLeague);
            // Continue with the next steps or set state with the league data
          } else {
            console.log(`${leagueName} not found`);
            // Handle the case where the league is not found
          }
        });

      } catch (error) {
        console.error(error);
        // Handle errors here
      }
    };

    fetchData();
  }, []);

  return <div>Football</div>;
};

export default Football;
