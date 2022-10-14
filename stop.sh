cd /srv/tundobot/tundo-discord-main
npm stop
echo "NPM stop command sent. Running updater tasks..."
cd /srv/tundobot/
curl -L http://github.com/mar-on-github/tundo-discord/archive/main.tar.gz | tar zxf -
cp /srv/tundobot/config.json.txt /srv/tundobot/tundo-discord-main/config.json
cd /srv/tundobot/tundo-discord-main
npm update