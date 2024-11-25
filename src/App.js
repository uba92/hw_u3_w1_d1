import './App.css'
import ButtonComponents from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'
import HeadingComponents from './components/HeadingComponents'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <HeadingComponents text='MY BASIC REACT PROJECT' />
        <ButtonComponents text='CREATE WITH REACT' btnStyle='btn' />
        <ImageComponent
          src='https://placedog.net/300/250'
          spacingStyle='spacing'
          borderRadius='rounded'
          alt='doggo'
        />
      </header>
    </div>
  )
}

export default App
