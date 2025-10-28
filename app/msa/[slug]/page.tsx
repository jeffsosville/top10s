import { createClient } from '@/lib/supabase'
import CompanyCard from '@/components/CompanyCard'

export async function generateStaticParams() {
  const supabase = createClient()
  const { data: msas } = await supabase.from('msas').select('slug')
  return msas?.map((msa) => ({ slug: msa.slug })) || []
}

export default async function MSAPage({ params }: { params: { slug: string } }) {
  const supabase = createClient()
  
  const { data: msa } = await supabase
    .from('msas')
    .select('*')
    .eq('slug', params.slug)
    .single()

  const { data: companies } = await supabase
    .from('companies')
    .select('*')
    .eq('msa_id', msa.id)
    .order('rank_position')
    .limit(10)

  return (
    <div>
      <h1>Top 10 Cleaning Companies in {msa.name}</h1>
      {companies?.map((company, idx) => (
        <CompanyCard key={company.id} company={company} rank={idx + 1} />
      ))}
    </div>
  )
}
