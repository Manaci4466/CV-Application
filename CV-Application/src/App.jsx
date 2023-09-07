import { useState } from 'react'
import './App.css'
import {CardWrapper,CvPage} from '../components/main'
import {clear} from '../src/functionality'

function App() {
  const [info,setInfo] = useState({});
  function handleSubmit() {
    const obj = {
      generalInfo: {
        name: document.querySelector('#Name').value,
        lastName: document.querySelector('#LastName').value,
        email: document.querySelector('#Email').value,
        phone: document.querySelector('#Phone-Number').value
      },
      educationalInfo: {
        schoolName: document.querySelector('#School-Name').value,
        titleOfStudy: document.querySelector('#Title-of-Study').value,
        dateOfStudy: document.querySelector('#Date-of-Study').value
      },
      practicalInfo: {
        companyName: document.querySelector('#Company-Name').value,
        positionOfTitle: document.querySelector('#Position-of-Title').value,
        responsibility: document.querySelector('#Responsibility').value,
        startOfStudy: document.querySelector('#Start-of-Study').value,
        endOfStudy: document.querySelector('#End-of-Study').value,
      }
    }
    setInfo({...obj});
    clear();
  }
    return (
    <>
      <header>
        <h1>CV-Application</h1>
      </header>
      <section className="main-content">
        <CardWrapper sumbitHandler={handleSubmit} info={info}/>
        <CvPage info={info}/>
      </section>
    </>
  )
}

export default App
