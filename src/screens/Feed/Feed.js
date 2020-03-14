import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../actions/buildings'
import { Container, Row } from './styles'
import Card from 'components/Card'

class Feed extends React.Component {
  async componentDidMount() {
    try {
      this.props.dispatch(actions.getBuildings())
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    const { data } = this.props.buildings
    return (
      <Container>
        <Row>
          { data.map(building => (
            <Card imageUrl={building.default_image['520x280']}
              title={building.name} 
              description={building.description}/>
          ))}
        </Row>
      </Container>
    )
  }
}

const stateToProps = state => ({ buildings: state.buildings })
export default connect(stateToProps)(Feed)