export async function resolveRouteParams(params) {
  return (await params) || {};
}

export async function resolveSearchParams(searchParams) {
  return (await searchParams) || {};
}
