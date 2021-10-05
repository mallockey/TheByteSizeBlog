export function determineIfNew(timeStamp: string) {
  const postDate = new Date(timeStamp)
  const threshold = new Date().setDate(new Date().getDate() - 30)
  const daysAgo = new Date(threshold)
  if (postDate > daysAgo) {
    return true
  } else {
    return false
  }
}
