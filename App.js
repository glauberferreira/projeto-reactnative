import { Text } from 'react-native';

const MyApp = () => {
  return (
    <>
      <Text>Hello World</Text>
      <Text>IFAL</Text>
      <Gato/>
      <Gato/>
      <Gato/>
    </>
  )
}

const Gato = () => {
  return <Text>Eu sou um(a) gato(a).</Text>
}

export default MyApp;