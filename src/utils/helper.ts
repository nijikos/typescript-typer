export function objectToType(
  obj: Record<string, any>,
  typeName = "TData"
): string {
  const typeDefinition: string[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const valueType = typeof value;

      // Map JavaScript types to TypeScript types
      let tsType: string;
      if (valueType === "number") {
        tsType = "number";
      } else if (valueType === "string") {
        tsType = "string";
      } else if (valueType === "boolean") {
        tsType = "boolean";
      } else {
        // If the type is not one of the basic JavaScript types, assume "any"
        tsType = "any";
      }

      // Add the property to the type definition
      typeDefinition.push(`${key}: ${tsType};`);
    }
  }

  const result = `type ${typeName} = {\n  ${typeDefinition.join("\n  ")}\n}`;
  console.log(`objectToType`, { result });
  return result;
}

export function parseStringToObject(
  inputString: string
): { [key: string]: any } | null {
  try {
    // Remove the "const" declaration and trailing semicolon
    const jsonString = inputString
      .replace(/^const\s+\w+\s+=\s+/g, "")
      .replace(/;$/g, "");

    // Evaluate the JSON string
    const obj = eval("(" + jsonString + ")");
    console.log(`parseStringToObject`, { obj });
    return obj;
  } catch (error) {
    return null; // Return null if parsing fails
  }
}
