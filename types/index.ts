import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchTeamProps {
    team: string;
    setTeam: (team: string) => void;
}

export interface TeamProps {
    
        league: string;
        season: number;
        team: {
          id: number;
          name: string;
          nickname: string;
          code: string;
          logo: string;
        }
        conference: { 
            name: string; 
            rank: number; 
            win: number;
            loss: number; 
        }
        division: {
          name: string;
          rank: number;
          win: number;
          loss: number;
          gamesBehind: string;
        }
        win: { 
            home: number; 
            away: number; 
            total: number; 
            percentage: string; 
            lastTen: number; }
        loss: { 
            home: number; 
            away: number;
            total: number;
            percentage: string; 
            lastTen: number; }
        gamesBehind: string;
        streak: number;
        winStreak: boolean;
        tieBreakerPoints: null;
      
}

export interface TeamDetailsProps {
    games: number;
    fastBreakPoints: number;
    pointsInPaint: number;
    biggestLead: number;
    secondChancePoints: number;
    pointsOffTurnovers: number;
    longestRun: number;
    points: number;
    fgm: number;
    fga: number;
    fgp: string;
    ftm: number;
    fta: number;
    ftp: string;
    tpm: number;
    tpa: number;
    tpp: string;
    offReb: number;
    defReb: number;
    totReb: number;
    assists: number;
    pFouls: number;
    steals: number;
    turnovers: number;
    blocks: number;
    plusMinus: number;
}