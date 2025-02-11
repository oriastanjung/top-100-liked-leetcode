function lengthOfLongestSubstring(s: string): number {
  let map = new Map();
  let start = 0,
    end = 0;
  let max = 0;
  if (s.length === 1) {
    return 1;
  }
  while (start <= end && end < s.length) {
    if (map.has(s[end])) {
      if (map.get(s[end]) >= start) {
        start = map.get(s[end]) + 1;
      } else {
        max = Math.max(max, end - start + 1);
      }
      map.set(s[end], end);
    } else {
      map.set(s[end], end);
      max = Math.max(max, end - start + 1);
    }
    end++;
  }
  return max;
}

console.log(lengthOfLongestSubstring("pwwkew"));
