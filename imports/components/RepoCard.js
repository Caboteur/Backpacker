import React, {Component} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

export default class Search extends Component {

  render(){
    const repo = this.props.data;
    return(
      <Card>
    <Image src={repo.owner.avatar_url} />
    <Card.Content>
      <Card.Header>
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {repo.name}
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
    );
  }
}
