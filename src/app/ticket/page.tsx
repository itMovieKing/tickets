"use client"

import { ticketList } from "./config"
import TicketListItem from './TicketListItem'

import styles from './styles.module.css'

export default function TicketPage() {
  // console.log({
  //   'total': ticketList.length,
  //   'total price': ticketList.reduce((sum, cur) => {
  //     const curPrice = cur.price || 635
  //     sum += curPrice
  //     return sum
  //   }, 0),
  // }
  // )
  return (
    <div className={styles.ticketList}>
      {
        ticketList
          // .filter(item => !item.price)
          .map((ticket, index) =>{
          return <TicketListItem key={index} index={index+1} ticket={ticket}/>
        })
      }
    </div>
  )
} 