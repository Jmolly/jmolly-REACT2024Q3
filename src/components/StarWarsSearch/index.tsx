import React, { ChangeEvent, Component } from 'react';

interface StarWarsSearchProps {
  onSearch: (search: string) => void;
}

class StarWarsSearch extends Component<StarWarsSearchProps> {
  state = {
    search: '',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.onSearch(this.state.search);

    localStorage.setItem('searchQuery', this.state.search);
  };

  componentDidMount() {
    const initialSearch = localStorage.getItem('searchQuery');

    if (initialSearch) {
      this.setState({ search: initialSearch });
    }
  }

  render() {
    return (
      <form
        style={{
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onSubmit={this.handleSubmit}
      >
        <input
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleChange}
          style={{ marginRight: '8px' }}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default StarWarsSearch;
