import { Card } from "react-bootstrap";

function MuralListItem({ mural }) {

  const muralDescription = mural.description || mural.description_of_artwork

  return (
      <Card 
        bg='secondary' 
        text='white' 
        className='text-center'
      >
        <Card.Body>
          <Card.Title>{mural.title || mural.artwork_title}</Card.Title>
          <Card.Subtitle>By {mural.artist || mural.artist_credit}</Card.Subtitle>
          <Card.Text>{ mural.year || mural.year_installed}</Card.Text>
          <Card.Subtitle>Description</Card.Subtitle>
          <Card.Text>
            {muralDescription.length > 300 
            ? muralDescription.substring(0, 300).concat('...') 
            : muralDescription}
          </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default MuralListItem;