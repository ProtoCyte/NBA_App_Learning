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
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Input 
          className="search-team__input"
          placeholder='Atlanta Hawks'
          displayValue={(team: string) => team}
          onChange={(e) => setQuery(e.target.value)}>
          
          </Combobox.Input>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}>
              <Combobox.Options>
                {filteredTeams.length === 0 && query !== "" && (
                  <Combobox.Option 
                    value={query}
                    className="search-team__option">
                      Create "{query}"
                  </Combobox.Option>
                )}
              </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchTeam