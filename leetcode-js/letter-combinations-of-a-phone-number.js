function letterCombinations(digits){
  const result = []
  const letters = [
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ]

  function getNumLetters(num) {
    return letters[num - 2]
  }

  function run(prvLetters, step) {
    if (step == digits.length) {
      console.log(prvLetters)
      if (prvLetters.length > 0) {
        result.push(prvLetters)
      }
      return
    }
    const letters = getNumLetters(digits[step])
    step += 1
    for (let i = 0; i < letters.length; i++) {
      run(prvLetters + letters[i], step)
    }

  }

  run('', 0)
  return result
}