# Zilkies 19 - FE

## Username Setup

1. Navigate to your root directory using.
```sh
cd ~
```
2. Create .bash_profile file using the command.
```sh
vi .bash_profile
```
3. Add the following line substituting `${username}` with your folder name. (All lower case and single word)
```sh
export ZILKIE_USERNAME=${username}
```
Eg: ZILKIE_USERNAME=sampleuser

4. Save the file and source it.
```sh
source .bash_profile
```
5. Make sure the system variable is set. This should display the username you gave in step  3.
```sh
echo $ZILKIE_USERNAME
```

## Folder Setup
1. Navigate to the root directory of the repository and use the following command to create a folder for yourself. Replace ${username} with the value used for `$ZILKIE_USERNAME`
```sh
cp -r sampleuser/ ${username} 
```

## Steps to run the Server
1. `npm install` - To install the required dependencies
2. `npm run start` - To start the Server. You should now see your base HTML page.

## To submit an exercise
1. Create a separate folder with your exercise name inside your ${username} folder
2. Create a `css` folder, a `js` folder, a `pages` folder and an `index.html` file inside it

Once you have completed your exercise and when you commit your code, a linter will run during commit to check for code styling errors. Clear all the errors to commit the code. Happy Coding..Peace.. :)
