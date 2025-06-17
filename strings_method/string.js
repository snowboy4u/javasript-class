let username = "snowboy"

username = username.toUpperCase()
username = username.trim()
username = username.slice(4) + username.slice(3,4) + username.slice(2,3) +username
username = username.replaceAll(',', '-')
console.log(username)