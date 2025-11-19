export const formatDateTime = (
  timestamp: string,
): { displayDate: string; time: string } | undefined => {
  if (timestamp) {
    const date = new Date(timestamp)
    const displayDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date)
    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })

    return {
      displayDate,
      time,
    }
  }

  return
}
