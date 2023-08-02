import { Text } from 'react-native';

const MyApp = () => {
  return (
    <>
      <Text>Hello World</Text>
      <Text>IFAL</Text>
      <Gato nome="Jubileu"/>
      <Gato nome="Garfield"/>
      <Gato nome="Marie"/>
    </>
  )
}

const Gato = (props) => {
  return <Text>Eu sou um(a) gato(a) e meu nome é {props.nome.toUpperCase()}.</Text>
}

export default MyApp;