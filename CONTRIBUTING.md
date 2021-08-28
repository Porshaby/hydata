<h1 align="center">Contributing</h1>
If you would like to contribute to our code please follow the steps carefully to ensure success. Or you can make an issue and we will try to resolve it 

<h1 align="center">Prequisites</h1>

- Node.js

- Visual Studio Code

- A github account

- Latest version of Firefox or Chrome (perferably Firefox as its easier to use)

##### the rest of the items listed aren't nessesary but are good for editing this code quickly
Material Icon Theme: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
Intellisense: https://code.visualstudio.com/docs/editor/intellisense



<h1 align="center">Getting ready to code</h1>

###### before you start this please read carefully and make sure you don't skip any parts. Also don't close the terminal until i state so

First head on down to our repository and click fork on the top right hand corner. Then you want to make a folder somewhere on your computer (idealy you should have a coding or vs code folder somewhere on your pc that you can access easily) that github will be able to copy all of the code on the repo to your pc. After you've forked you wanna clone the repo. To clone the repo you have to open the terminal window and change directories to where you made the file. (also known as cd). then you type `git clone https://github.com/quistty/hydata.git`. Note: you have to replace the link stated with the link to your repo. You can get this by clicking the green code button and copying the link. Once git finishes copying all the files to your pc you want to open that folder in vs code. If everything works then you should be able to see a folder called `hydata` with code inside. Open up the terminal once more and change directories to the folder github created. then run `npm i` to install all the dependancies 

To start the project on your own you need to get an api key from hypixel. 
Open up your minecraft client and log onto `mc.hypixel.net`. When you get there do /api and copy the key. It should look something like this:

`
8a615050-3411-4623-91ad-aeb4ca0d80c4 
`


Once you he the api key open vs code and open the hydata folder git created. You should see all the code there and a folder named `public`. Navagate to the public folder in the hydata on your pc and create a file called `apiKey.json`.
Then paste the following code in and replace `.` with your apiKey that you got from hypixel earlier.
```json
{
    "apiKey": "."
}

```

<h1 align="center">testing your code</h1>
Open the terminal window and cd to the folder github made. Then do `npm i --global http-server` in the terminal. Close and repoen the terminal and cd to the public folder in the file github made. Then run `http-server . -c0` and open your browser to `http://10.0.0.170:8080` (I personally suggest using firefox as it allows you to edit on the browser which is much quicker) happy coding!

###### note closing the terminal window will close the local host so keep it open until your done coding. Also anyone on your wifi can access the website by going to `http://10.0.0.170:8080`. Lastly if you close the terminal and you want to view the code you just have to follow the steps above starting at `testing your code`

<!--  im sorry  -->
Made with <3 by Porsha and Functiondotexe 
