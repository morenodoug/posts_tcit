export function isValidString(namePost) {

    return (typeof namePost === "string" && namePost.trim().length > 0)
}