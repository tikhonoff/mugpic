//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/myNavbar";
import Jumbotron from "./components/Jumbotron";
import MugCard from "./components/MugCard";
import Footer from "./components/Footer";
import mugshot from "./mugshot.json";
import MyModal from "./components/MyModal/";
import "./App.css";

class App extends Component {
  state = {
    mugshot,
    mssg:"",
    clickedMugshot: [],
    score: 0,
    showModal: false,
  };

  imageClick = event => {
    const currentMugshot = event.target.alt;
    const mugshotAlreadyClicked =
      this.state.clickedMugshot.indexOf(currentMugshot) > -1;

    if (mugshotAlreadyClicked) {

      this.setState({
        mssg:"You lose!",
      });
      this.toggleModal();


    } else {
      this.setState(
        {
          mugshot: this.state.mugshot.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedMugshot: this.state.clickedMugshot.concat(
            currentMugshot
          ),
          score: this.state.score + 1
        },     
        () => {
          if (this.state.score === 12) {


            this.setState({
              mssg:"You win!",
            });
            this.toggleModal();


          }
        }
      );
    }
  };



  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });


  }

  reset =()=> {
    this.toggleModal() ;
    this.setState({
      mssg:"",
      mugshot: this.state.mugshot.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedMugshot: [],
      score: 0,
    });
  }


  render() {
    return (
      <div>
          <MyModal 
            show={this.state.showModal}
            onClose={this.reset}
            mssg={this.state.mssg}> you've clicked right {this.state.score} time(s) in a row
          </MyModal>
              <Navbar 
                score={this.state.score}
              />
              <Jumbotron >
              
                {this.state.mugshot.map(mugshot => ( 
                  <MugCard
                    imageClick={this.imageClick}
                    id={mugshot.id}
                    key={mugshot.id}
                    image={mugshot.image}
                  />
                ))}
              
              </Jumbotron>
              <Footer />

      </div>
    );
  }
}
export default App;