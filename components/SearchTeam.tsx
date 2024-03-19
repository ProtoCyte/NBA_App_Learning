"use client";

import { useState, Fragment } from 'react';

import { Combobox, Transition } from '@headlessui/react'

import { SearchTeamProps } from '@/types'
import {teams} from '@/constants'

const SearchTeam = ({team, setTeam}: SearchTeamProps) => {
  const [query, setQuery] = useState('')

  const filteredTeams = 
    query === "" 
    ? teams
    : teams.filter((item) => (
      item.toLowerCase()
      .replace(/\s+/g, "")
      .includes(query.toLowerCase().replace(/\s+/g, ""))))


  return (
    <div className = "search-team">
      <Combobox value={team} onChange={setTeam}>
        <div className='relative w-full'>
          <Combobox.Input 
          className="search-team__input"
          placeholder='Search For Teams'
          displayValue={(team: string) => team}
          onChange={(e) => setQuery(e.target.value)}>
          
          </Combobox.Input>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}>
              <Combobox.Options className="absolute w-full z-10 mt-1 bg-white shadow-lg max-h-60 overflow-auto">
                { (
                  filteredTeams.map((item) => (
                    <Combobox.Option
                      key={item}
                      className={({ active }) =>
                        `relative search-team__option ${
                          active ? "bg-primary-blue text-white" : "text-gray-900"
                        }`
                      }
                      value={item}
                    >
                      {item}

                    </Combobox.Option>
                    
                  )
                ))}
              </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchTeam