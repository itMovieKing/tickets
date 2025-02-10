"use client"

import { Ticket, ticketList } from "./config"
import TicketListItem from './TicketListItem'
import styles from './styles.module.css'
import { calculateStats } from "./util"

export default function TicketPage() {
  const tickets = ticketList.filter((item): item is Ticket => 'type' in item)
  
  calculateStats(ticketList)

  const stats = {
    total: tickets.length,
    totalPrice: tickets.reduce((sum, cur) => sum + (cur.price || 0), 0),
    rabbitCount: tickets.filter(ticket => ticket.passenger === '🐰').length,
    carrotCount: tickets.filter(ticket => ticket.passenger === '🥕').length,
  }
  
  console.log(stats)

  return (
    <div className={styles.ticketList}>
      {tickets.map((ticket, index) => (
        <TicketListItem 
          key={`ticket-${ticket.type}-${index}`} 
          index={index + 1} 
          ticket={ticket}
        />
      ))}
    </div>
  )
} 