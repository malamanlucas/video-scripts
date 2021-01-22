import lineReader from 'line-reader'

const lengthMax = 45

lineReader.eachLine('source/read.txt', (chunk, last) => {
  let start = 0;
  let stringFinal = ''
  let chunkString = chunk

  while (start < chunkString.length) {
    if (chunk[start + lengthMax] === undefined) {
      stringFinal += chunkString.substr(start)
      start += lengthMax
    } else {
      let end = start + lengthMax
      let offset = 0
      if (chunkString[end - 1] != ' ') {
        let currentChar = chunkString[end]
        while (currentChar !== ' ') {
          end++;
          offset++;
          currentChar = chunkString[end]
          if (currentChar == undefined) {
            break;
          }
        }
        stringFinal += `${chunkString.substring(start, end)}\n`
        start += (lengthMax + offset)
      } else {
        if (chunkString[end] == undefined) {
          end = chunkString.length
        }
        stringFinal += `${chunkString.substring(start, end)}\n`
        start += lengthMax
      }
    }
  }

  console.log(stringFinal)
})
