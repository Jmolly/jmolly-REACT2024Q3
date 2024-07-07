import { Component } from 'react';

import './App.css';
import { getStarWarsCharacters } from './api/starWarsApi';
import StarWarsList from './components/StarWarsList';
import StarWarsSearch from './components/StarWarsSearch';
import { StarWarsItemType } from './types';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';

class App extends Component {
  state: {
    starWarsCharacters: StarWarsItemType[];
    isLoading: boolean;
  } = {
    starWarsCharacters: [],
    isLoading: false,
  };

  async componentDidMount(): Promise<void> {
    this.setState({ ...this.state, isLoading: true });

    try {
      const starWarsCharacters = await getStarWarsCharacters();

      this.setState({
        starWarsCharacters,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleSearch = async (search: string) => {
    this.setState({ ...this.state, isLoading: true });

    try {
      const newSWCharacters = await getStarWarsCharacters(search);

      this.setState({ starWarsCharacters: newSWCharacters, isLoading: false });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { isLoading } = this.state;

    return (
      <ErrorBoundary>
        <StarWarsSearch onSearch={this.handleSearch} />
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <StarWarsList starWarsCharacters={this.state.starWarsCharacters} />
        )}
        <ErrorButton />
      </ErrorBoundary>
    );
  }
}

export default App;
