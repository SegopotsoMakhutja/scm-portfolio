import {
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react"

export const Home = (): JSX.Element => {
  return (
    <Grid
      h='200px'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg='tomato'>
        <Box>
          Hello 
        </Box>
      </GridItem>
      <GridItem colSpan={4} bg='tomato'>
        <Box>
          Hello 
        </Box>
      </GridItem>
    </Grid>
  )
}