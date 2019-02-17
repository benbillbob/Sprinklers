# Sprinklers

Step 1: Removing preinstalled Node.js and npm
Run the following commands in your pi’s terminal to remove any old installs of Node.js and npm

```bash
sudo apt remove nodered -y
sudo apt remove node nodejs nodejs-legacy -y
sudo apt remove npm -y
```
If you now run the node -v or npm -v commands you should get a command not found error. Once that’s set we’re going to run:

```bash
sudo apt remove --purge node
```
The purge flag is like the remove command, except it also removes any configuration or data files that remove may have left behind.

Step 2: Running the setup script
Next we’re going to use curl to download the setup script from NodeSource and run it immediately.

```bash
curl -sL http://deb.nodesource.com/setup_8.x | sudo bash -
```
As I mentioned earlier you can replace 8.x for say 7.x, 6.x, 5.x, etc. If you want to see all your options just head over to the NodeSource git repo and see which scripts are available to use. Once this finishes you’re almost done, just one final step.

Step 3: Installing node.js and npm
Once the script is finished it will tell you to run the apt-get install command as sudo, so that’s exactly what we’ll do:

```bash
sudo apt-get install nodejs
```
