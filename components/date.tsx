import { parseISO, format } from 'date-fns'

const Date = (props: { date: string }) => {
  const date = props.date;
  const parsedDate = parseISO(date)
  return <time dateTime={date}>{format(parsedDate, 'LLLL d, yyyy')}</time>
}

export default Date;
