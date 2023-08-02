import { Text } from 'react-native';

const MyApp = () => {
  return (
    <>
      <Text>Hello World</Text>
      <Text>IFAL</Text>
      <Gato nome="Jubileu" idade={1}/>
      <Gato nome="Garfield" idade={3}/>
      <Gato nome="Marie" idade={12}/>
    </>
  )
}

const Gato = ({nome, idade}) => {
  return <Text>Eu sou um(a) gato(a), meu nome é {nome.toUpperCase()} e eu tenho {idade} {idade === 1 ? "ano" : "anos"}.</Text>
}

export default MyApp;