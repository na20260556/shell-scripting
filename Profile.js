<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DevOps Engineer GitHub Profile</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .profile-container {
            background: #fff;
            max-width: 600px;
            margin: 40px auto;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .profile-header {
            text-align: center;
        }
        .profile-header h1 {
            margin: 0;
            color: #333;
        }
        .profile-header a {
            color: #0366d6;
            text-decoration: none;
        }
        .section-title {
            margin-top: 30px;
            color: #444;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
        }
        ul {
            padding-left: 20px;
        }
        .skills-list li, .projects-list li {
            margin-bottom: 8px;
        }
    </style>
</head>
<body>
    <div class="profile-container">
        <div class="profile-header">
            <h1 id="name"></h1>
            <h3 id="title"></h3>
            <a id="github" href="#" target="_blank">GitHub Profile</a>
            <p id="summary"></p>
        </div>
        <div>
            <h2 class="section-title">Skills</h2>
            <ul id="skills" class="skills-list"></ul>
        </div>
        <div>
            <h2 class="section-title">Projects</h2>
            <ul id="projects" class="projects-list"></ul>
        </div>
    </div>
    <script>
        // filepath: c:\devops\daws\repos\shell-scripting\Profile.js
        const devopsProfile = {
            name: "Your Name",
            title: "DevOps Engineer",
            github: "https://github.com/yourusername",
            summary: "Passionate DevOps Engineer with experience in automating deployments, managing CI/CD pipelines, and cloud infrastructure.",
            skills: [
                "CI/CD (Jenkins, GitHub Actions, GitLab CI)",
                "Containerization (Docker, Kubernetes)",
                "Cloud Platforms (AWS, Azure, GCP)",
                "Infrastructure as Code (Terraform, Ansible)",
                "Monitoring (Prometheus, Grafana)",
                "Scripting (Bash, Python)",
                "Version Control (Git)",
                "Configuration Management",
                "Linux Administration"
            ],
            projects: [
                {
                    name: "Automated Deployment Pipeline",
                    description: "Built a CI/CD pipeline using Jenkins and Docker for microservices."
                },
                {
                    name: "Kubernetes Cluster Setup",
                    description: "Deployed and managed scalable applications on Kubernetes."
                }
            ]
        };

        document.getElementById('name').textContent = devopsProfile.name;
        document.getElementById('title').textContent = devopsProfile.title;
        document.getElementById('github').href = devopsProfile.github;
        document.getElementById('summary').textContent = devopsProfile.summary;

        const skillsList = document.getElementById('skills');
        devopsProfile.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        const projectsList = document.getElementById('projects');
        devopsProfile.projects.forEach(project => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${project.name}:</strong> ${project.description}`;
            projectsList.appendChild(li);
        });
    </script>
</body>
</html>