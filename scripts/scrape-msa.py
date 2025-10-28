from serpapi import GoogleSearch
from supabase import create_client
from ranking import calculate_score

# 1. Fetch from SerpAPI
# 2. Calculate scores
# 3. Upsert to Supabase
# 4. Update rankings
