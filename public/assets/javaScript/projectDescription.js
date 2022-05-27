$(document).ready(function () {
    var recommendationListArr01 = [
        "•	Cognitive behavioural therapy based",
        "•	Address both anxiety and low mood",
        "•	Designed for use by nonclinical populations",
        "•	Automated tailoring",
        "•	Reporting of thoughts, feelings, or behaviour's",
        "•	Recommend activities",
        "•	Mental health information",
        "•	Real-time engagement"
    ];

    var recommendationListArr02 = [
        "•	Activities explicitly linked to specific reported mood problems",
        "•	Encourage nontechnology-based activities",
        "•	Gamification and intrinsic motivation to engage",
        "•	Log of past app use",
        "•	Reminders to engage",
        "•	Simple and intuitive interface and interactions",
        "•	Links to crisis support services",
        "•	Experimental trials to establish efficacy"
    ];

    var npmListArr01 = [
        "•	ajax",
        "•	axios",
        "•	jquery",
        "•	mysql",
        "•	express",
        "•	path",
        "•	Procfile",
        "•	mongoose",
        "•	morgan",
        "•	dotenv"
    ];

    var npmListArr02 = [
        "•	fs",
        "•	require",
        "•	bycryptjs",
        "•	jsonwebtoken",
        "•	passport",
        "•	validator",
        "•	Microsoft Office",
        "•	Visual Studio",
        "•	Office 365",
        "•	MS Teams"
    ];

    var codingLanguagesArr01 = [
        "•	HTML: HyperText Markup Language that allows the developer to describe pages. The website will use HTML and CSS, with jQuery as the JavaScript library, allowing the website to easily use JavaScript to add interactivity as well as content that updates in a dynamic fashion.",
        "•	CSS: Style Sheet Language that allows the developer to style an HTML document",
        "•	Bootstrap: Library of HTML and CSS files and code https://getbootstrap.com/",
        "•	API: Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. An API call is being used to retrieve recent mental health articles.",
        "•	Node.js: An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. will be used as the architecture of the application, allowing for compatibility across multiple platforms and scalable website applications. Alongside node.js, dotenv, passport and socket.io will also be used.",
        "•	Express.js: An open-source web application framework for Node.js",
        "•	Heroku: Is a platform as a service (PaaS) that enables developers to build, run, and operate applications in the cloud",
        "•	mySQL: A relational database that organises data into one or more data tables in which data types may be related to each other. These relations help structure the data. will be used as a database for the application. It will enable features such as adding, processing and accessing data on the server."
    ]

    var codingLanguagesArr02 = [
        "•	mongoDB: Is a cross-platform document-oriented database program. It uses JSON-like documents with schema.",
        "•	React.js: User Interface (UI) components are used as an efficient way to render webpages. Combining this UI with the speed of JavaScript enables dynamic and responsive user inputs.",
        "•	Google Maps: a web mapping platform and consumer application offered by Google. It offers satellite imagery, aerial photography, and street maps. This will be used when searching for other users of the app in the general vicinity.",
        "•	bcrypt will be used as a library in order to hash passwords. This will be useful to ensure users' data is encrypted and security is maintained.",
        "•	ajax will be used when loading XML and JSON, allowing data to be read from the server, sent to the server as well as updating the webpage without physically reloading the page.",
        "•	dotenv will be used to create environment variables which will allow the program to configure authentication keys, URLS and passwords in a convenient and secure manner.",  
        "•	passport will act as the middleware authentication, whilst socket.io will enable real time communication between the client and server."
    ]
    
    getRecommendationsList01();
    getRecommendationsList02();
    getNpmList01();
    getNpmList02();
    getCodingLanguageList01();
    getCodingLanguageList02();

    function getRecommendationsList01() {
        $('#recommendationsList01').empty();
        console.log(recommendationListArr01);

        // Log the resulting object
        for(var i = 0; i < recommendationListArr01.length; i++) {
            var recommendItem = recommendationListArr01[i];

            var displayDiv = $('<div>');
            var listContainerEl = $('<ul>');
            var listItemEl = $('<li>');
            listItemEl.text(recommendItem)
             
            $('#recommendationsList01').append(displayDiv);
            displayDiv.append(listContainerEl);
            listContainerEl.append(listItemEl)
        }

        function profileBtn(event) {
            // This 'preventDefault' method tells the user agent that if the event does not get explicitly
            // handled, its default action should not be taken as it normally would be.
            event.preventDefault(event);
            // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
            // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
            // to know whether this method was ever called (on that event object).
            event.stopPropagation(event);
            console.log("city button clicked");
            var selectedNameIndex = $(this).attr('dataIndex').trim();
            console.log(selectedNameIndex);         
        }
    }

    function getRecommendationsList02() {
        $('#recommendationsList02').empty();
        console.log(recommendationListArr02);

        // Log the resulting object
        for(var i = 0; i < recommendationListArr02.length; i++) {
            var recommendItem = recommendationListArr02[i];

            var displayDiv = $('<div>');
            var listContainerEl = $('<ul>');
            var listItemEl = $('<li>');
            listItemEl.text(recommendItem)
             
            $('#recommendationsList02').append(displayDiv);
            displayDiv.append(listContainerEl);
            listContainerEl.append(listItemEl)
        }
    }

    function getNpmList01() {
        $('#npm01').empty();
        console.log(npmListArr01);

        // Log the resulting object
        for(var i = 0; i < npmListArr01.length; i++) {
            var npmItem = npmListArr01[i];

            var displayDiv = $('<div>');
            var listContainerEl = $('<ul>');
            var listItemEl = $('<li>');
            listItemEl.text(npmItem)
             
            $('#npm01').append(displayDiv);
            displayDiv.append(listContainerEl);
            listContainerEl.append(listItemEl)
        }
    }

    function getNpmList02() {
        $('#npm02').empty();
        console.log(npmListArr02);

        // Log the resulting object
        for(var i = 0; i < npmListArr02.length; i++) {
            var npmItem = npmListArr02[i];

            var displayDiv = $('<div>');
            var listContainerEl = $('<ul>');
            var listItemEl = $('<li>');
            listItemEl.text(npmItem)
             
            $('#npm02').append(displayDiv);
            displayDiv.append(listContainerEl);
            listContainerEl.append(listItemEl)
        }
    }

    function getCodingLanguageList01() {
        $('#codeLang01').empty();
        console.log(codingLanguagesArr01);

        // Log the resulting object
        for(var i = 0; i < codingLanguagesArr01.length; i++) {
            var codingLangItem = codingLanguagesArr01[i];

            var displayDiv = $('<div>');
            var listContainerEl = $('<ul>');
            var listItemEl = $('<li>');
            listItemEl.text(codingLangItem)
             
            $('#codeLang01').append(displayDiv);
            displayDiv.append(listContainerEl);
            listContainerEl.append(listItemEl)
        }
    }

    function getCodingLanguageList02() {
        $('#codeLang02').empty();
        console.log(codingLanguagesArr02);

        // Log the resulting object
        for(var i = 0; i < codingLanguagesArr02.length; i++) {
            var codingLangItem = codingLanguagesArr02[i];

            var displayDiv = $('<div>');
            var listContainerEl = $('<ul>');
            var listItemEl = $('<li>');
            listItemEl.text(codingLangItem)
             
            $('#codeLang02').append(displayDiv);
            displayDiv.append(listContainerEl);
            listContainerEl.append(listItemEl)
        }
    }
});
  