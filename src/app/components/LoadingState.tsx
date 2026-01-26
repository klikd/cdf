export function LoadingState() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 border-2 border-[#0F3A2F] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-[#6B7280]">جاري المعالجة...</span>
      </div>
    </div>
  );
}
