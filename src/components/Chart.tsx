import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTranslations } from '../contexts/LanguageContext';

const SimpleBarChart: React.FC = () => {
  const t = useTranslations();
  const data = t.dataSlide.chartData.map(item => ({
    name: item.name,
    [t.dataSlide.legend.timeSpent]: item.timeSpent,
    [t.dataSlide.legend.aiAssisted]: item.aiAssisted,
  }));

  return (
    <div className="w-full h-80 bg-card-bg p-4 rounded-lg border border-white/10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis dataKey="name" stroke="#8B949E" tick={{ fill: '#8B949E', fontSize: 12 }} />
          <YAxis stroke="#8B949E" tick={{ fill: '#8B949E', fontSize: 12 }}/>
          <Tooltip 
            cursor={{fill: 'rgba(37, 117, 252, 0.1)'}}
            contentStyle={{ backgroundColor: '#0A0F1F', border: '1px solid rgba(255,255,255,0.2)', color: '#E0E7FF' }}
            />
          <Legend wrapperStyle={{ color: '#E0E7FF', paddingTop: '10px' }} />
          <Bar dataKey={t.dataSlide.legend.timeSpent} fill="#6A11CB" />
          <Bar dataKey={t.dataSlide.legend.aiAssisted} fill="#2575FC" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
