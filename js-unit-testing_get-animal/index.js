export function getAnimal(animals) {
    if (animals === "cats") {
        return "I totally love cats!";
    } else if (animals === "dogs") {
        return "I like dogs!";
    }
    if (animals === undefined) {
        return "I do not like animals at all!";
    }
}
