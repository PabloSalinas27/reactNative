import { Text } from "react-native";
import { Card, CardProps } from "react-native-elements";

export default function Contacto() {
  const cardProps: CardProps = {
    containerStyle: { margin: 0 },
  };
  return (
    <Card {...cardProps}>
      <Card.Title>Información de contacto</Card.Title>
      <Text style={{ margin: 20 }}>
        Kaixo Mendizale! {"\n\n"}
        Si quieres participar en las salidas de montaña que organizamos o
        quieres hacerte soci@ de Gaztaroa, puedes contactar con nosotros a
        través de diferentes medios. Puedes llamarnos por teléfono los jueves de
        las semanas que hay salida (de 20:00 a 21:00). También puedes ponerte en
        contacto con nosotros escribiendo un correo electrónico, o utilizando la
        aplicación de esta página web. Y además puedes seguirnos en Facebook.{" "}
        {"\n\n"}
        Para lo que quieras, estamos a tu disposición! {"\n\n"}
        Tel: +34 948 277151 {"\n"}
        Email: gaztaroa@gaztaroa.com {"\n"}
      </Text>
    </Card>
  );
}
