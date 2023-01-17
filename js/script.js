window.addEventListener("load", function () {
  const workExperience = [
    {
      companyName: "ScriptyLabs Inc",
      companyURL: "https://www.scriptylabs.rw/",
      title: "UI/UX Designer",
      dateRange: "January 2021 - Present",
      jobDetails: ["We take pride in our craft. Drawing on our deep expertise in product design, our Design",
    "team takes care of your user’s experience over the entire customer journey, at every",
    "touchpoint working hand in hand with your business team. We aim to achieve your",
  ],
    },
    {
      companyName: "RICTA",
      companyURL: "https://www.ricta.org.rw",
      title: "Web Developer & UI/UX Designer",
      dateRange: "June 2020 - Current",
      jobDetails: [
        "Redesign of marketing site with Next.js & Tailwind CSS. Oversaw 2 other developers & played key role estimating, managing project timeline, & building components.",
        "Rebuilt blog from ground-up with React, Next.js, TypeScript, & HubSpot as a headless CMS. Project spanned the whole stack, from front-end to creating a Node/Express server & AWS Lambda functions.",
        "Implemented functional & design overhaul overhaul of user signup/signin pages that  led to 2x increase in users logging in post-signup.",
        "Developed custom modules for use in HubSpot landing pages and event triggers to update contact properties via API.",
        "Leverage agency experience to provide UX and SEO insights/strategy.",
      ],
    },
    {
      companyName: "Roots Rwanda",
      companyURL: "https://www.rootsrwanda.rw/",
      title: "Technical Project Manager",
      dateRange: "February 2020 - July 2022",
      jobDetails: [
        "Design, and launch of an e-commerce website for a Roots Rwanda company.",
        "Spearheaded the internal effort to evolve the company’s internal resourcing and delivery monitoring processes through the integration of business intelligence tools. This allowed leadership to be more agile in response to ever-changing resourcing needs.",
      ],
    },
    {
      companyName: "Nambiar Associates",
      companyURL: "https://www.nambiarassociates.rw/",
      title: "Technology Project Manager",
      dateRange: "Jan 2022 - Nov 2022",
      jobDetails: [
        "Led technology projects in a deadline driven environment that married digital technology and physical production.",
        "Coordinated a large-scale project for a Fortune 500 company from inception through completion and was responsible for reporting project status to senior management.",
        "Maintained and enhanced client websites using HTML, CSS, JavaScript, and jQuery.",
      ],
    },
    {
      companyName: "Buy in Rwanda",
      companyURL: "https://www.buyinrwanda.rw/",
      title: "Technical Project Manager",
      dateRange: "July 2022 - Current",
      jobDetails: [
        "web development projects for multiple clients at a time.",
        "Oversaw the design, development, and launch of an e-commerce website for the company.",
        "Spearheaded the internal effort to evolve the company’s internal resourcing and delivery monitoring processes through the integration of business intelligence tools. This allowed leadership to be more agile in response to ever-changing resourcing needs.",
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
