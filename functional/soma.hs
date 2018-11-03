soma :: Int -> Int
soma 0 = 0
soma n = n + soma (n - 1)
