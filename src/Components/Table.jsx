import React from 'react'
import { csv } from "d3";
import { useEffect, useState } from "react";
import './Table.css';



function Table() {
    const [Data, setData] = useState([]);

    let getData = async () => {
        let MatchData = await csv("iplmatches.csv");
        setData(MatchData);
        console.log(MatchData);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        
            <table>
                <thead>
                     <tr>
                        <th>No</th>
                        <th>Season</th>
                        <th>Date</th>
                        <th>City</th>
                        <th>Team 1</th>
                        <th>Team 2</th>
                        <th>Toss Winner</th>
                        <th>Toss Decision</th>
                        <th>Umpire1</th>
                        <th>Umpire2</th>
                        <th>Venue</th>
                        <th>Win By Run</th>
                        <th>Win By Wickets</th>
                        <th>Winner</th>
                       
                    </tr>
                    
                </thead>
                <tbody>
                    {Data.map((element) => {
                        console.log(element);
                        return (
                            <tr>
                                <td>{element.No}</td>
                                <td>{element.season}</td>
                                <td>{element.date}</td>
                                <td>{element.city}</td>
                                <td>{element.team1}</td>
                                <td>{element.team2}</td>
                                <td>{element.toss_winner}</td>
                                <td>{element.toss_decision}</td>
                                <td>{element.umpire1}</td>
                                <td>{element.umpire2}</td>
                                <td>{element.venue}</td>
                                <td>{element.win_by_runs}</td>
                                <td>{element.win_by_wickets}</td>
                                <td>{element.winner}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
        </>
    )
}

export default Table