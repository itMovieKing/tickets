import { Ticket } from '../config';
import styles from './styles.module.css'

type Props = {
  ticket: Ticket,
  index: number,
}
export default function TicketListItem({
  ticket,
  index,
}: Props) {
  const { trainNumber, departureStation, arrivalStation, departureTime,  arrivalTime, seatInfo, passenger, price } = ticket
  return (
    <div className={styles.ticketListItem}>
      <div className={styles.index}>{index}</div>
      <div className={styles.ticket_trainNumber}>{passenger} - {trainNumber}</div>
      <div className={styles.ticket_departure}>
        <div className={styles.ticket_station}>{departureStation}</div>
        <div className={styles.ticket_time}>{departureTime}</div>
      </div>
      <div className={styles.arrow}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img src="arrow.svg" alt="Blue arrow" /> */}
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img src="航班行程箭头.png"  alt="Blue arrow" />
      </div>
      <div className={styles.ticket_arrival}>
        <div className={styles.ticket_station}>{arrivalStation}</div>
        <div className={styles.ticket_time}>{arrivalTime}</div>
      </div>
      <div className={styles.ticket_seatInfo}>
        <div className={styles.ticket_type}>{seatInfo.type}</div>
        <div className={styles.ticket_seatNumber}>{seatInfo.seatNumber}</div>
      </div>
    </div>
  )
}