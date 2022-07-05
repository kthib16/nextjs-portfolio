import React, { useState, useEffect } from 'react'
import WordTiles from '../components/WordTiles.js'
import Layout, { siteTitle } from '../components/layout'


export default function WordScramble(props) {

const [ word, setWord ] = useState(undefined)
const [ currentRow, setCurrentRow ] = useState(1)
const [ rowObject, setRowObject ] = useState({})
const [ isCorrect, setIsCorrect ] = useState(false)


useEffect(async() => {
  await fetch("/data/words.json")
    .then((res) => res.json())
    .then((words) => {
      const index = getRandomNumber(0,words.length)
      const word = words[index].Word
      setWord(word)
      setCurrentRow(1)
    })
}, []);


const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min);}

const changeIsCorrect =  () => {
  setIsCorrect(true)
  setCurrentRow(0)
  setTimeout(()=> {
    alert("Congratulations! You've won")
  }, 1000)
}

return(
  <Layout>
    <p>Guess the word! Start typing.</p>
    {word
      ?<>
        <WordTiles
          changeIsCorrect={changeIsCorrect}
          rowObject={rowObject}
          setRowObject={setRowObject}
          setCurrentRow={setCurrentRow}
          currentRow={currentRow}
          row={1}
          word={word} />
        <WordTiles
          changeIsCorrect={changeIsCorrect}
          rowObject={rowObject}
          setRowObject={setRowObject}
          setCurrentRow={setCurrentRow}
          currentRow={currentRow}
          row={2}
          word={word} />
        <WordTiles
          changeIsCorrect={changeIsCorrect}
          rowObject={rowObject}
          setRowObject={setRowObject}
          setCurrentRow={setCurrentRow}
          currentRow={currentRow}
          row={3}
          word={word} />
        <WordTiles
          changeIsCorrect={changeIsCorrect}
          rowObject={rowObject}
          setRowObject={setRowObject}
          setCurrentRow={setCurrentRow}
          currentRow={currentRow}
          row={4}
          word={word} />
        <WordTiles
          changeIsCorrect={changeIsCorrect}
          rowObject={rowObject}
          setRowObject={setRowObject}
          setCurrentRow={setCurrentRow}
          currentRow={currentRow}
          row={5}
          word={word} />
        <WordTiles
          changeIsCorrect={changeIsCorrect}
          rowObject={rowObject}
          setRowObject={setRowObject}
          setCurrentRow={setCurrentRow}
          currentRow={currentRow}
          row={6}
          word={word} />
      </>

      :''}
  </Layout>
)

}
