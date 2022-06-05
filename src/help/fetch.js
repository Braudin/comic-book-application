export const getFetch = async (url, setValue = () => {}, setError = () => {}) =>
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        const err = new Error(res.statusText)
        err.status = res.status
        err.msj = res.statusText
        throw err
      }
      return res.json()
    })
    .then((res) => {
      setValue(res)
    })
    .catch((err) =>
      setError(err.status ? err : { status: 0, msj: 'ERR_NAME_NOT_RESOLVED' })
    )
