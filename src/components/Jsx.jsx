function formatName(user) {
  return user.firstname + '' + user.lastname
}

const user = {
  firstname: 'zou',
  lastname: 'feng'
}
const Element = (
  <h1>hello,{formatName(user)}</h1>
)
export default formatName
