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
**install angular
npm install -g @angular/cli

-------------END OF ENV DEP------------
-------------
