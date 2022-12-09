function buildTeam(team) {
  function buildManager(manager) {
    return `
          <!-- Manager Card -->
          <div class="col">
              <div class="card h-100 shadow p-3 mb-5 bg-white rounded">
                  <div class="card-body text-bg-success mb-3">
                  <h5 class="card-title">${manager.getName()}</h5>
                <h6 class="card-text"><i class="bi bi-cup-hot-fill"></i> Manager</h6>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="man-id-number">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href= mailto: ${manager.getEmail()} id="man-email">${manager.getEmail()}</a></li>
                  <li class="list-group-item" id="man-office-number">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
          </div>
          `;
  }
  function buildIntern(intern) {
    return `
          <!-- Intern Card -->
          <div class="col">
            <div class="card h-100 shadow p-3 mb-5 bg-white rounded">
              <div class="card-body text-bg-success mb-3">
                  <h5 class="card-title">${intern.getName()}</h5>
                <h6 class="card-text"><i class="bi bi-journal-bookmark-fill"></i> Intern</h6>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="int-id-number">ID: ${intern.getId()}</li>
                  <li class="list-group-item">Email: <a href= mailto: ${intern.getEmail()} id="int-email">${intern.getEmail()}</a></li>
                  <li class="list-group-item" id="get-school">School: ${intern.getSchool()}</li>
                </ul>
            </div>
          </div>`;
  }
  function buildEngineer(engineer) {
    return `
          <!-- Engineer Card -->
          <div class="col">
          <div class="card h-100 shadow p-3 mb-5 bg-white rounded">
              <div class="card-body text-bg-success mb-3">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-text"><h6 class="card-text"><i class="bi bi-eyeglasses"></i> Engineer</h6>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item" id="eng-id-number">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href= mailto: ${engineer.getEmail()} id="eng-email">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href= https://github.com/${engineer.getGitHub()} id="eng-github">${engineer.getGitHub()}</li>
            </ul>
        </div>
      </div>
  `;
  }

  let html = [];
  let newManagersHtml = team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => buildManager(manager))
    .join("");
  html.push(newManagersHtml);

  let newInternsHtml = team
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => buildIntern(intern))
    .join("");
  html.push(newInternsHtml);

  let newEngineersHtml = team
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => buildEngineer(engineer))
    .join("");
  html.push(newEngineersHtml);

  return html.join("");
}

module.exports = (team) => {
  return `
      <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Employee Database</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
      />
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <!-- header -->
      <header class="bg-primary bg-gradient text-white" id="header">
        <h1 class="text-center align-middle">My Team</h1>
      </header>
  
  <!-- Start Card Grid -->
      <div class="row row-cols-1 row-cols-md-3 g-4">
          ${buildTeam(team)}
             
        </div>
    </body>
  </html>
      `;
};
