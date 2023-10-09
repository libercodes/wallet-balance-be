/* eslint-disable max-len */
import { Paginated, PaginateQueryRaw } from '../types/types'
import {
  SelectQueryBuilder
} from 'typeorm'

const formatTake = (value: string): number => {
  let x = Number(value)
  if (x > 20 || Number.isNaN(x)) {
    x = 20
  }

  return x
}

const formatPage = (value: string): number => Number(value) || 1

export const GetAllPaginatedQB = async <T>(
  qb: SelectQueryBuilder<T>,
  query: PaginateQueryRaw
): Promise<Paginated<T>> => {
  const take = formatTake(query.take)
  const page = formatPage(query.page)
  const skip = take * page - take
  qb.take(take).skip(skip)

  const [rows, count] = await qb.getManyAndCount()
  const itemsPerPage = formatTake(query.take)
  const totalPages = Math.ceil(count / itemsPerPage)
  const totalItems = count
  const currentPage = formatPage(query.page)
  const nextPage = totalPages - currentPage <= 0 ? null : currentPage + 1

  const metadata = {
    itemsPerPage,
    totalPages,
    totalItems,
    currentPage,
    nextPage,
    searchTerm: query.search || ''
  }

  const paginated = new Paginated<T>()
  paginated.rows = rows
  paginated.metadata = metadata

  return paginated
}