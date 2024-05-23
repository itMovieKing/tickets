import { Ticket } from '../config';
import styles from './styles.module.css'

type Props = {
  ticket: Ticket
}
export default function TicketListItem({
  ticket
}: Props) {
  const { trainNumber, departureStation, arrivalStation, departureTime,  arrivalTime, seatInfo, passenger } = ticket
  return (
    <div className={styles.ticketListItem}>
      <div className={styles.ticket_trainNumber}></div>
      <div className={styles.ticket_departure}></div>
      <div className={styles.ticketListItem_trainNumber}>{trainNumber}</div>
      <div className={styles.ticketListItem_trainNumber}>{departureStation}</div>
      <div className={styles.ticketListItem_trainNumber}>{arrivalStation}</div>
      <div className={styles.ticketListItem_trainNumber}>{departureTime}</div>
      <div className={styles.ticketListItem_trainNumber}>{arrivalTime}</div>
      <div className={styles.ticketListItem_trainNumber}>{seatInfo.seatNumber}</div>
      <div className={styles.ticketListItem_trainNumber}>{seatInfo.type}</div>
      <div className={styles.ticketListItem_trainNumber}>{passenger}</div>
    </div>
  )
}