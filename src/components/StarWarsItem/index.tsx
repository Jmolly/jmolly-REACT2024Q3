import { Component } from 'react';
import { StarWarsItemType } from '../../types';

interface IStarWarsItem {
  swCharacter: StarWarsItemType;
}

class StarWarsItem extends Component<IStarWarsItem> {
  render() {
    const { swCharacter } = this.props;

    return (
      <li>
        <p>
          {swCharacter.name} - {swCharacter.description}
        </p>
      </li>
    );
  }
}

export default StarWarsItem;
