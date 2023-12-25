export function capitalize(str: string): string {
  str ? (str = str.charAt(0).toUpperCase()) : null;
  console.log("Inicjały: ", str);
  
    return str;
}
