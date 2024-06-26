export const getIdParam = (paramUrl: any) => {
  const url = new URL(paramUrl)
  const params = new URLSearchParams(url.searchParams)
  const id = params.get('id')
  return id
}

export const getAllParams = (paramUrl: any) => {
  const url = new URL(paramUrl)
  const params = new URLSearchParams(url.searchParams)
  return params
}
