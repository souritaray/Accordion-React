import questions from './data.js';
import Question from './Questions.jsx';


function App() {
  return (
   <>
   <main>
    <section className="container">
    <h3>Questions And Answers About Login</h3>
    
     {questions.map(element => {
      return(
        <Question key={element.id} element={element}/>
      )
      
     })}
    </section>
    
   </main>
   </>
  );
}

export default App;
