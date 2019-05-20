# Node playground

Pretty much dumping all my files here when playing with Node

## Usage - node-notes-app

### npm i (or npm install) 

node_modules is ignored by Git, so first step (given node and npm are installed) would be to cd into the drive this is cloned from, and then run npm i (or npm install) this will download all dependencies. 

### yargs

yargs is funky. creates node arguments. basically a better way to create/access for process.argv.

#### adding/removing a note

there will be more functionality. but thus far, do this: 

##### node app add --title="Note Title" --body="Note body"
##### node app remove --title="Note Title"
It'll create & save data on a local JSON file :) 

###### *validation built in :) 