/*Get the body*/
const body = document.body

/* Create a new div element */
const div = document.createElement('div')
const p = document.createElement('p')

/* Add a text node */
div.textContent = 'I am a developer'
p.textContent = 'Hello World!'

//Apped the div
body.append(div)
body.append(p)
