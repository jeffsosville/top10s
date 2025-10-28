import { createClient } from '@/lib/supabase'
import MSASearch from '@/components/MSASearch'

export default async function Home() {
  const supabase = createClient()
  const { data: featuredMSAs } = await supabase
    .from('msas')
    .select('*')
    .order('name')
    .limit(20)

  return (
    <main>
      <h1>Top 10 Cleaning Companies by Metro</h1>
      <MSASearch />
      <FeaturedMSAs msas={featuredMSAs} />
    </main>
  )
}
