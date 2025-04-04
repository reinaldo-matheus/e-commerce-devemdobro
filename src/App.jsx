import { CopyRight } from "./components/CopyRight"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { LoginUp } from "./pages/LoginUp"
import { GlobalStyle } from "./styles/globals"

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <CopyRight />
      <LoginUp />
      <GlobalStyle />
    </>
  )
}

export default App
