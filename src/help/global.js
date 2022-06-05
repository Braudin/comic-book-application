const URL_API = process.env.REACT_APP_HOST_API
const API_KEY = process.env.REACT_APP_API_KEY
const PROXY = 'https://cors-anywhere.herokuapp.com/'
const PRXY_URL_API = `${PROXY}${URL_API}`
const LIMIT_PAGE_OPTION = 30
const API_KEY_FORMAT = `?api_key=${API_KEY}&format=json`
const LIST_ORDER = `&sort=date_added:desc`
const LIST_LIMIT = `&limit=${LIMIT_PAGE_OPTION}`
const LIST_FIELDS = `&field_list=aliases,id,issue_number,name,image,issue_number,date_added`

export const LIMIT_PAGE = LIMIT_PAGE_OPTION

export const resources = {
  issue: `${PRXY_URL_API}issue${API_KEY_FORMAT}`,
  issues: `${PRXY_URL_API}issues${
    API_KEY_FORMAT + LIST_FIELDS + LIST_LIMIT + LIST_ORDER
  }`,
}

export const language = navigator.language || navigator.userLanguage

export const dateOptios = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}
