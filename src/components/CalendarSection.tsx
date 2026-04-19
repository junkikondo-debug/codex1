import React from 'react';

export const CalendarSection: React.FC = () => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">共有カレンダー</h2>
        <button
          type="button"
          className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
        >
          カレンダーを開く
        </button>
      </div>

      <div className="mt-4 flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500 sm:h-72">
        カレンダー埋め込み予定エリア（ダミー）
      </div>
    </section>
  );
};
