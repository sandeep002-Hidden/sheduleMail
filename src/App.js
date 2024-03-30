import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <Header/>
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-full w-11/12">
        <form>
          <input type="email" className="border-2 border-slate-950 rounded-lg block w-1/2 h-8" placeholder="Enter the recipients mail" required/>
          <input type="submit" value="Click me" />
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default App;