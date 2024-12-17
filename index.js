var http = require('http');
const { exec } = require('child_process');  // To run sonar-scanner

// Create the server
var server = http.createServer(function(request, response) {

    // Respond to HTTP requests
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!, Welcome To RSA!!");

});

// Start the server
var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

// Run SonarQube analysis after the server is up and running
exec('sonar-scanner -Dsonar.projectKey=my-project -Dsonar.sources=./ -Dsonar.host.url=$SONARQUBE_HOST', (err, stdout, stderr) => {
    if (err) {
        console.error('Error executing sonar-scanner:', err);
        return;
    }
    console.log('SonarQube analysis complete:', stdout);
    console.error(stderr);
});
