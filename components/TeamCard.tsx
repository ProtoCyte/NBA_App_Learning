"use client";

import { useState } from 'react';
import Image from 'next/image';
import { TeamProps } from '@/types';
import { CustomButton } from '.';
import TeamDetails from './TeamDetails';

interface TeamCardProps {
    team: TeamProps;
}
const TeamCard = ({team}: TeamCardProps) => {
    const { league, season, team: teamInfo, conference, division, win, loss, gamesBehind, streak, winStreak, tieBreakerPoints } = team;

    const [isOpen, setIsOpen] = useState(false)

    const backgroundImageUrl = teamInfo.logo

  return (
    <div 
        className="team-card group bg-local relative border-2 border-black" 
            style={{ 
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
            }}>
      <div className='team-card__content bg-blue-700 items-center p-3 inline-block border-solid border-2 border-black'>
        <h2 className='team-card__content-title'>
                <div className='text-white'>
                    {teamInfo.name}
                </div>
            </h2>
      </div>

      <div className='flex mt-6 text-[30px] font-extrabold bg-blue-700 justify-center p-2 border-solid border-2 border-black'>
        <span className='self-start text-[11px] font-semibold italic mr-1 text-white'>
                W - L
            </span>
            <div className='text-white'>
                {conference.win} - {conference.loss}
            </div>
            <span className='self-start text-[11px] font-semibold ml-4 italic mr-1 text-white'>
                GB
            </span>
            <div className='text-white'>
                {gamesBehind}
            </div>
      </div>

      <div className='relative flex w-full mt-2 pb-[50px]'>

        <div className="absolute bottom-0 w-full">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-white border-solid border-2 border-black'
            textStyles='text-blue-500 text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <TeamDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} teamId={teamInfo.id} />
    </div>
  );
};

export default TeamCard;