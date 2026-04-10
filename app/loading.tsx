import { Header } from "@/components/layout/Header"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Carregando..." showSearch={false} showUserCard={false} />

      <main className="page-main pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4">
        {/* Skeleton Category Filters */}
        <div className="flex gap-2 px-4 mb-6 overflow-hidden">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-pulse shrink-0" />
          ))}
        </div>

        {/* Skeleton Missions/Kits Strip (Optional area) */}
        <div className="px-4 mb-8">
          <div className="h-4 w-32 bg-gray-200 rounded-full mb-3 animate-pulse" />
          <div className="flex gap-3 overflow-hidden">
             <div className="h-[160px] w-[160px] bg-gray-200 rounded-[16px] animate-pulse shrink-0" />
             <div className="h-[160px] w-[160px] bg-gray-200 rounded-[16px] animate-pulse shrink-0" />
          </div>
        </div>

        {/* Skeleton Feed Cards */}
        <div className="space-y-4 px-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full bg-white rounded-[24px] p-4 flex gap-4 animate-pulse border border-border">
              {/* Avatar */}
              <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0" />
              
              <div className="flex-1 space-y-3 py-1">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                
                {/* tags */}
                <div className="flex gap-2 pt-2">
                  <div className="h-6 bg-gray-200 rounded-full w-16" />
                  <div className="h-6 bg-gray-200 rounded-full w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
