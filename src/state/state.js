import { readonly, ref } from "vue";

export function useStringCase(initialState) {
  const string = ref(initialState);

  const caseTypeHandler = (newState, caseType) => {
    const tempArr = newState.split(" ");
    switch (caseType) {
      case "kebab":
        // eslint-disable-next-line no-case-declarations
        return tempArr.length >= 2 && tempArr.join("-");
      case "camel":

        return tempArr.join(tempArr.map((item, index) => {
          if (index === 0) {
            return;
          } else {
            let temp = item.slice(0, 1).toUpperCase();
            let substracted = item.slice(1);
            let finalShape = temp.concat(temp, substracted)
            console.log(temp)
            return finalShape
          }
        }))
      default:
        throw new Error("unvalid stringCase Type")
    }
  }
  const setString = (newState, caseType) => {
    string.value = caseTypeHandler(newState, caseType)
  }

  return [readonly(string), setString];
}
