import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import { Container, HStack,VStack,Heading,Text,Image } from '@chakra-ui/react'
import Loader from "./Loader"
function Exchanges() {
  const [exchanges, setExchanges] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`)
      setExchanges(data)
      setLoading(false)
      console.log(data)
    }
    fetchExchanges()
  }, [])

  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader /> :
        <>
          <HStack wrap={"wrap"}>
            {exchanges.map((exchange) => (
              <ExchangesCard key={exchange.id} name={exchange.name} img={exchange.image} rank={exchange.trust_score_rank} url=
                {exchange.url} />
            ))}
          </HStack>
        </>
      }
    </Container>
  )
}
const ExchangesCard = ({name,img,rank,url})=>(
<a href={url} target={"blank"}>
<VStack>
  <Image src={img} width={'10'} height={"10"} objectFit={"contain"} alt={"Exchanges"}/>
  <Heading size={"md"} noOfLine={"1"}>
    {rank}
  </Heading>
  <Text noOfLine={"1"}>
{name}
  </Text>
</VStack>
</a>
)
export default Exchanges
