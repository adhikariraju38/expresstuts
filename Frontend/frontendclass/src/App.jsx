import React from "react"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Login from "./component/Login"

function App() {

  return (
    <>
      <Navbar />
      <Login/>
      <div style={{
        backgroundColor: "skyblue",
      }}>
        <h1>this is my text</h1>

        <div className="row">
          <div className="col-md-3 bg-danger">
            I am staying at 3/12 of screen
          </div>
          <div className="col-md-4 bg-primary">
            <img src="https://www.shutterstock.com/image-photo/airplane-isolated-on-white-background-600nw-2348048513.jpg" style={{ width: "100%", height: "50%" }} alt="" />
          </div>
          <div className="col-md-2 bg-danger">
            I am staying at 4/12 of screen
            <div className="row">
              <div className="col-md-6 bg-success">
                half
              </div>
              <div className="col-md-6 bg-primary">
                half
              </div>
            </div>

          </div>

          <div className="col-md-3 bg-success">
            I am staying at 3/12 half
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
