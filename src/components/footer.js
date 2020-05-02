
import React from 'react'
import {
    Container,
    Grid,
    Segment,
} from 'semantic-ui-react'

import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

const FixedFooter = () => (
    <footer>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={6}>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <div class="socialIcon">
                                <a href="https://twitter.com/amolTthite"><FaTwitter /></a>
                                <a href="https://www.linkedin.com/in/thite-amol"><FaLinkedin /></a>
                                <a href="https://github.com/thite-amol"><FaGithub /></a>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </footer>
)

export default FixedFooter

