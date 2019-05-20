# Node playground

Pretty much dumping all my files here when playing with Node. Currently included: half of a CLI notes app 

## Usage - notes

### npm i (or npm install) 

node_modules is ignored by Git, so first step (given node and npm are installed) would be to cd into the drive this is cloned from, and then run npm i (or npm install) this will download all dependencies. 

### yargs

yargs is funky. creates node arguments. basically a mask for event.handler(argv) (i think)

#### adding/removing a note

there will be more functionality. but thus far, do this: 

##### node app add --title="Note Title" --body="Note body"
##### node app remove --title="Note Title"

###### *validation built in :) 
