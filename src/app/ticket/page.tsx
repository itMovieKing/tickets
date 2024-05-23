"use client"

import { ticketList } from "./config"
import TicketListItem from './TicketListItem'

export default function TicketPage() {
  return (
    <div>
      {
        ticketList.map((ticket, index) =>{
          return <TicketListItem key={index} ticket={ticket}/>
        })
      }
    </div>
  )
} 