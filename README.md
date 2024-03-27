## Steps to run backend:

### Step 1:
In the project directory, you run command
#### `npm install`
This command will install all dependencies in package.json.
It will create folder 'node_modules' and file 'package-lock.json'

### Step 2:
Run command:
#### `npm start`
After running successfully, backend is listening [http://localhost:5000](http://localhost:5000) and connected to mongoDB


## APIs solved at backend:

#### GET /callogHistory
Get all documents of collection 'callogs' in mongoDB and response to frontend

#### POST /callogHistory
After call ended, frontend will post callog data to server, then server save it to mongoDB