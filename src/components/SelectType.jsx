import React from 'react'

function SelectType({ handleSelectChange }) {
  return (
    <div className="relative inline-block w-full text-gray-700">
      <select
        className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 bg-white border rounded-lg appearance-none focus:shadow-outline"
        onChange={handleSelectChange}
      >
        <option value="" disabled selected>
          Darslikni tanlang
        </option>
        <option value="Sarf">Sarf</option>
        <option value="Nahv">Nahv</option>
        <option value="Boshqa">Boshqa</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  )
}

export default SelectType
