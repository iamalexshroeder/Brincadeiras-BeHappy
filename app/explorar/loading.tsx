import { Header } from "@/components/layout/Header"

export default function ExplorarLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header title="Explorar" showSearch={false} showUserCard={false} />

      {/* Fake Search Bar skeleton */}
      <div className="px-4 sm:px-6 py-3 bg-[#F9F9F7] border-b border-[#E5E5EA]">
        <div className="bg-white p-[6px] rounded-[12px] border border-[#E5E5EA] h-10 w-full animate-pulse" />
      </div>

      <main className="page-main pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4">
        {/* Skeleton Kits Section */}
        <div className="flex items-baseline justify-between mb-4 pl-1">
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
        
        <div className="flex gap-4 px-1 overflow-hidden mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 w-[80%] max-w-[280px] bg-gray-200 rounded-[20px] animate-pulse shrink-0" />
          ))}
        </div>

        {/* Skeleton Galeria */}
        <div className="flex items-baseline justify-between mb-4 pl-1">
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
        </div>
        
        <div className="space-y-4 px-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full bg-white rounded-[24px] p-4 flex gap-4 animate-pulse shadow-sm">
              <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0" />
              <div className="flex-1 space-y-3 py-1">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
