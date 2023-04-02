window.addEventListener("load", function () {
  const workExperience = [
    {
      companyName: "ScriptyLabs Inc",
      companyURL: "https://www.scriptylabs.rw/",
      title: "DevOps",
      dateRange: "January 2021 - Present",
      jobDetails: ["Collaborated with development teams to identify and troubleshoot issues in the software development life cycle (SDLC)",
    "Ensured system security and compliance by implementing best practices and standards, such as ISO 27001 or SOC 2",
    "Maintained and updated server configurations, applications, and operating systems to ensure stability and security",
    "Automated the deployment and configuration of software and services using tools such as Ansible, Terraform, and Kubernetes",
    "Implemented disaster recovery and business continuity plans to ensure minimal downtime and data loss in the event of a system failure or outage",
    "Designed and implemented load balancing and auto-scaling mechanisms to optimize system performance and handle increasing traffic loads."


  ],
    },
    // {
    //   companyName: "RICTA",
    //   companyURL: "https://www.ricta.org.rw",
    //   title: "Web Developer & UI/UX Designer",
    //   dateRange: "June 2020 - Current",
    //   jobDetails: [
    //     "Redesign of marketing site with Next.js & Tailwind CSS. Oversaw 2 other developers & played key role estimating, managing project timeline, & building components.",
    //     "Rebuilt blog from ground-up with React, Next.js, TypeScript, & HubSpot as a headless CMS. Project spanned the whole stack, from front-end to creating a Node/Express server & AWS Lambda functions.",
    //     "Implemented functional & design overhaul overhaul of user signup/signin pages that  led to 2x increase in users logging in post-signup.",
    //     "Developed custom modules for use in HubSpot landing pages and event triggers to update contact properties via API.",
    //     "Leverage agency experience to provide UX and SEO insights/strategy.",
    //   ],
    // },
    { 
      companyName: "Roots Rwanda",
      companyURL: "https://www.rootsrwanda.rw/",
      title: "Technical Project Manager",
      dateRange: "February 2020 - July 2022",
      jobDetails: [
        "Worked with a team of three designers to build a marketing website and e-commerce platform for Roots Rwanda, an ambitious startup originating from Northeastern.",
        "Helped solidify a brand direction for Roots Rwanda that spans both packaging and web.",
        "Ensured customer data security and privacy by implementing SSL/TLS encryption to secure data in transit."
      ],
    },
    {
      companyName: "Nambiar Associates",
      companyURL: "https://www.nambiarassociates.rw/",
      title: "CyberSecurity Defense",
      dateRange: "Jan 2022 - Current",
      jobDetails: [
        "Conducted vulnerability assessments and penetration tests on internal and external networks, applications, and systems",
        "Provided technical expertise and guidance to ensure compliance with industry regulations, such as PCI-DSS or HIPAA",
        "Developed and implemented security policies and procedures to protect against threats such as phishing attacks, social engineering, and malware",
        "Collaborated with cross-functional teams to identify and remediate security vulnerabilities, including developers, system administrators, and management",
        "Stayed up-to-date with the latest security threats, trends, and technologies to continuously improve security posture",
        "Assisted in incident response activities, such as investigating and remediating security breaches or incidents",
      ],
    },
    {
      companyName: "Buy in Rwanda",
      companyURL: "https://www.buyinrwanda.rw/",
      title: "Technical Project Manager",
      dateRange: "July 2022 - Current",
      jobDetails: [
        "Worked with a team of three designers to build a marketing website and e-commerce platform for Roots Rwanda, an ambitious startup originating from Northeastern.",
        "Helped solidify a brand direction for Roots Rwanda that spans both packaging and web.",
        "Ensured customer data security and privacy by implementing SSL/TLS encryption to secure data in transit.",
      ],
    },
  ];

  function showMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "visible";
    nav.style.transform = "translateX(0vw)";
    document.querySelector("#mobile-menu-button").classList.add("is-active");
  }

  function hideMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    nav.style.visibility = "hidden";
    nav.style.transform = "translateX(100vw)";
    document.querySelector("#mobile-menu-button").classList.remove("is-active");
  }

  function toggleMobileMenu() {
    var nav = document.getElementById("mobile-nav-wrapper");
    if (nav.style.visibility === "visible") {
      hideMobileMenu();
    } else {
      showMobileMenu();
    }
  }

  function addLineBreak() {
    let isMobile = window.matchMedia("(max-width: 500px)").matches;
    let mobileLineBreak = "";

    if (isMobile) {
      mobileLineBreak = "<br />";
    } else {
      mobileLineBreak = "";
    }

    return mobileLineBreak;
  }

  const initExperienceSection = () => {
    let br = addLineBreak();

    for (let i = 0; i < workExperience.length; i++) {
      document.querySelector("#jobList").innerHTML += `<li data-index=${i}>
                <div class="job-button ease-transition">${workExperience[i].companyName}</div>
            </li>`;
    }

    document
      .querySelectorAll("#jobList > li div")[0]
      .classList.add("job-button-selected");

    document.querySelector(
      ".jobTitle"
    ).innerHTML = `${workExperience[0].title} ${br} <span class="at-symbol">@</span> <a class="animate-links" href="${workExperience[0].companyURL}" target="_blank">${workExperience[0].companyName}</a>`;

    document.querySelector(".jobDateRange").textContent =
      workExperience[0].dateRange;

    workExperience[0].jobDetails.forEach((bullet) => {
      document.querySelector(
        "#job-bulletpoints ul"
      ).innerHTML += `<li>${bullet}</li>`;
    });
  };

  function renderExperienceSection(event) {
    if (event.target.matches(".job-button-selected")) {
      return;
    } else {
      let br = addLineBreak();

      document.querySelector("#job-bulletpoints ul").innerHTML = "";

      let index = event.target.parentElement.attributes["data-index"].value;

      document.querySelector(
        ".jobTitle"
      ).innerHTML = `${workExperience[index].title} ${br} <span class="at-symbol">@</span> <a class="animate-links" href="${workExperience[index].companyURL}" target="_blank">${workExperience[index].companyName}</a>`;

      document.querySelector(".jobDateRange").textContent =
        workExperience[index].dateRange;

      workExperience[index].jobDetails.forEach((bullet) => {
        document.querySelector(
          "#job-bulletpoints ul"
        ).innerHTML += `<li>${bullet}</li>`;
      });

      document
        .querySelectorAll("#jobList li div")
        .forEach((el) => el.classList.remove("job-button-selected"));
      event.target.classList.add("job-button-selected");
    }
  }

  function smoothScrollToCenter(elementId) {
    const el = document.getElementById(elementId);

    const position = elementId === "projects-section" ? "start" : "center";

    el.scrollIntoView({
      behavior: "smooth",
      block: position,
      inline: position,
    });
  }

  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".job-button")) {
        renderExperienceSection(event);
      }
    },
    false
  );

  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches(".navLink")) {
        console.log(event.target.attributes[1].value);
        smoothScrollToCenter(event.target.attributes[1].value);
      }
    },
    false
  );

  document
    .querySelector("#mobile-menu-button")
    .addEventListener("click", toggleMobileMenu);

  document
    .querySelector("#mobile-nav-tap-close-background")
    .addEventListener("click", hideMobileMenu);

  let mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  mobileNavLinks.forEach((el) => el.addEventListener("click", hideMobileMenu));

  initExperienceSection();
});
