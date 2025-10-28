export function calculateRankingScore(
  rating: number,
  reviewCount: number
): number {
  // Your secret sauce
  return rating * Math.sqrt(reviewCount) * 10
}
