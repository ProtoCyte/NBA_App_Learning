import { TeamDetailsProps } from '@/types';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { fetchTeamStats } from '@/utils';

interface TeamStatsProps {
  isOpen: boolean;
  closeModal: () => void;
  teamId: number
}

const TeamDetails = ({isOpen, closeModal, teamId}: TeamStatsProps) => {
  const [teamStats, setTeamStats] = useState<TeamDetailsProps | null>(null);

  useEffect(() => {
    const fetchTeamStats = async () => {
      const headers = {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
      }
        const response = await fetch(`https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${teamId}&season=2023`, {headers: headers,});
        
        const raw = await response.json()
    
        const result = raw['response']
        setTeamStats(result);
    };
    if (teamId) fetchTeamStats();
  }, [teamId]);
  
  if (!teamStats) return <div>Loading...</div>;

  
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    {teamStats.assists}
                  </h2>

                  <div className='mt-3 flex flex-wrap gap-4'>
                    {Object.entries(teamStats).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full text-right' key={key} >
                        <h4 className='text-grey capitalize'>
                          {key.split("_").join(" ")}
                        </h4>
                        <div className='text-black-100 font-semibold'>
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  
);
                    }

export default TeamDetails;