cd /srv/picobot/tundo-discord-main
npm stop
echo "NPM stop command sent. Running updater tasks..."
cd /srv/picobot/
curl -L http://github.com/mar-on-github/tundo-discord/archive/main.tar.gz | tar zxf -
cp /srv/picobot/config.json.txt /srv/picobot/tundo-discord-main/config.json
cd /srv/picobot/tundo-discord-main
npm update