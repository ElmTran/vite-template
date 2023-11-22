export const convertRouter = (path, target) => {
    const arr = path.split('/')
    arr.pop()
    return `${arr.join('/')}/${target}`
}