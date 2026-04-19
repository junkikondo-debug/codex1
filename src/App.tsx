import React from 'react';
import { ActionPanel } from './components/ActionPanel';
import { CalendarSection } from './components/CalendarSection';
import { Header } from './components/Header';
import { NoticeSection } from './components/NoticeSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-5">
        <Header
          subtitle="GOOGLE WORKSPACE 社内ポータル"
          title="社労士事務所ポータル"
          description="人事労務に関する連絡・申請・スケジュール確認を一元管理するダッシュボードです。未読通知や共有予定をすぐに把握できるよう、業務に必要な情報を整理して表示しています。"
        />
        <ActionPanel />
        <NoticeSection />
        <CalendarSection />
      </main>
    </div>
  );
};

export default App;
