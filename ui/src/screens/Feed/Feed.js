import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../actions/buildings'
import { Container, Row, SpacedRow, Paragraph, Title } from './styles'
import Card from 'components/Card'
import Paginator from 'components/Paginator'
import { HouseOutlined } from '@material-ui/icons'

class Feed extends React.Component {
  async componentDidMount() {
    try {
      await this.props.dispatch(actions.getBuildings())
      await this.props.dispatch(actions.getFavorites())
    } catch (err) {
      console.warn(err)
    }
  }

  toogleFavorite = (id, favorite) => this.props.dispatch(actions.toogleFavorite(id, favorite))

  changePage = idx => this.props.dispatch(actions.getBuildings(idx))

  isFavorite = id => {
    const { data: favorites } = this.props.favorites
    return favorites.includes(parseInt(id))
  }

  render() {
    const { pages, total, page, total_pages } = this.props.buildings
    const data = pages[page] || []
    const offset = (page-1) * 10
    return (
      <Container>
       <Title><HouseOutlined fontSize='inherit'/>Ofertas</Title>
        <SpacedRow>
          <Paginator page={page} total_pages={total_pages} changePage={this.changePage}/>
          { !!data.length && 
            <Paragraph>Montrando de {1 + offset} até {offset + data.length} de {total}</Paragraph> }
        </SpacedRow>
        <Row>
          { data.map(building => (
            <Card key={building.id} imageUrl={building.default_image['520x280']}
              title={building.name} price={building.min_price}
              favorite={this.isFavorite(building.id)}
              shareUrl={building.orulo_url}
              toogleFavorite={() => this.toogleFavorite(building.id, !this.isFavorite(building.id))}
              description={building.description}/>
          ))}
        </Row>
      </Container>
    )
  }
}

const stateToProps = state => ({ buildings: state.buildings, favorites: state.favorites })
export default connect(stateToProps)(Feed)