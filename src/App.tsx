import { Button, ButtonGroup, Show } from "@chakra-ui/react"
import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <Grid templateAreas={{
        base : `"nav" "main"`,
        lg: `"nav nav" "aside main"` // 1024px
      }}>
        <GridItem area= "nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area= "aside" bg = "gold">Aside</GridItem>
        </Show>
        <GridItem area= "main" bg = "dodgerblue">Main</GridItem>
      </Grid>
      {/*<Button colorPalette= "blue" onClick={() => console.log("Clicked!!")}>Click me!</Button> */}
    </div>

  )
}

export default App
