import React from 'react';

export const NoticeSection: React.FC = () => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">未読のお知らせ</h2>
        <span className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          1件
        </span>
      </div>

      <article className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-rose-100 px-2 py-1 text-xs font-bold text-rose-700">重要</span>
          <p className="text-sm font-semibold text-slate-800">2026年4月給与計算締切のリマインド</p>
        </div>
        <p className="mt-2 text-sm text-slate-600">
          締切日は2026年4月25日です。必要書類のアップロード状況をご確認ください。
        </p>
      </article>
    </section>
  );
};
