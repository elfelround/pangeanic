



since all the passwords for the database etc are uploaded here, you should try to run this locally

debido a que los pass de la bd estan a plena vista, deberias usar servidor local en principio solamente

![alt text](https://github.com/elfelround/pangeanic/blob/master/frontend/src/assets/Screenshot%20from%202018-11-27%2004-25-46.png)



**first setup
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

---install python dependencies on a virtual enviroment on the backend dir--

**initialize virtual enviroment
$cd backend && pipenv --three
$pipenv shell
$pipenv install -r requirements.txt


--to run manually the back end server instead of using $./bootstrap.sh &
python -m src.main

---AUTO RUNNING REST BACKEND---
$cd backend
$pipenv shell
$./bootstrap.sh &
----
---FINALLY RUNNING FRONTEND---
$ng serve



*****FINAL LINK TO GO TO**********
browse http://localhost:4200


###running project again after having done it before
----database stuff only do this if you restart between trials since this will recreate db------

sudo docker rm -f /hire-erick-db
sudo docker run --name hire-erick-db \
    -p 5432:5432 \
    -e POSTGRES_DB=hire-erick \
    -e POSTGRES_PASSWORD=HIR3-er1ck \
    -d postgres

---end of database stuff-----


--running backend flask server----
cd hire-erick/backend
pipenv shell
./bootstrap.sh &
(if id collissions with previous server do a sudo kill on the 5000 port)

--not necessary but, leave that console open and open a new console for the frontend server--

--running frontend angular server----
cd hire-erick/frontend && ng serve

make some api post to add data (documented down below on api documentation with curl command) to the db and travel to frontend port on browser
http://localhost:4200/




*****************************************
-----API DOCUMENTATION-----
manual reason creation
curl -X POST -H 'Content-Type: application/json' -d '{
  "title": "Blah Blah",
  "description": "Bleh Bleh"
}' http://0.0.0.0:5000/things


//#interesting that ", Access-Control-Allow-Origin: *" CORS header on curl still works
# retrieval
curl http://0.0.0.0:5000/things


todo: 
frontend/src/app/creationform/creationform.component.ts
https://github.com/elfelround/pangeanic/blob/423d6c8e7a9565c851318d09121cb7cf2164f460/frontend/src/app/creationform/creationform.component.ts?fbclid=IwAR1v55cWiTejwYeeMkJnNZ1-qGAUylCMclEJhYtSKGZGzxkkOvJndnvrwrc#L28

Erick Lestrange   https://www.facebook.com/erick.mr.programs
