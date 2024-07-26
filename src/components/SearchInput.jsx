import React from 'react'
import { Input } from '@/components/ui/input'

function SearchInput({ searchTerm, handleInputChange, searchTermBook, title }) {
  return (
    <Input
      type="text"
      placeholder={`Qaysi ${title} qidiryabsiz`}
      className="max-w-[250px] bg-white rounded-lg"
      value={searchTerm || searchTermBook}
      onChange={handleInputChange}
    />
  )
}

export default SearchInput
