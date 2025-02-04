function sliding_window (string) {

    let l = 0,  r = 0
    let max  = 1
    const counter = {}

    counter[string[0]] = 1

    while (r < string.length - 1) {
        r+=1

        if(counter[string[r]])  {
            counter[string[r]] += 1
        }

        else {
            counter[string[r]] = 1
        }

        while (counter[string[r]] === 3) {
            counter[string[l]] -=1
            l+= 1
        }

        max = max > r-l+1 ? max : r-l+1
    }

    return max

}

sliding_window("teste")

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
