



since all the passwords for the database etc are uploaded here, you should try to run this locally

debido a que los pass de la bd estan a plena vista, deberias usar servidor local en principio solamente

![alt text](https://github.com/elfelround/pangeanic/blob/master/frontend/src/assets/Screenshot%20from%202018-11-27%2004-25-46.png)




-----------ENVIROMENT DEPENDENCIES-----------
install pipenv

**install docker https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
sudo apt install docker-ce

**create docker db
sudo docker run --name hire-erick-db \
    -p 5432:5432 \
    -e POSTGRES_DB=hire-erick \
    -e POSTGRES_PASSWORD=HIR3-er1ck \
    -d postgres

**have Node.js (i.e. >= 8)
**INSTALL NODE PACKAGES ON FRONT
cd frontend
npm install

-------------END OF ENV DEP-----------



**initialize virtual enviroment
$cd backend && pipenv --three
$pipenv shell
$pipenv install sqlalchemy psycopg2-binary
$pipenv install flask marshmallow
pipenv install flask-cors

to run python -m src.main

---AUTO RUNNING REST BACKEND---
$cd backend
$pipenv shell
$./bootstrap.sh &
----
---FINALLY RUNNING FRONTEND---
$ng serve



*****FINAL LINK TO GO TO**********
browse http://localhost:4200






*****************************************
-----API DOCUMENTATION-----
manual reason creation
curl -X POST -H 'Content-Type: application/json' -d '{
  "title": "Blah Blah",
  "description": "Bleh Bleh"
}' http://0.0.0.0:5000/things

# retrieval
curl http://0.0.0.0:5000/things


npm install --save rxjs-compat      in case 
