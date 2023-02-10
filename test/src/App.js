import styles from "./App.module.css"
import TopYellow from "./components/Navbar/TopYellow";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.navbar}>
      <TopYellow />
      <Footer/>
    </div>
  );
}

export default App;
