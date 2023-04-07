import React from 'react'
import { Container, Group } from './style'

export default function Header({ title }) {
    return (
        <>
            <Container>
                <Group>
                    <Container.Title>
                        {title}
                    </Container.Title>
                    <Group>
                        <Group.Input placeholder="Filter" />
                        <Group.Btn>
                            <i className="bi bi-search"></i>
                        </Group.Btn>
                    </Group>
                </Group>
                <Container.Btn>
                    <i className="bi bi-plus"></i> Add New Patient
                </Container.Btn>
            </Container>
        </>
    )
}
