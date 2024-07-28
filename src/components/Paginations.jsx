import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

function Paginations({ currentPage, totalItems, itemsPerPage, itemsPerPageMobile, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage || itemsPerPageMobile)

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const renderPageNumbers = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem
          key={i}
          className="text-primary rounded-[8px]  bg-white hover:bg-secondary "
        >
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={(e) => {
              e.preventDefault()
              handlePageChange(i)
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return pages
  }

  return (
    <Pagination className="mt-[40px] py-[20px] ">
      <PaginationContent>
        <PaginationItem className="text-primary rounded-[8px]  bg-white hover:bg-secondary  mobile480:hidden">
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handlePageChange(currentPage - 1)
            }}
          />
        </PaginationItem>
        {renderPageNumbers()}
        {totalPages > 5 && <PaginationEllipsis />}
        <PaginationItem className="text-primary rounded-[8px]  bg-white hover:bg-secondary mobile480:hidden">
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handlePageChange(currentPage + 1)
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default Paginations
