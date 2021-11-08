const url =   process.env.NODE_ENV === 'production'
? "https://tabtabtab-chk.herokuapp.com"
: 'http://localhost:4000';
export default url