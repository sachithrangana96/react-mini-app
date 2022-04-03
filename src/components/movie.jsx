import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { paginate } from '../utils/paginate';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from "./searchBox";

class movie extends Component {

    state = {
        movies :[],
        genres:[],
        pageSize:4,
        currentPage:1,
        searchQuery: "",
        selectedGenre:'',
        sortColumn:{path:'title',order:'asc'}
    }

    componentDidMount(){
        const genres = [{_id:"",name:"All Genres"},...getGenres()]
        this.setState({movies: getMovies(), genres});
    }

    handelDelete = (movie) => {
    //    console.log(movie)
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({movies:movies});
    };


    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = page => {
       this.setState({currentPage:page})
    }

    handleGenreselect = genres => {
        this.setState({selectedGenre:genres,currentPage:1})
    }


    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    };

    handleSort = sortColumn => {   
        this.setState({ sortColumn })
    };

    getPageData = () => {

        const { pageSize , currentPage ,selectedGenre, movies:allMovies,sortColumn,searchQuery} = this.state;

        let filtered = allMovies;
        if (searchQuery)
        filtered = allMovies.filter(m =>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        else if (selectedGenre && selectedGenre._id)
        filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        // const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;  
        console.log("filter",selectedGenre)

        const sorted =_.orderBy(filtered,[sortColumn.path],[sortColumn.order]);

        const movies = paginate(sorted,currentPage,pageSize);  

        return { totalCount: filtered.length, data:movies};
    }

    render() {
        console.log(this.state.movies)
        const { length:count } =this.state.movies;
        const { pageSize , currentPage ,sortColumn,searchQuery} = this.state;

        if(count === 0)
           return <p>There are no movies in the database</p>;

           const { totalCount,data:movies } = this.getPageData();
        
        // this.setState({movies:pgMovies})

        return(
            <div className="row">
                <div className="col-2">
                    <ListGroup 
                    items={this.state.genres} 
                    onItemSelect={this.handleGenreselect}
                    selectedItem={this.state.selectedGenre}
                     />
                </div>
                <div className="col-8">

                    <Link to="/movies/new" className='btn btn-primary' style={{marginBottom:20}}>New Movie</Link>
                   <p>Showing {totalCount} movies in the database </p>
                    <SearchBox value={searchQuery} onChange={this.handleSearch} />
                    <MoviesTable 
                    movies={movies} 
                    sortColumn={sortColumn}
                    onDelete={this.handelDelete} 
                    onLike={this.handleLike}
                    onSort={this.handleSort}
                    />
                    <Pagination 
                    itemsCount={totalCount} 
                    currentPage={currentPage} 
                    pageSize={pageSize} 
                    onPageChange={this.handlePageChange} />
                <div className="col-2"></div>
              </div> 
            </div>      
         );
    }
}

export default movie
