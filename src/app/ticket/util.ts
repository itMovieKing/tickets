import { TicketListItem } from "./config";

type LocalStats = {
  visits: number;  // 去的次数
  totalDays: number;  // 总天数
}

export function calculateStats(tickets: TicketListItem[]) {
  const localStats: Record<string, LocalStats> = {};
  let totalDays = 0;

  tickets.forEach((item) => {
    if ('duration' in item) {
      const start = new Date(item.duration[0]);
      const end = new Date(item.duration[1]);
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      
      totalDays += days;
      
      if (!localStats[item.local]) {
        localStats[item.local] = { visits: 0, totalDays: 0 };
      }
      localStats[item.local].visits += 1;
      localStats[item.local].totalDays += days;
    }
  });

  console.log('总见面天数:', totalDays);
  console.log('\n各地统计:');
  Object.entries(localStats).forEach(([local, stats]) => {
    console.log(`${local}:`, `${stats.visits}次,`, `共${stats.totalDays}天`);
  });
}
