import { parseISO, format } from 'date-fns'

export interface DateInfo {
  dateString: string;
}

export default function Date({ dateString }: DateInfo) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
