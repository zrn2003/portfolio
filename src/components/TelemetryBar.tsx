import React from 'react';
import { Shield, Zap, Award, CheckCircle2, Server, FileText } from 'lucide-react';

interface TelemetryBarProps {
  activeDiscipline?: string;
  onSelectDiscipline?: (discipline: string) => void;
}

const TelemetryBar: React.FC<TelemetryBarProps> = ({ activeDiscipline = 'all', onSelectDiscipline }) => {
  const telemetryItems = [
    {
      id: 'accuracy',
      label: 'Model Accuracy',
      value: '92.0% Test Acc',
      badge: 'IJSRET Published',
      icon: Award,
    {
      id: 'accuracy',
      label: 'Model Accuracy',
      value: '92.0% Test Acc',
      badge: 'IJSRET Published',
      icon: Award,
      color: 'text-black dark:text-[#00FF66]',
      border: 'border-black dark:border-[#00FF66]/30',
      discipline: 'aiml',
      link: 'https://ijsret.com/wp-content/uploads/IJSRET_V12_issue2_370.pdf',
    },
    {
      id: 'cgpa',
      label: 'Academics',
      value: 'CGPA 8.46 / 10',
      badge: 'B.E. CS (PAHSU)',
      icon: CheckCircle2,
      color: 'text-black dark:text-[#00F0FF]',
      border: 'border-black dark:border-[#00F0FF]/30',
      discipline: 'all',
      link: '#education',
    },
    {
      id: 'stack',
      label: 'Production Store',
      value: 'Full MERN + R2',
      badge: 'Live in Production',
      icon: Server,
      color: 'text-black dark:text-[#00FF66]',
      border: 'border-black dark:border-[#00FF66]/30',
      discipline: 'fullstack',
      link: '#projects',
    },
    {
      id: 'security',
      label: 'Cybersecurity',
      value: 'Adversarial ML',
      badge: 'Minor Degree',
      icon: Shield,
      color: 'text-black dark:text-[#A855F7]',
      border: 'border-black dark:border-[#A855F7]/30',
      discipline: 'cybersecurity',
      link: '#skills',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-6">
      <div className="bg-white dark:bg-[#0B0F19]/90 border-2 border-black dark:border-[#1E293B] shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_25px_rgba(0,0,0,0.8)] backdrop-blur-md p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black dark:border-[#1E293B] pb-3 mb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-black dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffff00] dark:bg-[#00FF66] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffff00] border border-black dark:border-none dark:bg-[#00FF66]"></span>
            </span>
            <span className="font-bold uppercase tracking-wider text-black dark:text-white">
              Verified Engineering Metrics
            </span>
          </div>

          <div className="font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
            <span className="text-black font-bold bg-[#ffff00] px-1.5 py-0.5 border border-black dark:border-none dark:bg-transparent dark:text-[#00FF66]">LIVE SYSTEM METRICS</span> · UPDATED SEP 2026
          </div>
        </div>

        {/* 4 Telemetry Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {telemetryItems.map((item) => {
            const Icon = item.icon;
            const isHighlighted = activeDiscipline === 'all' || activeDiscipline === item.discipline;

            return (
              <a
                key={item.id}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-3 bg-white dark:bg-[#0F1626] border-2 transition-all group ${
                  isHighlighted
                    ? 'border-black dark:border-[#1E293B] hover:bg-[#ffff00]/15 dark:hover:border-[#00FF66]'
                    : 'opacity-50 border-transparent hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                    {item.label}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${item.color} group-hover:scale-110 transition-transform`} />
                </div>
                <p className="font-mono text-base sm:text-lg font-black text-black dark:text-white leading-tight">
                  {item.value}
                </p>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-[#00F0FF] transition-colors">
                  <span>{item.badge}</span>
                  <span className="text-zinc-500">↗</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TelemetryBar;
