// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const fs = require("fs");
const jQuery = require('jquery');
const util = require("util");
const stringify = require("json-stringify-safe");

// Sets up the Express App
// =============================================================
var app = express(handleRequest);
app.use(express.static(path.join(__dirname, '/public')));
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/db')));

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            return displayRoot(res);
        case "/aiEngineer":            
            return displayaiEngineer(res);         
        case "/careerPlans":
            return displaycareerPlans(res);
        case "/marketingManager":
            return displaymarketingManager(res);
        case "/uxDesigner":
            return displayuxDesigner(res);
        case "/softwareDeveloper":
            return displaysoftwareDeveloper(res);    
        case "/projectIdea":
            return displayProjectIdea(res);
        case "/tools":
            return displayTools(res);          
        case "/references":
            return displayReferences(res);    
        case "/reflection":
            return displayReflection(res);
        case "/plansProgress":
            return displayPlansProgress(res);      
        case "/projectDescription":
            return displayProjectDescription(res);   
        default:
            return display404(path, res);
    }
}

// When someone visits the "http://localhost:3000/" path, this function is run.
function displayRoot(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/index.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}



// When someone visits the "http://localhost:3000/" path, this function is run.
function displaycareerPlans(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/careerPlans.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits the "http://localhost:3000/" path, this function is run.
function displayaiEngineer(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/aiEngineer.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}



// When someone visits the "http://localhost:3000/" path, this function is run.
function displaymarketingManager(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/marketingManager.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}
// When someone visits the "http://localhost:3000/" path, this function is run.
function displayuxDesigner(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/uxDesigner.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}
// When someone visits the "http://localhost:3000/" path, this function is run.
function displaysoftwareDeveloper(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/softwareDeveloper.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits the "http://localhost:3000/" path, this function is run.
function displayProjectIdea(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/projectIdea.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits the "http://localhost:3000/" path, this function is run.
function displayTools(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/tools.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits the "http://localhost:3000/" path, this function is run.
function displayReferences(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/references.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits the "http://localhost:3000/" path, this function is run.
function displayReflection(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/reflection.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits the "http://localhost:3000/" path, this function is run.
function displayPlansProgress(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/plansProgress.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits the "http://localhost:3000/" path, this function is run.
function displayProjectDescription(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "./public/projectDescription.html", function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, res) {
    var myHTML = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
}

// Basic route that sends the user first to the AJAX Page

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/careerPlans", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/careerPlans.html"));
});

app.get("/aiEngineer", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/aiEngineer.html"));
});

app.get("/marketingManager", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/marketingManager.html"));
});

app.get("/uxDesigner", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/uxDesigner.html"));
});

app.get("/softwareDeveloper", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/softwareDeveloper.html"));
});

app.get("/projectIdea", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/projectIdea.html"));
});

app.get("/tools", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/tools.html"));
});

app.get("/references", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/references.html"));
});

app.get("/reflection", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/reflection.html"));
});

app.get("/plansProgress", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/plansProgress.html"));
});

app.get("/projectDescription", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/projectDescription.html"));
});

function getDataFromFile() {
    readFile();
    // Displays all notes
    app.get("/api/personal", function (request, response) {
        fs.readFile('./db/personal.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const noteArrayStr = JSON.parse(data);
            // console.log(noteArrayStr);
            // console.log(noteArrayStr[0].routeName);
            noteArrayStr.forEach(element => {
                // console.log(element.routeName);
            })
            return response.json(noteArrayStr);
        })
    });
    // Displays a single note, or returns false
    app.get("/api/personal/:id", function (request, response) {
        var chosen = request.params.id;
        console.log(chosen);
        fs.readFile('./db/personal.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const noteArrayStr = JSON.parse(data);
            // console.log(noteArrayStr[chosen].id);
            // console.log(noteArrayStr[chosen]);
            for (var i = 0; i < noteArrayStr.length; i++) {
                if (chosen == noteArrayStr[i].id) {
                    console.log(noteArrayStr[i]);
                    return response.json(noteArrayStr[i]);
                }
            }
            return response.json(false);
        })
    });
}

function getcareerPlansFromFile() {
    readcareerPlansFile();
    // Displays all notes
    app.get("/api/careerPlans", function (request, response) {
        fs.readFile('./db/careerPlans.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const noteArrayStr = JSON.parse(data);
            // console.log(noteArrayStr);
            // console.log(noteArrayStr[0].routeName);
            noteArrayStr.forEach(element => {
                // console.log(element.routeName);
            })
            return response.json(noteArrayStr);
        })
    });
    // Displays a single note, or returns false
    app.get("/api/careerPlans/:id", function (request, response) {
        var chosen = request.params.id;
        console.log(chosen);
        fs.readFile('./db/careerPlans.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const noteArrayStr = JSON.parse(data);
            // console.log(noteArrayStr[0].profileId);
            for (var i = 0; i < noteArrayStr.length; i++) {
                if (chosen == noteArrayStr[i].profileId) {
                    return response.json(noteArrayStr[i]);
                }
            }
            return response.json(false);
        })
    });
}

function getreferencesFromFile() {
    readreferencesDetailsFile();
    // Displays all notes
    app.get("/api/references", function (request, response) {
        fs.readFile('./db/references.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const noteArrayStr = JSON.parse(data);
            // console.log(noteArrayStr);
            // console.log(noteArrayStr[0].routeName);
            noteArrayStr.forEach(element => {
                // console.log(element.routeName);
            })
            return response.json(noteArrayStr);
        })
    });
    // Displays a single note, or returns false
    app.get("/api/references/:id", function (request, response) {
        var chosen = request.params.id;
        console.log(chosen);
        fs.readFile('./db/references.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const noteArrayStr = JSON.parse(data);
            // console.log(noteArrayStr[0].profileId);
            for (var i = 0; i < noteArrayStr.length; i++) {
                if (chosen == noteArrayStr[i].profileId) {
                    return response.json(noteArrayStr[i]);
                }
            }
            return response.json(false);
        })
    });
}

function getReflectionDetails() {
    readReflectionDetails();
    // Displays all notes
    app.get("/api/reflection", function (request, response) {
        fs.readFile('./db/reflection.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const noteArrayStr = JSON.parse(data);
            // console.log(noteArrayStr);
            // console.log(noteArrayStr[0].routeName);
            noteArrayStr.forEach(element => {
                // console.log(element.routeName);
            })
            return response.json(noteArrayStr);
        })
    });
    // Displays a single note, or returns false
    app.get("/api/reflection/:id", function (request, response) {
        var chosen = request.params.id;
        console.log(chosen);
        fs.readFile('./db/reflection.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const noteArrayStr = JSON.parse(data);
            // console.log(noteArrayStr[0].profileId);
            for (var i = 0; i < noteArrayStr.length; i++) {
                if (chosen == noteArrayStr[i].profileId) {
                    return response.json(noteArrayStr[i]);
                }
            }
            return response.json(false);
        })
    });
}

function getmeetingsFromFile() {
    readmeetingsDetailsFile();
    // Displays all notes
    app.get("/api/meetings", function (request, response) {
        fs.readFile('./db/meetings.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const noteArrayStr = JSON.parse(data);
            // console.log(noteArrayStr);
            // console.log(noteArrayStr[0].routeName);
            noteArrayStr.forEach(element => {
                // console.log(element.routeName);
            })
            return response.json(noteArrayStr);
        })
    });
    // Displays a single note, or returns false
    app.get("/api/meetings/:id", function (request, response) {
        var chosen = request.params.id;
        console.log(chosen);
        fs.readFile('./db/meetings.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            const noteArrayStr = JSON.parse(data);
            // console.log(noteArrayStr[0].profileId);
            for (var i = 0; i < noteArrayStr.length; i++) {
                if (chosen == noteArrayStr[i].profileId) {
                    return response.json(noteArrayStr[i]);
                }
            }
            return response.json(false);
        })
    });
}

getDataFromFile();
getcareerPlansFromFile();
getreferencesFromFile();
getmeetingsFromFile();
getReflectionDetails();

function readFile() {
    fs.readFile('./db/personal.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        else if (!data) {
            console.log('No array in saveFile please create new array!');
            const noteArray = [];
            const newDataArr = JSON.stringify(noteArray, null, 4)
    
            fs.writeFile("./db/personal.json", newDataArr, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            // console.log(newDataArr);
        }
        else {
        const noteArrayStr = JSON.parse(data);
        // console.log(noteArrayStr);
        }
    });
}

function readcareerPlansFile() {
    fs.readFile('./db/careerPlans.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        else if (!data) {
            console.log('No array in saveFile please create new array!');
            const noteArray = [];
            const newDataArr = JSON.stringify(noteArray, null, 4)
    
            fs.writeFile("./db/idealJob.json", newDataArr, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            // console.log(newDataArr);
        }
        else {
        const noteArrayStr = JSON.parse(data);
        // console.log(noteArrayStr);
        }
    });
}

function readreferencesDetailsFile() {
    fs.readFile('./db/references.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        else if (!data) {
            console.log('No array in saveFile please create new array!');
            const noteArray = [];
            const newDataArr = JSON.stringify(noteArray, null, 4)
    
            fs.writeFile("./db/references.json", newDataArr, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            // console.log(newDataArr);
        }
        else {
        const noteArrayStr = JSON.parse(data);
        // console.log(noteArrayStr);
        }
    });
}

function readmeetingsDetailsFile() {
    fs.readFile('./db/meetings.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        else if (!data) {
            console.log('No array in saveFile please create new array!');
            const noteArray = [];
            const newDataArr = JSON.stringify(noteArray, null, 4)
    
            fs.writeFile("./db/meetings.json", newDataArr, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            // console.log(newDataArr);
        }
        else {
        const noteArrayStr = JSON.parse(data);
        // console.log(noteArrayStr);
        }
    });
}

function readReflectionDetails() {
    fs.readFile('./db/reflection.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        else if (!data) {
            console.log('No array in saveFile please create new array!');
            const noteArray = [];
            const newDataArr = JSON.stringify(noteArray, null, 4)
    
            fs.writeFile("./db/reflection.json", newDataArr, function (err) {
                if (err) {
                    return console.log(err);
                }
            });
            // console.log(newDataArr);
        }
        else {
        const noteArrayStr = JSON.parse(data);
        // console.log(noteArrayStr);
        }
    });
}

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
