import React from 'react';

const actions = ['再読み込み', 'お知らせ送信', 'ワークフロー申請', '顧問先を登録'];

export const ActionPanel: React.FC = () => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
        <label className="w-full sm:w-72">
          <span className="sr-only">ポータルを検索</span>
          <input
            type="search"
            placeholder="ポータル内を検索"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => (
          <button
            key={action}
            type="button"
            className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
          >
            {action}
          </button>
        ))}
      </div>
    </section>
  );
};
