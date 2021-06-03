import React from "react";
import { View, Text, StyleSheet } from "react-native";

//conteúdo padrão caso eu não receba as propriedades, isso é defesa pra caso a API não funfe
const Line = ({ label = "", content = "-" }) => {
  return (
    <View style={styles.line}>
      <Text
        style={[
          styles.cell,
          styles.label,
          label.length > 9 ? styles.longLabel : null /* Operação ternaria */,
        ]}
      >
        {label}
      </Text>
      <Text style={[styles.cell, styles.content]}> {content} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
  },
  label: {
    fontWeight: "bold",
    flex: 1,
  },
  content: {
    flex: 3,
  },
  longLabel: {
    fontSize: 12,
  },
});

export default Line;
