import React, {Component} from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

export default class Search extends Component {

  render(){
    const repo = this.props.data;
    return(
    <Card href={repo.html_url} target="blanck">
    <Image src={repo.owner.avatar_url} style={{minHeight: '250px'}}/>
    <Card.Content>
      <Card.Header>
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {repo.name}
        </span>
      </Card.Meta>
      <Card.Description>
        {repo.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p><Icon name='user' />Suivi par <b>{repo.watchers}</b> personnes</p>
    </Card.Content>
  </Card>
    );
  }
}
