import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', Expense: 4500, Income: 2400 },
  { name: 'Feb', Expense: 3200, Income: 1498 },
  { name: 'Mar', Expense: 2700, Income: 9000 },
  { name: 'Apr', Expense: 1780, Income: 3708 },
  { name: 'May', Expense: 3890, Income: 4800 },
  { name: 'Jun', Expense: 4390, Income: 3800 },
  { name: 'July', Expense: 1490, Income: 9300 },
  { name: 'Aug', Expense: 2600, Income: 4800 },
  { name: 'Sep', Expense: 4780, Income: 1908 },
  { name: 'Oct', Expense: 6890, Income: 3800 },
  { name: 'Nov', Expense: 2790, Income: 2800 },
  { name: 'Dec', Expense: 3490, Income: 5300 },
];

export default function TransactionChart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Transactions</strong>
      <div className="mt-3 w-full flex-1">
       
        <ResponsiveContainer width="100%" height={300}> 
          <BarChart
            data={data}
            margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#0ea5e9" />
            <Bar dataKey="Expense" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
