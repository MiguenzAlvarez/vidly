import React, { Component } from "react";

class Vidly extends Component {
  state = {
    movies: [
      {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
      },
      {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Trip to Italy",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Wedding Crashers",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Gone Girl",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Sixth Sense",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 4,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "The Avengers",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
    ],
  };

  render() {
    const { movies } = this.state;
    console.log(this.state.movies);

    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="nav-item">Title</div>
            <div className="nav-item">Genre</div>
            <div className="nav-item">Stock</div>
            <div className="nav-item">Rate</div>
            <div className="nav-item"></div>
          </div>
        </div>
        <span>{this.state.movies[0] && this.showText(0)}</span>
        <span>{this.state.movies[1] && this.showText(1)}</span>
        <span>{this.state.movies[2] && this.showText(2)}</span>
        <span>{this.state.movies[3] && this.showText(3)}</span>
        <span>{this.state.movies[4] && this.showText(4)}</span>
        <span>{this.state.movies[5] && this.showText(5)}</span>
        <span>{this.state.movies[6] && this.showText(6)}</span>
        <span>{this.state.movies[7] && this.showText(7)}</span>
        <span>{this.state.movies[8] && this.showText(8)}</span>
      </React.Fragment>
    );
  }

  showText(index) {
    const { movies } = this.state;
    return (
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="nav-item">{movies[index].title}</div>
          <div className="nav-item">{movies[index].genre.name}</div>
          <div className="nav-item">{movies[index].numberInStock}</div>
          <div className="nav-item">{movies[index].dailyRentalRate}</div>
          <button
            onClick={() => this.handleDelete(movies[index]._id)}
            className='"alert alert-danger"'
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  handleDelete(id) {
    const { movies } = this.state;

    const index = movies.findIndex(function (movie) {
      return movie._id === id;
    });
    if (index < 0) return console.error("couldnt find movie");

    const withoutDeletedMovie = [...movies];
    withoutDeletedMovie.splice(index, 1);

    this.setState({ movies: withoutDeletedMovie });
  }

  formatCount() {
    const { movies } = this.state;

    return movies.length === 0
      ? "There are no movies in the database."
      : "showing " + movies.length + " movies in the database";
  }
}

export default Vidly;
