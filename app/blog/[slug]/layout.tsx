import { Breadcrumb } from "@/components/Breadcrumb"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <> 
      <Breadcrumb />
      {children}
    </>
  )
}
