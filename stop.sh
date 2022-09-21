cd /srv/picobot/pico-discord-main
npm stop
echo "NPM stop command sent. Running updater tasks..."
cd /srv/picobot/
curl -L http://github.com/mar-on-github/pico-discord/archive/main.tar.gz | tar zxf -
cp /srv/picobot/config.json.txt /srv/picobot/pico-discord-main/config.json
cd /srv/picobot/pico-discord-main
npm update