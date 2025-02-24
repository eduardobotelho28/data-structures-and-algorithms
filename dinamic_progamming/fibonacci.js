function chairSteps (n) {

    const dp = new Array(n.length+1).fill(0)

    dp[0] = 1
    dp[1] = 1

    for (let index = 2; index <= n.length; index++) {
        dp[i] =  dp[i-1] + dp[i-2]
    }

    return dp[n]

}