import { HttpStatus } from '@nestjs/common'

const {
  NOT_FOUND,
  BAD_REQUEST,
  UNAUTHORIZED,
  CONFLICT
} = HttpStatus


export const errorsCatalogs = {
  EMAIL_OR_PASSWORD_INVALID: {
    message: 'Email or password invalid',
    code: 'EMAIL_OR_PASSWORD_INVALID',
    httpStatus: UNAUTHORIZED
  },
  PASSWORD_INVALID: {
    message: 'password invalid',
    code: 'PASSWORD_INVALID',
    httpStatus: UNAUTHORIZED
  },
  LOG_NOT_FOUND: {
    message: 'The log was not found',
    code: 'LOG_NOT_FOUND',
    httpStatus: NOT_FOUND
  },
  USER_NOT_FOUND: {
    message: 'User was not found',
    code: 'USER_NOT_FOUND',
    httpStatus: NOT_FOUND
  },
  USER_EMAIL_NOT_FOUND: {
    message: 'Could not find a user with that email',
    code: 'USER_EMAIL_NOT_FOUND',
    httpStatus: NOT_FOUND
  },
  USER_EMAIL_ALREADY_EXISTS: {
    message: 'That user email is already taken',
    code: 'USER_EMAIL_ALREADY_EXISTS',
    httpStatus: BAD_REQUEST
  },
  COURSE_TITLE_TAKEN: {
    message: 'A course with the same title already exists',
    code: 'COURSE_TITLE_TAKEN',
    httpStatus: CONFLICT
  },
  NOT_AUTHENTICATED: {
    message: 'User not authenticated',
    code: 'NOT_AUTHENTICATED',
    httpStatus: UNAUTHORIZED
  },
  FORBIDDEN_RESOURCE: {
    message: 'Forbidden resource',
    code: 'FORBIDDE_RESOURCE',
    httpStatus: UNAUTHORIZED
  },
  MARKET_ITEM_NOT_FOUND: {
    message: 'Market item was not found',
    code: 'MARKET_ITEM_NOT_FOUND',
    httpStatus: NOT_FOUND
  },
  MARKET_ITEM_IS_UNAVAILABLE: {
    message: 'Market item is unavailable',
    code: 'MARKET_ITEM_IS_UNAVAILABLE',
    httpStatus: BAD_REQUEST
  },
  IMAGE_NOT_FOUND: {
    message: 'Image was not found',
    code: 'IMAGE_NOT_FOUND',
    httpStatus: NOT_FOUND
  },
  CANNOT_VERIFY_WALLET_OWNERSHIP: {
    message: 'Cannot verify wallet ownership',
    code: 'CANNOT_VERIFY_WALLET_OWNERSHIP',
    httpStatus: UNAUTHORIZED
  },
}
