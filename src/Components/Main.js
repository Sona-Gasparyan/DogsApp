import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Paper, Typography } from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            accExpand: false
        }
    }

    handleChange = () => {
        this.setState({
            accExpand: !this.state.accExpand
        })
    }

    render() {
        return (
            <div style={{ margin: 20 }}>
                <Paper style={{ marginBottom: 5 }}>
                    <Typography variant="h1" align="center" >
                        Dogs
            </Typography>
                </Paper>

                <Paper style={{ marginBottom: 5 }}>
                    <Accordion expanded={this.state.accExpand} onChange={this.handleChange}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography >General settings</Typography>
                            <Typography >I am an accordion</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                maximus est, id dignissim quam.
              </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Paper>
                <Card>
                    <CardContent>
                        <Typography variant="body1" align="left" >
                            The domestic dog (Canis familiaris or Canis lupus familiaris)[4] is a domesticated form of wolf. The dog descended from an ancient, extinct wolf,[5][6] with the modern wolf being the dog's nearest living relative.[7] The dog was the first species to be domesticated[8][7] by hunter–gatherers over 15,000 years ago,[6] before the development of agriculture.[1] Their long association with humans has led dogs to be uniquely attuned to human behavior,[9] enabling an abundant cosmopolitan distribution[10] and to be able to thrive on a starch-rich diet that would be inadequate for other canids.[11]
                            The dog has been selectively bred over millennia for various behaviors, sensory capabilities and physical attributes.[12] Dogs are subclassified into breeds, which vary widely in shape, size and color.[13] They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and the military, companionship, therapy and aiding disabled people. This influence on human society has given them the sobriquet of "man's best friend."
            </Typography>
                    </CardContent>
                </Card>

            </div>
        )
    }


}


export default Main


