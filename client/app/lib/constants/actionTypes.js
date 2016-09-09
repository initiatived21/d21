/**
 * Action types
 */

/* Entities */
export const ADD_ENTITIES                = 'ADD_ENTITIES'
export const SET_ENTITY                  = 'SET_ENTITY'

/* Image processing */
export const CHANGE_CROP                 = 'CHANGE_CROP'
export const CROP_IMAGE                  = 'CROP_IMAGE'
export const CLEAR_IMAGE                 = 'CLEAR_IMAGE'
export const LOAD_IMAGE_START            = 'LOAD_IMAGE_START'
export const LOAD_IMAGE_FAILURE          = 'LOAD_IMAGE_FAILURE'
export const LOAD_IMAGE_SUCCESS          = 'LOAD_IMAGE_SUCCESS'

/* Flash messages  */
export const ADD_FLASH_MESSAGE           = 'ADD_FLASH_MESSAGE'
export const REMOVE_FLASH_MESSAGE        = 'REMOVE_FLASH_MESSAGE'

/* Search */
export const ADD_SEARCH_RESULTS          = 'ADD_SEARCH_RESULTS'
export const SET_SEARCH_LOADING_STATE    = 'SET_SEARCH_LOADING_STATE'

/* Signed pledges */
export const SIGN_PLEDGE                 = 'SIGN_PLEDGE'

/* Session */
export const TOGGLE_SESSION_POPUP        = 'TOGGLE_SESSION_POPUP'
export const HIDE_SESSION_POPUP          = 'HIDE_SESSION_POPUP'
export const SET_CURRENT_USER            = 'SET_CURRENT_USER'
export const SET_AUTH_TOKEN              = 'SET_AUTH_TOKEN'
