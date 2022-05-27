$(document).ready(function () {
    var recommendationListArr01 = [
        "•	Design and implement feature enhancements to existing React-based application",
        "•	Design and develop new frontend features and products",
        "•	Design and develop new backend features and products in Node.js",
        "•	Continuously evolve our technology stack to allow for a more standardised and faster deployment",
        "•	Write clean, well documented tested code",
        "•	Develop customised integration and automation services to solve operational problems",
        "•	Test, deploy, and perform ongoing support and maintenance",
        "•	Continuously strive to improve code and processes",
        "•	Troubleshoot technical problems and perform root cause analysis",
        "•	Develop end user and internal documentation for new and existing solutions",
        "•	Contribute to the planning and scoping of projects using our agile processes"
    ];

    var recommendationListArr02 = [
        "•	2+ years experience in designing, building, testing and deploying React applications",
        "•	Experience with Node.js",
        "•	Understanding of code refactoring, design patterns, continuous integration, application security etc.",
        "•	Experience integrating with RESTful APIs",
        "•	Experience with event-driven microservice architecture",
        "•	Experience with GraphQL",
        "•	Working knowledge of Amazon Web Services AWS or other cloud providers",
        "•	Experience with Docker, Kubernetes",
        "•	Experience with document databases such as MongoDB",
        "•	Experience with relational databases such as PostgreSQL"
    ];

    var npmListArr01 = [
        "•	Great Culture.",
        "•	Flexible working arrangements.",
        "•	Focus on work/life balance.",
        "•	Reward and recognition programs.",
        "•	Potential for development opportunities.",
        "•	Diverse and inclusive team."  
    ];

    var npmListArr02 = [
        "•	morgan",
        "•	dotenv",
        "•	fs",
        "•	require",
        "•	bycryptjs",
        "•	jsonwebtoken",
        "•	passport",
        "•	validator"
    ];

    var codingLanguagesArr = [
        "•	HTML: HyperText Markup Language that allows the developer to describe pages",
        "•	CSS: Style Sheet Language that allows the developer to style an HTML document",
        "•	Bootstrap: Library of HTML and CSS files and code https://getbootstrap.com/",
        "•	API: Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.",
        "•	Node.js: An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.",
        "•	Express.js: An open-source web application framework for Node.js",
        "•	Heroku: Is a platform as a service (PaaS) that enables developers to build, run, and operate applications in the cloud",
        "•	mySQL: A relational database that organises data into one or more data tables in which data types may be related to each other. These relations help structure the data.",
        "•	mongoDB: Is a cross-platform document-oriented database program. It uses JSON-like documents with schema.",
        "•	React.js: User Interface (UI) components are used as an efficient way to render webpages. Combining this UI with the speed of JavaScript enables dynamic and responsive user inputs.",
        "•	Google Maps: a web mapping platform and consumer application offered by Google. It offers satellite imagery, aerial photography, and street maps."
    ]
    
    getRecommendationsList01();
    getRecommendationsList02();
    getNpmList01();
    getNpmList02();
    getCodingLanguageList();

    function getRecommendationsList01() {
        $('#responsibility').empty();
        console.log(recommendationListArr01);

        // Log the resulting object
        for(var i = 0; i < recommendationListArr01.length; i++) {
            var recommendItem = recommendationListArr01[i];

            var displayDiv = $('<div>');
            var listContainerEl = $('<ul>');
            var listItemEl = $('<li>');
            listItemEl.text(recommendItem)
             
            $('#responsibility').append(displayDiv);
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
        $('#skillsExp').empty();
        console.log(recommendationListArr02);

        // Log the resulting object
        for(var i = 0; i < recommendationListArr02.length; i++) {
            var recommendItem = recommendationListArr02[i];

            var displayDiv = $('<div>');
            var listContainerEl = $('<ul>');
            var listItemEl = $('<li>');
            listItemEl.text(recommendItem)
             
            $('#skillsExp').append(displayDiv);
            displayDiv.append(listContainerEl);
            listContainerEl.append(listItemEl)
        }
    }

    function getNpmList01() {
        $('#whyUs').empty();
        console.log(npmListArr01);

        // Log the resulting object
        for(var i = 0; i < npmListArr01.length; i++) {
            var npmItem = npmListArr01[i];

            var displayDiv = $('<div>');
            var listContainerEl = $('<ul>');
            var listItemEl = $('<li>');
            listItemEl.text(npmItem)
             
            $('#whyUs').append(displayDiv);
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

    function getCodingLanguageList() {
        $('#codeLang01').empty();
        console.log(codingLanguagesArr);

        // Log the resulting object
        for(var i = 0; i < codingLanguagesArr.length; i++) {
            var codingLangItem = codingLanguagesArr[i];

            var displayDiv = $('<div>');
            var listContainerEl = $('<ul>');
            var listItemEl = $('<li>');
            listItemEl.text(codingLangItem)
             
            $('#codeLang01').append(displayDiv);
            displayDiv.append(listContainerEl);
            listContainerEl.append(listItemEl)
        }
    }
});
