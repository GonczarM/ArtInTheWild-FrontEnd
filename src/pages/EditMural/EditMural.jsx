import React, { useState } from 'react';
import { Form, Button, Container, Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import * as muralsAPI from '../../utils/murals-api'

const EditMural = ({mural, updateMural, updatedBy, user}) => {

	const [form, setForm] = useState(mural)

	const handleChange = (event) => {
		setForm({...form, [event.target.name]: event.target.value})
	}

	const handleSubmit = async (event) => {
    event.preventDefault()
		const updatedMural = await muralsAPI.editMural(form, mural._id)
		setForm(updatedMural.mural)
		updateMural(updatedMural.mural, user.username)
  }
	<LinkContainer to={`/mural/${mural._id || mural.mural_registration_id}`}>
	<Breadcrumb.Item >{mural.title || mural.artwork_title}</Breadcrumb.Item>
</LinkContainer>
	return(
		<Container>
			<Breadcrumb>
				<LinkContainer to={`/${updatedBy}`}>
						<Breadcrumb.Item >{updatedBy}</Breadcrumb.Item>
				</LinkContainer>
				<LinkContainer to={`/mural/${mural._id || mural.mural_registration_id}`}>
					<Breadcrumb.Item >{mural.title || mural.artwork_title}</Breadcrumb.Item>
				</LinkContainer>
				<Breadcrumb.Item active>Edit</Breadcrumb.Item>
			</Breadcrumb>
			<h1 className='text-center'>Edit Mural</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='title'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						placeholder='Mural Title'
						type="text" 
						name="title"
						value={form.title}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId='artist'>
					<Form.Label>Artist</Form.Label>
					<Form.Control
						placeholder='Mural Artist'
						type="text"
						name="artist"
						value={form.artist}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId='year'>
					<Form.Label>Year Installed</Form.Label>
					<Form.Control
						placeholder='Year Mural was Installed'
						type="number"
						name="year"
						value={form.year}
						onChange={handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId='description'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						placeholder='Mural Description'
						as="textarea"
						name="description"
						value={form.description}
						onChange={handleChange}
						style={{ height: '7rem' }}
						required
					/>
				</Form.Group>
				<Button type='submit'>Edit Mural</Button>
			</Form>
		</Container>
	)
}

export default EditMural