import { Component } from 'react';
import { StarWarsItemType } from '../../types';
import StarWarsItem from '../StarWarsItem';

interface IStarWarsItem {
  starWarsCharacters: StarWarsItemType[];
}

class StarWarsList extends Component<IStarWarsItem> {
  render() {
    const { starWarsCharacters } = this.props;

    return (
      <ul>
        {starWarsCharacters.length == 0 && <p>No star wars characters yet</p>}
        {starWarsCharacters.length > 0 &&
          starWarsCharacters.map((swCharacter) => (
            <StarWarsItem swCharacter={swCharacter} key={swCharacter.id} />
          ))}
      </ul>
    );
  }
}

export default StarWarsList;
