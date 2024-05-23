"use client"

import { ticketList } from "./config"
import TicketListItem from './TicketListItem'

import styles from './styles.module.css'

export default function TicketPage() {
  // console.log('ticketList total price',
  //   ticketList.reduce((sum, cur) => {
  //     const curPrice = cur.price || 635
  //     sum += curPrice
  //     return sum
  //   }, 0)
  // )
  return (
    <div className={styles.ticketList}>
      {
        ticketList.map((ticket, index) =>{
          return <TicketListItem key={index} ticket={ticket}/>
        })
      }
    </div>
  )
} 